# Ảnh dự án

Thả ảnh preview của từng dự án vào đây, đặt tên đúng theo `slug` trong
`src/components/sections/Projects.astro`:

- myamie.jpg
- hango.jpg
- seenic.jpg
- sams-english-school.jpg
- android-tools.jpg
- emotion-wallpaper.jpg
- random-decision.jpg
- random-workout.jpg
- memory-calendar.jpg

Định dạng nhận: jpg / jpeg / png / webp / avif. Astro sẽ tự tối ưu sang WebP,
đặt width/height (tránh CLS) và lazy-load. Chưa có ảnh thì card hiển thị placeholder.

Ảnh chân dung hero: đặt `src/assets/portrait.jpg` (eager, fetchpriority cao).
