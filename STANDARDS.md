# Hengzhe's Science Classroom — Project Standards

**Internal reference for building and maintaining all courses.**

Last updated: 2026-02-14

---

## 1. Repository Naming

```
HZ-{course-slug}
```

- All repos live under the `Hengzhe-Science-Classroom` GitHub org
- Slug is lowercase English, hyphen-separated
- Examples: `HZ-real-analysis`, `HZ-middle-school-math`, `HZ-calculus`
- Each repo gets GitHub Pages enabled (legacy mode, deploy from `main`, path `/`)

---

## 2. File Structure (every course)

```
├── index.html              # Main HTML page, loads KaTeX + scripts
├── app.js                  # Core application logic (sidebar, navigation, progress)
├── styles.css              # Dark theme, env-blocks, viz containers, responsive
├── viz-engine.js           # Canvas 2D visualization toolkit
├── chapters/               # One .js file per chapter (lazy-loaded)
│   ├── ch00-{slug}.js
│   ├── ch01-{slug}.js
│   └── ...
└── README.md               # Course plan, chapter table, references
```

---

## 3. index.html

- Uses KaTeX CDN (v0.16.9) for math rendering
- Contains `CHAPTER_MANIFEST` array for lazy loading:

```javascript
window.CHAPTER_MANIFEST = [
    {number: 0, id: 'ch00', title: 'Chapter Title', file: 'ch00-slug'},
    {number: 1, id: 'ch01', title: 'Chapter Title', file: 'ch01-slug'},
    // ...
];
```

- Roadmap in the welcome screen shows Parts (A, B, C...) with chapter lists
- Sidebar with search, progress bar, chapter navigation
- Must include `sidebar-toggle` button for mobile

---

## 4. app.js

- Core `App` object with these methods:
  - `init()`, `loadScript()`, `ensureChapterLoaded()`
  - `loadProgress()`, `saveProgress()`, `markSectionComplete()`
  - `renderSidebar()`, `updateProgressUI()`
  - `loadChapter()`, `loadSection()`, `renderSectionTabs()`
  - `renderMath()`, `initVisualizations()`, `renderExercises()`
  - `nextSection()`, `prevSection()`, `updateNavButtons()`
  - `escapeMathHtml()` — escape `<` and `>` inside LaTeX delimiters

- localStorage key: `{course-slug}-progress` (e.g., `real-analysis-progress`)
- Progress stored as `{ chapterId: [completedSectionIndices] }`
- Supports `window.EXTRA_VIZ` for viz-specialist agents to inject extra visualizations

---

## 5. Chapter File Format

Each chapter file is a standalone `.js` that pushes to `window.CHAPTERS`:

```javascript
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',                    // Must match CHAPTER_MANIFEST
    number: 0,                     // Must match CHAPTER_MANIFEST
    title: 'Chapter Title',
    subtitle: 'Optional subtitle',
    sections: [
        {
            id: 'sec-name',
            title: 'Section Title',
            content: `
                <h2>Section Heading</h2>
                <p>Content with \\(inline math\\) and display math:</p>
                \\[E = mc^2\\]

                <div class="env-block definition">
                    <div class="env-title">Definition 1.1 (Name)</div>
                    <div class="env-body"><p>...</p></div>
                </div>

                <div class="viz-placeholder" data-viz="viz-id"></div>
            `,
            visualizations: [
                {
                    id: 'viz-id',         // Must match data-viz attribute
                    title: 'Viz Title',
                    description: 'Brief description',
                    setup: function(body, controls) {
                        // Canvas 2D visualization code
                        // Return object with stopAnimation() if animated
                    }
                }
            ],
            exercises: [
                {
                    question: 'Exercise text with \\(math\\)',
                    hint: 'Optional hint',
                    solution: 'Solution text'
                }
            ]
        },
        // more sections...
    ]
});
```

### Content Rules

- Use `\\(` and `\\)` for inline math, `\\[` and `\\]` for display math
- Do NOT use `$...$` delimiters (they conflict with JavaScript template literals)
- Always escape `<` and `>` as `&lt;` and `&gt;` inside LaTeX when using innerHTML
- Use Unicode characters directly (e.g., `→` not `\\u2192`) in canvas `fillText` calls
- Use HTML entities in content strings (e.g., `&amp;` for `&`)

