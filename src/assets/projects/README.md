# Ảnh dự án

Thả ảnh preview của từng dự án vào đây, đặt tên đúng theo `slug` trong
`src/data/projects.ts`. Ảnh được dùng cho card/lead trong section Work ở trang home.

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
