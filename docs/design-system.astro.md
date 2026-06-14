# Tích hợp Design System vào Astro (tối ưu hiệu năng / SEO / nhẹ)

Mục tiêu: LCP nhanh, Core Web Vitals xanh, JS gần như bằng 0, CSS nhỏ nhất.

---

## 1. Font — chọn 1 trong 2 (ưu tiên A)

### A. Self-host bằng Fontsource — **nhanh & SEO tốt nhất** (khuyến nghị)

Không gọi domain bên thứ ba → không round-trip, không FOUT, preload được.

```bash
npm i @fontsource/bebas-neue @fontsource/poppins
```

```astro
---
// src/layouts/Base.astro
import '@fontsource/bebas-neue';            // chỉ có 1 weight (400)
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '../styles/design-system.css';       // copy file css vào đây
---
```

> Chỉ import đúng 5 weight đang dùng (200/300/400/500/600) + Bebas Neue 400.
> Đừng import cả gói — sẽ kéo theo hàng chục file font không dùng.

### B. Google Fonts qua `<link>` (nếu không muốn thêm dependency)

Đặt trong `<head>` của layout — **không** dùng `@import` trong CSS:

```astro
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@200;300;400;500;600&display=swap"
    rel="stylesheet"
  />
</head>
```

---

## 2. Nạp CSS

`design-system.css` là global stylesheet — import **một lần** trong layout gốc:

```astro
---
import '../styles/design-system.css';
---
```

Astro tự gom & minify CSS khi build, tách critical CSS theo trang. Không cần làm gì thêm.
Token (CSS variables) và class component dùng trực tiếp trong file `.astro`:

```astro
<a href="#contact" class="btn-primary">CONTACT ME</a>
<span class="chip">Next.js</span>
```

---

## 3. Animation reveal — giữ 0 KB JS framework

Không cần React/island. Dùng 1 script vanilla, đặt cuối layout. Astro mặc định
**không** hydrate gì cả nên đây là JS thuần, rất nhẹ:

```astro
<script>
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
</script>
```

Dùng class `.reveal` (+ `.from-left` / `.from-right`, biến `--i` để stagger) như trong CSS.
Đã có fallback `prefers-reduced-motion`.

---

## 4. Ảnh — điểm quyết định hiệu năng (quan trọng nhất)

Dự án portfolio nhiều ảnh (project, honor, aura...). Đây là nơi ảnh hưởng LCP/băng thông nhiều nhất.
Dùng component ảnh built-in của Astro thay cho `<img>` thường:

```astro
---
import { Image } from 'astro:assets';
import boss from '../assets/boss.jpg';
---
<Image src={boss} alt="Bui Quang Minh" width={800} height={1000}
       format="webp" loading="eager" />   <!-- ảnh hero: eager -->

<Image src={project1} alt="..." width={600} height={400}
       format="webp" loading="lazy" />     <!-- ảnh dưới fold: lazy -->
```

- Astro tự xuất **WebP/AVIF**, đặt `width`/`height` (tránh layout shift → CLS tốt).
- Ảnh hero (LCP) dùng `loading="eager"` + cân nhắc `fetchpriority="high"`.
- Mọi ảnh khác `loading="lazy"`.
- Bỏ `object-cover` cố định height nếu để Astro xử lý kích thước; class `.media` vẫn dùng được cho bo góc.

---

## 5. SEO — phần CSS không lo, cần làm ở HTML/layout

Design system chỉ là CSS, không tự lo SEO. Trong layout Astro thêm:

```astro
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bùi Quang Minh — Full-stack Developer</title>
  <meta name="description" content="..." />
  <link rel="canonical" href={Astro.url.href} />
  <!-- Open Graph + Twitter card -->
  <meta property="og:title" content="..." />
  <meta property="og:image" content="..." />
  <!-- JSON-LD Person schema cho portfolio -->
</head>
```

- Dùng đúng thẻ ngữ nghĩa: `<header> <main> <section> <h1>` (chỉ một `<h1>`/trang), `<nav>`, `<footer>`.
- Thêm `sitemap` (`@astrojs/sitemap`) và `robots.txt`.
- Mọi ảnh có `alt` thật (hiện nhiều `alt=""` trong bản React — cần sửa khi port).

---

## 6. "Tiết kiệm nhất" — cấu hình build

- **Không cài framework integration** (`@astrojs/react`...) nếu không bắt buộc → bundle JS ≈ 0.
- Để Astro output **static** (`output: 'static'`, mặc định) → deploy free trên Cloudflare Pages / Netlify / Vercel.
- CSS đã là vanilla, không cần Tailwind → không có bước generate utility, ít phụ thuộc hơn.
- Tránh import thư viện chỉ để 1 hiệu ứng (đã thay Framer Motion bằng CSS + IntersectionObserver).

---

## Tóm tắt: file CSS đã hợp với Astro chưa?

✅ **Có**, sau khi đã bỏ `@import` font khỏi CSS (đã sửa).
Token, component class, và reveal-on-scroll đều là vanilla → tương thích trực tiếp, JS tối thiểu.
Hai việc còn lại nằm **ngoài** file CSS và phải làm khi dựng trang Astro: **nạp font ở `<head>`**
(mục 1) và **dùng `astro:assets` cho ảnh** (mục 4) — đây mới là yếu tố quyết định hiệu năng/SEO.