---

## 6. Environment Blocks (CSS Classes)

| Class | Color | Use For |
|-------|-------|---------|
| `.definition` | Green | Definitions |
| `.theorem` | Orange | Theorems |
| `.proposition` | Orange (lighter) | Propositions |
| `.lemma` | Yellow | Lemmas |
| `.corollary` | Yellow (lighter) | Corollaries |
| `.proof` | Purple | Proofs (include `<div class="qed">∎</div>`) |
| `.example` | Blue | Worked examples |
| `.remark` | Gray | Remarks and notes |
| `.warning` | Red | Common mistakes / warnings |
| `.intuition` | Teal | Intuitive explanations |

Structure:
```html
<div class="env-block theorem">
    <div class="env-title">Theorem 2.3 (Name)</div>
    <div class="env-body"><p>Statement...</p></div>
</div>
```

---

## 7. Visualizations (VizEngine)

### VizEngine class provides:

- `constructor(canvas, options)` — creates a managed Canvas 2D context
- Coordinate system: `setCoords(xMin, xMax, yMin, yMax)` with auto-scaling
- Drawing: `drawAxes()`, `drawGrid()`, `drawPoint()`, `drawLine()`, `drawArrow()`
- Interactive: `addSlider(label, min, max, value, callback)`, `addButton(label, callback)`
- Animation: `startAnimation(callback)`, `stopAnimation()`
- Colors: `viz.colors.blue`, `.teal`, `.orange`, `.green`, `.purple`, `.red`, `.white`, `.text`, `.muted`

### Analysis-specific extensions (Real Analysis):

- `drawFunction(f, xMin, xMax, color, lw, steps)`
- `drawEpsilonBand(L, epsilon, color)`
- `drawDeltaBand(a, delta, color)`
- `shadeBetween(f1, f2, xMin, xMax, color, steps)`
- `drawRiemannSums(f, a, b, n, type, color)` — type: 'left'|'right'|'mid'
- `drawSequence(seq, nMax, color, r)`
- `drawOpenInterval(a, b, y, color, lw)`
- `drawClosedInterval(a, b, y, color, lw)`

### Rules:

- All viz use `setup: function(body, controls)` pattern
- Return `{ stopAnimation: function() {...} }` if animation is used
- Use `requestAnimationFrame` for animations, not `setInterval`
- Canvas should be responsive: `canvas.width = body.clientWidth`
- Min height: 200px, typical: 300-400px
- Use VizEngine color palette, not hardcoded hex values
- Each course may extend VizEngine with domain-specific helpers

---

## 8. Styles (CSS)

### Color Palette (CSS variables):

```css
--bg-darkest: #080818;    --bg-dark: #0c0c20;
--bg-medium: #121230;     --bg-light: #1a1a40;
--bg-lighter: #222255;    --bg-sidebar: #0a0a1e;
--bg-card: #14142e;

--text-primary: #c9d1d9;  --text-secondary: #8b949e;
--text-bright: #f0f6fc;   --text-muted: #6e7681;

--accent-blue: #58a6ff;   --accent-teal: #3fb9a0;
--accent-orange: #f0883e; --accent-green: #3fb950;
--accent-purple: #bc8cff; --accent-red: #f85149;
--accent-yellow: #d29922; --accent-pink: #f778ba;
```

### Key Rules:

- Always dark theme (no light mode toggle)
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`
- Monospace: `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`
- KaTeX font size: `1.05em`
- Sidebar width: `300px`, collapsible on mobile (< 768px)
- Responsive breakpoints: 768px, 1024px, 1600px

---

## 9. README Format

Every repo README must include:

1. **Title** — `# Course Name · Interactive`
2. **Subtitle** — one-line description
3. **App link** — `[Open the App](url)` (or "coming soon")
4. **Tier badge** — `Part of Hengzhe's Science Classroom · Tier X · Level`
5. **Chapter table** — columns: #, Topic, Sections, Visualizations, Exercises
6. **References** — full bibliographic citations (author, title, edition, publisher)
7. **Features** — standard feature list
8. **Quick Start** — git clone + open instructions
9. **License** — "Educational use. Free & open source."

