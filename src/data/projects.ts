/**
 * Single source of truth cho project hiển thị ở home.
 *
 * - Trang home chỉ hiển thị project có `featured: true`, tách theo `kind`
 *   ('web-app' và 'design') trong section FeaturedWork.
 *
 * Ảnh preview: đặt tại src/assets/projects/<slug>.{jpg,png,webp,…}
 * — chưa có thì fallback /placeholder.png.
 */

export type ProjectKind = 'web-app' | 'design';

export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	slug: string;
	name: string;
	kind: ProjectKind;
	/** Hiển thị trên trang home (trong section tương ứng với `kind`). */
	featured?: boolean;
	/** Nhãn nhỏ trên card, vd "Best Product". */
	category?: string;
	/** Một dòng tóm tắt — dùng cho lead project. */
	tagline: string;
	/** Mô tả ngắn — dùng cho card. */
	description: string;
	tech?: string[];
	links?: ProjectLink[];
}

export const projects: Project[] = [
	// ── WEB / APP ───────────────────────────────────────────────────────
	{
		slug: 'myamie',
		name: 'MYAmie',
		kind: 'web-app',
		featured: true,
		category: 'Featured Case Study',
		tagline: 'Cross-platform community system — web & mobile, realtime at its core.',
		description:
			'Cross-platform community: one .NET Core backend powering a React web app and a React Native mobile app, realtime over SignalR.',
		tech: ['React', 'React Native', '.NET Core', 'PostgreSQL', 'Redis', 'SignalR', 'AWS', 'GitHub Actions'],
	},
	{
		slug: 'hango',
		name: 'Hango',
		kind: 'web-app',
		featured: true,
		category: 'Best Product',
		tagline: 'Interest-based platform to find groups, join events and chat in real time.',
		description: 'Interest-based platform to find groups, join events and chat in real time.',
		tech: ['Next.js', 'Supabase', 'WebSocket'],
	},
	{
		slug: 'seenic',
		name: 'Seenic',
		kind: 'web-app',
		featured: true,
		category: 'Best Mobile-first',
		tagline: 'Local discovery platform with auth, image upload, filtering and pagination.',
		description: 'Local discovery platform with auth, image upload, filtering and pagination.',
		tech: ['Next.js', 'TypeScript', 'Firebase'],
	},
	{
		slug: 'sams-english-school',
		name: "Sam's English School",
		kind: 'web-app',
		featured: true,
		category: 'Best Design',
		tagline: 'Education website optimized for mobile and SEO to support enrollment.',
		description: 'Education website optimized for mobile and SEO to support enrollment.',
		tech: ['React', 'Tailwind CSS'],
		links: [{ label: 'Live', href: 'https://samenglishschool.com/' }],
	},
	{
		slug: 'emotion-wallpaper',
		name: 'Emotion Wallpaper',
		kind: 'web-app',
		category: 'Best Android App',
		tagline: 'Change your wallpaper based on your current mood — fast and personalized.',
		description: 'Change your wallpaper based on your current mood — fast and personalized.',
		tech: ['Kotlin', 'Jetpack Compose'],
	},
	{
		slug: 'android-tools',
		name: 'Android Tools',
		kind: 'web-app',
		category: 'Best Dev Tool',
		tagline: 'Browser-based toolkit: JSON→Room, API Tester, Image→WebP and more.',
		description: 'Browser-based toolkit: JSON→Room, API Tester, Image→WebP and more.',
		tech: ['Web', 'Developer Tools'],
		links: [{ label: 'Live', href: 'https://android.buiminh.com/' }],
	},
	{
		slug: 'memory-calendar',
		name: 'Memory Calendar',
		kind: 'web-app',
		category: 'Best Local-first',
		tagline: 'Save moments and memories as a calendar — local-first and privacy-friendly.',
		description: 'Save moments and memories as a calendar — local-first and privacy-friendly.',
		tech: ['Kotlin', 'Room'],
	},

	// ── DESIGN (CANVA) ──────────────────────────────────────────────────
	// TODO: thay placeholder bằng project design thật (tên, mô tả, ảnh, link Canva).
	{
		slug: 'design-brand-identity',
		name: 'Design Project 1',
		kind: 'design',
		featured: true,
		category: 'Brand Identity',
		tagline: 'TODO: mô tả ngắn cho project design — vai trò của bạn & kết quả.',
		description: 'Placeholder — brand identity / visual system designed in Canva.',
		tech: ['Canva', 'Brand Identity'],
	},
	{
		slug: 'design-social-kit',
		name: 'Design Project 2',
		kind: 'design',
		featured: true,
		category: 'Social Media Kit',
		tagline: 'TODO: mô tả ngắn cho project design — vai trò của bạn & kết quả.',
		description: 'Placeholder — social media template kit designed in Canva.',
		tech: ['Canva', 'Social Media'],
	},
	{
		slug: 'design-presentation',
		name: 'Design Project 3',
		kind: 'design',
		featured: true,
		category: 'Presentation',
		tagline: 'TODO: mô tả ngắn cho project design — vai trò của bạn & kết quả.',
		description: 'Placeholder — presentation / pitch deck designed in Canva.',
		tech: ['Canva', 'Presentation'],
	},
];

export const featuredByKind = (kind: ProjectKind): Project[] =>
	projects.filter((p) => p.kind === kind && p.featured);
