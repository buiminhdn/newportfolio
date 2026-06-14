// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Dùng cho canonical URL & absolute OG image. Đổi nếu deploy domain khác.
	site: 'https://buiminh.com',
	// Static output mặc định + nén HTML khi build.
	compressHTML: true,
});
