# Ảnh Brand & Creative Work

Mỗi brand 1 bộ **4 ảnh** cho bento. Đặt tên theo `slug` brand (trong
`src/data/designShowcase.ts`) + số thứ tự ô:

| File | Vị trí trong bento |
| --- | --- |
| `<slug>-1.jpg` | Ảnh LỚN (cột trái) |
| `<slug>-2.jpg` | Phải · trên-trái |
| `<slug>-3.jpg` | Phải · trên-phải |
| `<slug>-4.jpg` | Phải · dưới (rộng) |

Ví dụ cho brand `lumiere`:

- `lumiere-1.jpg`, `lumiere-2.jpg`, `lumiere-3.jpg`, `lumiere-4.jpg`

Thêm/sửa brand trong `src/data/designShowcase.ts` (`brands`), tab chọn brand tự
sinh theo data. Định dạng: jpg / jpeg / png / webp / avif (Astro tự tối ưu WebP).
Thiếu ảnh nào → ô đó hiện `/placeholder.png`.
