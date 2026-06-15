/**
 * Creative Design Showcase — dữ liệu cho section Bento Grid (asymmetrical).
 *
 * Bố cục: bento 2 HÀNG × 4 CỘT. 2 card rộng (col:2) nằm chéo góc trên-trái và
 * dưới-phải, 4 card nhỏ (col:1) ở giữa → asymmetrical. Pattern cột mỗi hàng:
 *   hàng 1: 2 · 1 · 1   |   hàng 2: 1 · 1 · 2
 * Text (category + title) luôn nằm trên ảnh, có lớp gradient để đọc được.
 * Giữ đúng 6 item để khít 2 hàng (đổi thứ tự = đổi vị trí ô).
 *
 * Ảnh: src/assets/design/<slug>.{jpg,png,webp}; chưa có → /placeholder.png.
 * TODO: thay nội dung placeholder bằng project design THẬT.
 */

export type DesignCategory = 'Branding' | 'Social Media' | 'Poster' | 'Marketing';

export interface DesignShowcaseItem {
	slug: string;
	title: string;
	category: DesignCategory;
	/** Màu nhấn riêng của card — dùng cho category chip. */
	accent: string;
	client: string;
	goal: string;
	result: string;
	thinking: string;
	tags?: string[];
	/** Số cột card chiếm trong bento grid (1 = nhỏ, 2 = rộng). */
	col: number;
}

export const designShowcase: DesignShowcaseItem[] = [
	// ── Hàng 1: 2 · 1 · 1 ──────────────────────────────────────────────
	{
		slug: 'lumiere-atelier',
		title: 'Lumière Atelier',
		category: 'Branding',
		accent: '#e8c37a',
		client: 'Lumière Atelier — luxury interior studio',
		goal: 'Reposition a 12-year-old studio from "contractor" to high-end design house.',
		result: '+38% inbound luxury leads · featured in 2 design magazines',
		thinking: 'Stripped the palette to ink + brass and let whitespace do the talking — luxury is restraint.',
		tags: ['Logo System', 'Type', 'Stationery'],
		col: 2,
	},
	{
		slug: 'nova-skincare',
		title: 'Nova Skincare',
		category: 'Social Media',
		accent: '#b18cff',
		client: 'Nova — clean beauty startup',
		goal: 'Build a launch-day content kit that feels premium but scroll-stopping.',
		result: '1.2M organic reach in week one · 4.7% engagement',
		thinking: 'Designed a 9-grid that reads as one mural when viewed on the profile — the feed is the hero shot.',
		tags: ['Instagram', 'Templates', 'Motion'],
		col: 1,
	},
	{
		slug: 'echo-festival',
		title: 'Echo Festival',
		category: 'Poster',
		accent: '#d1eb77',
		client: 'Echo — indie music festival',
		goal: 'Create a poster series with one identity across 6 stages.',
		result: 'Sold-out print run · poster shared 9k+ times',
		thinking: 'Treated typography as architecture — letterforms become the stage scaffolding.',
		tags: ['Print', 'Typography', 'Series'],
		col: 1,
	},

	// ── Hàng 2: 1 · 1 · 2 ──────────────────────────────────────────────
	{
		slug: 'veloce-ev',
		title: 'Veloce EV',
		category: 'Marketing',
		accent: '#ff8a6b',
		client: 'Veloce — electric mobility',
		goal: 'Translate "silent speed" into a cross-channel ad system.',
		result: '+24% test-drive bookings · CTR 2.1× benchmark',
		thinking: 'Negative space as motion blur — the product moves even when the layout is still.',
		tags: ['Ads', 'OOH', 'Key Visual'],
		col: 1,
	},
	{
		slug: 'kintsugi-coffee',
		title: 'Kintsugi Coffee',
		category: 'Branding',
		accent: '#e8c37a',
		client: 'Kintsugi — specialty roastery',
		goal: 'A packaging identity that survives a crowded café shelf.',
		result: 'Shelf pickup +31% in A/B retail test',
		thinking: 'Borrowed the gold-seam metaphor — every label is "repaired", never identical.',
		tags: ['Packaging', 'Logo', 'Pattern'],
		col: 1,
	},
	{
		slug: 'horizon-saas',
		title: 'Horizon SaaS Launch',
		category: 'Marketing',
		accent: '#ff8a6b',
		client: 'Horizon — B2B analytics',
		goal: 'Make a dry analytics product feel inevitable and premium.',
		result: 'Landing conversion +19% · 3.4k waitlist in 2 weeks',
		thinking: 'Data as luxury — charts rendered like jewelry, not dashboards.',
		tags: ['Landing', 'Deck', 'Brand'],
		col: 2,
	},
];
