# Ảnh Design Showcase

Ảnh cho section **Design Showcase** (masonry) — đặt tên theo `slug` trong
`src/data/designShowcase.ts`. Mỗi project dùng tối đa 5 ảnh:

| File | Vai trò |
| --- | --- |
| `<slug>.jpg` | **After** — thành phẩm (ảnh chính của card) |
| `<slug>-before.jpg` | **Before** — bản gốc/nháp (hiện khi hover wipe) |
| `<slug>-p1.jpg` … `-p3.jpg` | **Process snippets** — ảnh quá trình (3 ô nhỏ) |

Ví dụ cho `lumiere-atelier`:

- `lumiere-atelier.jpg`
- `lumiere-atelier-before.jpg`
- `lumiere-atelier-p1.jpg`, `-p2.jpg`, `-p3.jpg`

Định dạng: jpg / jpeg / png / webp / avif (Astro tự tối ưu WebP + lazy-load).
**Chưa có ảnh** → card tự hiển thị gradient theo `accent` của project (vẫn đúng
tông dark luxury), nên bạn có thể điền nội dung trước, thêm ảnh sau.

Tỉ lệ card (chiều cao masonry) điều khiển bằng field `ratio` trong data, không phụ
thuộc kích thước ảnh — ảnh sẽ `object-fit: cover` theo khung.
