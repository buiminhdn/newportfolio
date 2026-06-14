# Portfolio Remake Strategy

## Goal

Biến portfolio từ một website giới thiệu cá nhân thông thường thành một sản phẩm thể hiện tư duy của một Senior Android Engineer, Product Builder và Problem Solver.

Mục tiêu không phải làm website đẹp hơn.

Mục tiêu là:

- Gây ấn tượng trong 5 giây đầu tiên.
- Thể hiện năng lực thực tế.
- Tăng tỷ lệ recruiter liên hệ.
- Tăng giá trị cảm nhận cá nhân.
- Tạo cảm giác "đây là người xây dựng sản phẩm thật".

---

# Current Problems

## 1. Hero Section chưa đủ mạnh

Hiện tại:

- Chỉ gồm text + button + ảnh.
- Thiếu visual hook.
- Thiếu điểm nhấn cảm xúc.
- Không tạo được ấn tượng khác biệt.

Cảm giác hiện tại: "Đây là một portfolio template."

Thay vì: "Đây là portfolio của một engineer giỏi."

## 2. Quá nhiều text nhưng quá ít impact

Website chứa About, Skills, Projects, Experience, Education — nhưng chưa trả lời được: "Tôi nên tuyển người này vì sao?"

## 3. Project Section chưa bán được năng lực

Các project hiện tại: cùng layout, cùng hierarchy, thiếu hình ảnh thật, thiếu số liệu, thiếu case study.

Người xem chỉ thấy: Project → Description → Tags. Thay vì: Problem → Solution → Impact.

## 4. Thiếu cá tính thương hiệu

Màu Black / White / Neon Green — đẹp nhưng phổ biến, không tạo nhận diện riêng.

---

# Design Direction

## Design Keywords

Premium · Technical · Modern · Product-focused · Visual-first · Interactive · Memorable

## Visual Style

Neo Brutalism × Futuristic Dashboard: dark background, strong typography, technical grid, glow accents, motion graphics, product metrics.

---

# New Information Architecture

## Hero (100vh fullscreen)

- Tên.
- Role: Android Engineer · Product Builder · UI Enthusiast.
- Headline: **Building products that people actually use.**
- Không dùng đoạn mô tả dài.

### Hero Visual

Thay ảnh profile đơn thuần bằng: 3D avatar / floating tech stack / Android elements / animated orbit / dynamic background.

### Hero Stats

`4+ Years Experience` · `20+ Projects` · `100K+ Users Impacted` · `10+ Products Shipped`

## About Section

Không dùng paragraph dài. Chuyển thành:

- **Story:** Tôi xây dựng sản phẩm như thế nào.
- **Timeline:** Started Android → First Product → First Startup Project → Current Position.

## Skills Section

Bỏ tag cloud truyền thống. Thay bằng skill radar / metric cards / interactive graph.

- **Engineering:** Kotlin, Compose, Coroutines, Flow, Clean Architecture.
- **Product:** UI/UX, Research, Growth.
- **Web:** React, Astro, Next.js.

## Featured Project (section quan trọng nhất, gần full viewport, chỉ 1 project)

Case study structure:

- **Problem** — khách hàng gặp vấn đề gì.
- **Solution** — đã xây dựng gì.
- **Challenges** — khó khăn kỹ thuật.
- **Decisions** — tại sao chọn giải pháp đó.
- **Results** — số liệu cụ thể (vd: 50K users, +30% retention, +25% conversion, 4.8 rating).

## Project Gallery (sau Featured)

Chỉ 4–6 project tốt nhất: Best Product · Best Android App · Best Design Project · Best Business Project.

### Project Card Design

Mỗi card: screenshot thật, device mockup, impact metrics, tech stack, live demo. **Không dùng placeholder image.**

## Experience (Vertical Timeline)

Mỗi mốc: Company · Position · Achievements (không chỉ mô tả công việc).

Ví dụ: Built app serving 20K+ users · Reduced crash rate by 40% · Led redesign increasing conversion by 25%.

## Education

Thu gọn — không phải yếu tố bán hàng chính.

## Social Proof (section mới)