---

## 10. Build Process (30-Agent Team)

### Team Setup:
- Create team with `TeamCreate`
- 22 writer agents (2 per chapter for A/B cross-validation)
- 4 reviewer agents (cross-validate A vs B versions)
- 1 integration agent (syntax check, final merge)
- 3 spare agents

### A/B Cross-Validation:
1. Two independent agents write each chapter (Version A and Version B)
2. Neither agent sees the other's output
3. Reviewers compare both versions and merge the best:
   - Better content structure
   - More rigorous math
   - Better visualizations
   - More exercises
4. B files are deleted after merge; only the final merged version ships

### Agent Naming:
- Writers: `ch{NN}-writer-a`, `ch{NN}-writer-b`
- Reviewers: `reviewer-{range}` (e.g., `reviewer-03`, `reviewer-47`)
- Integration: `integrator`

### Quality Checks:
- All chapter files must pass `node --check` syntax validation
- Chapter `id` and `number` must match `CHAPTER_MANIFEST`
- No B files should remain after merge
- All viz `data-viz` attributes must have matching viz objects

---

## 11. Hub Website Updates

When a course goes LIVE:

1. **hub/index.html**: Change `<div>` to `<a>` with href, emoji from planned to ✅, status from `status-planned` to `status-live`
2. **hub/index.html**: Update stats: courses count, visualization count
3. **hub/i18n.js**: Update both English and Chinese badge text (`X courses live — Y more planned`)
4. **hub/README.md**: Add to Live Courses table
5. **.github/profile/README.md**: Add to Live Courses table

### Button/Link Text Conventions:
- Link to a course app: **"Open the App"** (not "Open App" or "Try It")
- Link to hub website: **"Visit the website"** (not "Browse the catalog")

---

## 12. Git Conventions

### Commit Messages:
```
type: short description

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

Types: `feat`, `fix`, `docs`, `refactor`, `style`, `chore`

### Branch Strategy:
- All work on `main` branch
- GitHub Pages deploys from `main`

### What NOT to commit:
- `.DS_Store`
- `node_modules/`
- `.env` files
- B version files (should be deleted before commit)

---

## 13. Tier System

| Tier | Label | Audience | Example |
|------|-------|----------|---------|
| 1 | Foundation | Elementary & Middle School | Fun Arithmetic, 初中数学 |
| 2 | High School | High school students | 高中物理, Algebra, Geometry |
| 3 | Undergraduate | University students | Calculus, Linear Algebra, Data Structures |
| 4 | Graduate | Graduate students | Real Analysis, Abstract Algebra, Algorithms |
| 5 | Research Frontier | Researchers | Algebraic Geometry, QFT, Deep Learning |

---

## 14. Course Plan Storage

Detailed course plans (chapter-by-chapter with viz descriptions) are stored in:
```
~/.claude/projects/.../memory/{course}-plan.md
```

Courses with detailed plans:
- `middle-school-math-plan.md` — 初中数学 (21 chapters)
- `high-school-physics-plan.md` — 高中物理 (21 chapters)
- `high-school-chemistry-plan.md` — 高中化学 (18 chapters)
- `calculus-plan.md` — 微积分 (20 chapters)
- `mathematical-statistics-plan.md` — 数理统计 (18 chapters)
- `intro-probability-plan.md` — 概率论 (22 chapters)
- `abstract-algebra-plan.md` — 抽象代数 (23 chapters)
- `algorithms-plan.md` — 算法设计与分析 (22 chapters)
- `topology-plan.md` — 拓扑学 (18 chapters)
- `deep-learning-plan.md` — 深度学习 (22 chapters)
- `statistical-modeling-plan.md` — 统计建模 (22 chapters)
- `causal-inference-plan.md` — 因果推断 (20 chapters)
- `high-dimensional-statistics-plan.md` — 高维统计 (20 chapters)
