/**
 * Brand & Creative Work — mỗi brand 1 bộ 4 ảnh hiển thị dạng bento.
 * Chọn tab brand → đổi sang bộ ảnh của brand đó.
 *
 * Ảnh đặt tại src/assets/design/ theo slug + số thứ tự ô:
 *   <slug>-1  → ảnh LỚN (cột trái)
 *   <slug>-2  → ô phải trên-trái
 *   <slug>-3  → ô phải trên-phải
 *   <slug>-4  → ô phải dưới (rộng)
 * vd: lumiere-1.jpg, lumiere-2.jpg, lumiere-3.jpg, lumiere-4.jpg
 * Thiếu ảnh nào → ô đó hiện /placeholder.png.
 *
 * TODO: thay bằng brand & ảnh thật.
 */

export interface DesignBrand {
	slug: string;
	name: string;
}

export const brands: DesignBrand[] = [
	{ slug: 'lumiere', name: 'Lumière Atelier' },
	{ slug: 'nova', name: 'Nova Skincare' },
	{ slug: 'echo', name: 'Echo Festival' },
];
