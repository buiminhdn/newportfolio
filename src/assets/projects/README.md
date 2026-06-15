# Ảnh dự án

Thả ảnh preview/hero của từng dự án vào đây, đặt tên đúng theo `slug` trong
`src/data/projects.ts`. Cùng một ảnh được dùng cho card ở trang home và hero ở
trang chi tiết `/projects/<slug>`.

Web / App:

- myamie.jpg
- hango.jpg
- seenic.jpg
- sams-english-school.jpg
- emotion-wallpaper.jpg
- android-tools.jpg
- memory-calendar.jpg

Design (Canva) — TODO đổi slug khi thay project thật:

- design-brand-identity.jpg
- design-social-kit.jpg
- design-presentation.jpg

Định dạng nhận: jpg / jpeg / png / webp / avif. Astro sẽ tự tối ưu sang WebP,
đặt width/height (tránh CLS) và lazy-load. Chưa có ảnh thì hiển thị placeholder.

Ảnh chân dung hero: đặt `src/assets/portrait.jpg` (eager, fetchpriority cao).
