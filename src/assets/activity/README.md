# Ảnh Activity

Mỗi activity hiện grid tối đa 3 ảnh nhỏ. Đặt tên theo `<key>-<n>`:

| Activity              | key          | tên file                                          |
| --------------------- | ------------ | ------------------------------------------------- |
| Volleyball            | `volleyball` | `volleyball-1.jpg`, `volleyball-2.jpg`, `volleyball-3.jpg` |
| Running & Swimming    | `fitness`    | `fitness-1.jpg`, `fitness-2.jpg`, `fitness-3.jpg`         |
| Basketball & Badminton| `recreation` | `recreation-1.jpg`, `recreation-2.jpg`, `recreation-3.jpg`|

- Định dạng nhận: `jpg`, `jpeg`, `png`, `webp`, `avif`.
- Ảnh hiển thị tỉ lệ 4:3 (`object-fit: cover`), nên ảnh ngang là hợp nhất.
- Thiếu ảnh nào sẽ hiện placeholder kèm badge tên file cần bỏ vào.
