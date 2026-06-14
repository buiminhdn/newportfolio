# PLAN — Build Portfolio Bùi Quang Minh

Kế hoạch 5 bước xây dựng portfolio bằng Astro, **ưu tiên hàng đầu: tốc độ tải & SEO**.
Nguyên tắc xuyên suốt: HTML tĩnh, CSS thuần, JS ≈ 0 KB, không thêm thư viện ngoài.

> 🌐 **Ngôn ngữ dự án: TIẾNG ANH.** Toàn bộ nội dung hiển thị trên site (UI text, mô tả dự án, meta SEO) viết bằng tiếng Anh; `<html lang="en">`. Tài liệu nội bộ trong `docs/` và `PLAN.md` vẫn dùng tiếng Việt để trao đổi.

---

## Bước 1 — Nền tảng: layout, font & design system ✅

Dựng khung kỹ thuật trước khi viết nội dung.

- [x] Copy [docs/design-system.css](docs/design-system.css) vào `src/styles/design-system.css`.
- [x] Tạo `src/layouts/Layout.astro` làm layout gốc: `<head>` chuẩn (title, description, canonical, OG/Twitter, JSON-LD Person), nạp font qua Google Fonts `<link>` preconnect (**không thêm dependency**) và import `design-system.css` **một lần**.
- [x] Script reveal-on-scroll bằng `IntersectionObserver` thuần đặt cuối layout.
- [x] Tham chiếu [docs/design-system.astro.md](docs/design-system.astro.md) mục 1–3 (không `@import` font trong CSS).

**Done:** build static OK, không có JS bundle riêng (JS framework = 0), 1 file CSS.

---

## Bước 2 — Component & cấu trúc trang ✅

Tách giao diện thành component `.astro` tái sử dụng, dựa trên mockup [docs/design-system.html](docs/design-system.html).

- [x] Section component (`src/components/sections/`): `Nav`, `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Education`, `Contact`, `Footer`.
- [x] Component nhỏ tái dùng (`src/components/`): `SectionTitle`, `Chip`, `ProjectCard`.
- [x] Ráp tất cả vào `src/pages/index.astro` bằng đúng thẻ ngữ nghĩa (`<header> <main> <section> <footer>`, chỉ **một** `<h1>` ở Hero).

**Done:** bố cục đầy đủ section, markup ngữ nghĩa, build OK. Ảnh đang dùng placeholder — thay bằng `astro:assets` ở Bước 4.

---

## Bước 3 — Đổ nội dung từ hồ sơ ✅

Lấy nội dung thật từ [docs/README.md](docs/README.md) (nguồn sự thật), viết bằng **tiếng Anh**.

- [x] Tổng quan + định hướng nghề nghiệp → Hero / About.
- [x] Năng lực chuyên môn → Skills (6 nhóm: Android, Web, UI/UX, Graphic, Testing & Quality, Tools & Platforms).
- [x] Dự án Web/SaaS (MYAmie, Hango, Seenic, Sam's, Android Tools) + Android/Marcus Labs (4 app) → Projects.
- [x] Kinh nghiệm làm việc, học vấn → Experience / Education.
- [x] Thông tin liên hệ (email, phone, portfolio, social) → Contact / Footer.

**Done:** mọi section có nội dung thật bằng tiếng Anh. (Ảnh dùng placeholder cho tới khi có file thật — xem Bước 4.)

---

## Bước 4 — Tối ưu ảnh & animation (giữ 0 KB JS framework) ✅

Đây là nơi quyết định LCP/băng thông — làm theo [docs/design-system.astro.md](docs/design-system.astro.md) mục 3–4.

- [x] Hạ tầng `astro:assets` (`<Image />`) sẵn sàng: thả ảnh vào `src/assets/` → tự xuất WebP, có `width`/`height` (tránh CLS). Dùng `import.meta.glob` để gắn ảnh theo `slug`; chưa có ảnh thì hiện placeholder.
- [x] Ảnh hero (LCP): `loading="eager"` + `fetchpriority="high"` (`src/assets/portrait.*`).
- [x] Ảnh dự án: `loading="lazy"`, `alt` thật theo tên dự án (`src/assets/projects/<slug>.*`).
- [x] Animation reveal-on-scroll bằng **`IntersectionObserver` thuần** (`.reveal`, `--i` stagger), fallback `prefers-reduced-motion` (đã có trong CSS + script ở Layout).

**Done:** không thư viện animation, build không có JS bundle riêng, ảnh tối ưu qua astro:assets khi thả file vào `src/assets/`.

> 📷 **Còn lại (cần file thật):** thả ảnh chân dung `src/assets/portrait.jpg` và ảnh dự án vào `src/assets/projects/` (xem `src/assets/projects/README.md`). Trước khi có ảnh, site dùng placeholder.

---

## Bước 5 — SEO, kiểm thử hiệu năng & deploy

Chốt hai mục tiêu hàng đầu rồi phát hành.

- [ ] **SEO:** title, meta description, canonical, Open Graph + Twitter card, JSON-LD `Person`; thêm `@astrojs/sitemap` và `robots.txt`.
- [ ] `npm run build` → static; chạy `npm run preview` kiểm tra.
- [ ] **Đo Lighthouse** (Performance + SEO): mục tiêu Core Web Vitals xanh, điểm SEO ~100, JS bundle ≈ 0.
- [ ] Kiểm tra responsive + accessibility (heading order, alt, contrast).
- [ ] Deploy static lên Cloudflare Pages / Netlify / Vercel.

**Done khi:** Lighthouse Performance & SEO đạt mục tiêu, trang live và tải gần như tức thì.

---

### Nguyên tắc kiểm tra ở mọi bước
> Trước khi thêm bất cứ thứ gì: nó có làm chậm trang hoặc ảnh hưởng SEO không? Nếu có → tìm cách khác hoặc bỏ.