Testimonials: khách hàng, đồng nghiệp, founder, manager.

## Activity Section

Github contributions, recent articles, open source projects, product experiments. Cho thấy đang liên tục phát triển.

## Contact Section

Thiết kế như CTA cuối landing page. Headline: **Let's build something meaningful.**

Buttons: Email · Github · LinkedIn · Resume.

---

# Motion Design

Website hiện tại quá tĩnh. Cần thêm: infinite marquee (tech stack), floating elements (tech icons), mouse parallax (hero), card hover (3D tilt), scroll reveal (section), animated grid (background).

---

# Performance Requirements

- Lighthouse 95+
- Performance 95+
- Accessibility 95+
- SEO 100

---

# Content Rules

Mỗi section phải trả lời ít nhất một câu hỏi:

- Who are you?
- What can you build?
- Why should I trust you?
- What impact have you created?
- How can I contact you?

Nếu section không trả lời được một trong các câu hỏi trên thì loại bỏ.

---

# Execution Plan (phased)

Ràng buộc đã chốt: **vanilla thuần, 0 KB JS framework**; số liệu/screenshots **để slot trống** (placeholder.png + TODO, không bịa số); làm **tuần tự theo phase**.

- [x] **Phase 1 — Brand & Design System.** Bảng màu mới (violet + cyan glow), `--font-mono`, tokens glow/brutal, utility nền: `.grid-bg`, `.glow`, `.metric`, `.eyebrow`, `.brutal`, `.marquee`, `.tilt`, `.parallax` — tất cả vanilla, có `prefers-reduced-motion`.
- [x] **Phase 2 — Hero (100vh).** Eyebrow mono + tên + roles + headline "Building products that people actually use." + 4 Hero Stats (metric card, **TODO số liệu thật**) + media frame glow + mouse parallax/tilt vanilla + technical grid background.
- [x] **Phase 3 — Featured Project** (`Featured.astro`, `#featured`). Case study MYAmie: Problem → Solution → Challenges → Decisions → Results (4 metric **TODO**), screenshot tilt + brutal frame.
- [x] **Phase 4 — Project Gallery** (`Projects.astro`). 6 card tuyển chọn (Best Product/Mobile-first/Android/Design/Dev Tool/Local-first), card dọc có 3D tilt + glow hover, slot impact metric, live demo; link Marcus Labs.
- [x] **Phase 5 — About (Story + Timeline), Skills (card lưới mono), Experience (vertical timeline + achievements, slot metric).**
- [x] **Phase 6 — Testimonials (slot TODO, không bịa) + Activity (link kênh thật) + Contact CTA** ("Let's build something meaningful." + Email/GitHub/LinkedIn/Resume).
- [x] **Phase 7 — Motion polish.** Tech-stack marquee, mouse parallax, 3D tilt (Hero + gallery), scroll reveal, animated technical grid — vanilla, có `prefers-reduced-motion`, script gộp ở Layout.
- [x] **Phase 8 — Performance & SEO.** `site` trong astro.config, `public/robots.txt` + `public/sitemap.xml` (viết tay, 0 lib), `compressHTML`, JSON-LD/OG/canonical sẵn ở Layout. Build: 0 file JS riêng, CSS ~23KB, HTML ~6.9KB gzip.

> Slot data còn chờ bạn điền (đánh dấu `TODO` trong code): Hero Stats, Featured Results, gallery impact metrics, Experience achievements, Testimonials, GitHub username, `public/resume.pdf`. Ảnh: thả `src/assets/portrait.*`, `src/assets/featured.*`, `src/assets/projects/<slug>.*`.

## Màu sắc
Primary đổi **violet → electric blue `#3b6dff`** (bỏ tím), accent cyan `#22e0c8` giữ nguyên. Đổi 1 chỗ: `--color-primary` trong `src/styles/design-system.css`.

---

# Final Feeling

Người xem sau khi kết thúc website phải cảm thấy:

- "Người này không chỉ biết code."
- "Người này biết xây dựng sản phẩm."
- "Người này có tư duy của một Senior Engineer."
- "Tôi muốn liên hệ với người này."
