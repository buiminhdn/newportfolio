# Portfolio — Bùi Quang Minh

Website portfolio cá nhân của **Bùi Quang Minh** — Android Developer, Web Developer, UI/UX & Graphic Designer.
Xây dựng bằng [Astro](https://astro.build), ưu tiên **hiệu năng tối đa**: HTML tĩnh, CSS thuần, **JavaScript ≈ 0 KB**, không dùng bất kỳ framework UI hay thư viện animation nào.

> ⚡️ **Ưu tiên hàng đầu: TỐC ĐỘ TẢI & SEO.**
> Mọi quyết định kỹ thuật trong dự án (không dùng thư viện, CSS thuần, JS tối thiểu, ảnh tối ưu, font self-host) đều phục vụ hai mục tiêu này trước tiên. Trang phải tải gần như tức thì và đạt thứ hạng tìm kiếm tốt — đẹp và tính năng chỉ được thêm khi **không** làm chậm trang hay ảnh hưởng SEO.

> 🌐 **Ngôn ngữ nội dung: tiếng Anh** (`<html lang="en">`). Mọi text hiển thị, mô tả dự án và meta SEO viết bằng tiếng Anh. Tài liệu nội bộ trong `docs/` dùng tiếng Việt.

## 🎯 Mục tiêu kỹ thuật

Trang được thiết kế để đạt Core Web Vitals "xanh" và tải cực nhanh:

- **Static output** — Astro build ra HTML thuần, deploy miễn phí trên Cloudflare Pages / Netlify / Vercel.
- **Không framework integration** (không React/Vue/...) → bundle JS gần như bằng 0.
- **CSS vanilla** — không Tailwind, không thư viện CSS; toàn bộ là design token + component class viết tay, Astro tự gom & minify, tách critical CSS theo trang.
- **Animation không thư viện** — hiệu ứng reveal-on-scroll dùng `IntersectionObserver` thuần (thay cho Framer Motion), kèm fallback `prefers-reduced-motion`.
- **Ảnh tối ưu** — dùng `astro:assets` (`<Image />`) để tự xuất WebP/AVIF, đặt sẵn `width`/`height` tránh CLS, lazy-load ảnh dưới fold.
- **Font self-host** — nạp qua Fontsource (hoặc `<link>` preconnect), không `@import` trong CSS để tránh round-trip & FOUT.

## 📁 Cấu trúc dự án

```text
/
├── public/                 # Asset tĩnh phục vụ nguyên trạng (favicon, robots.txt, og-image…)
│   └── favicon.svg
├── src/
│   ├── assets/             # Ảnh/SVG được Astro xử lý & tối ưu khi build
│   ├── components/         # Component .astro tái sử dụng (section, card, nav…)
│   ├── layouts/            # Layout gốc: <head>, font, meta SEO, global CSS
│   │   └── Layout.astro
│   ├── styles/             # Global stylesheet (design-system.css — xem docs/)
│   └── pages/              # Mỗi file = 1 route; index.astro là trang chủ
│       └── index.astro
├── docs/                   # Tài liệu nội dung & design system (xem bên dưới)
├── astro.config.mjs        # Cấu hình Astro (output static mặc định)
├── tsconfig.json
└── package.json
```

> Quy ước: nội dung hiển thị lấy từ `docs/README.md`; style lấy từ `docs/design-system.css` (copy vào `src/styles/`); cách tích hợp tối ưu theo `docs/design-system.astro.md`.

## 📚 Tài liệu trong `docs/`

Thư mục `docs/` là "nguồn sự thật" cho cả nội dung lẫn giao diện của portfolio:

| File | Vai trò |
| :--- | :--- |
| [docs/README.md](docs/README.md) | **Hồ sơ nội dung đầy đủ** — toàn bộ thông tin đưa lên portfolio: tổng quan, định hướng nghề nghiệp, năng lực (Android / Web / UI-UX / Graphic Design), dự án Android & Web/SaaS tiêu biểu, kinh nghiệm Canva theo thương hiệu, học vấn, điểm mạnh, công cụ, liên hệ. Đây là tài liệu gốc để lấp dữ liệu vào các section. |
| [docs/design-system.astro.md](docs/design-system.astro.md) | **Hướng dẫn tích hợp tối ưu vào Astro** — cách nạp font, nạp CSS một lần ở layout gốc, dựng animation reveal bằng `IntersectionObserver` (0 KB JS framework), tối ưu ảnh bằng `astro:assets`, checklist SEO (thẻ ngữ nghĩa, OG, JSON-LD, sitemap) và cấu hình build tiết kiệm nhất. |
| [docs/design-system.css](docs/design-system.css) | **Global stylesheet** — design token (CSS variables), component class (`.btn-primary`, `.chip`, `.media`…) và animation reveal (`.reveal`, `.from-left/right`, biến `--i` để stagger). Vanilla, tương thích trực tiếp với Astro. |
| [docs/design-system.html](docs/design-system.html) | **Bản mockup HTML tham chiếu** — minh hoạ markup & class của design system để port sang component `.astro`. |

## 🧞 Lệnh

Chạy từ thư mục gốc của dự án:

| Lệnh | Tác dụng |
| :--- | :--- |
| `npm install` | Cài dependencies |
| `npm run dev` | Chạy dev server tại `localhost:4321` |
| `npm run build` | Build site tĩnh ra `./dist/` |
| `npm run preview` | Xem trước bản build trước khi deploy |
| `npm run astro ...` | Chạy CLI Astro (`astro add`, `astro check`…) |

## ⚙️ Yêu cầu môi trường

- Node.js `>= 22.12.0`
- Astro `^6.4.6`

## 📦 Triển khai

Build ra HTML/CSS tĩnh trong `dist/`, host được ở bất kỳ static hosting nào (Cloudflare Pages, Netlify, Vercel, GitHub Pages). Không cần server runtime.
