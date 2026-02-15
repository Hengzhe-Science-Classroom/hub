/* ================================================================
   i18n.js  –  Internationalization for Hengzhe's Science Classroom Hub
   Usage:  window.I18N.en["key"]  /  window.I18N.zh["key"]
   ================================================================ */

window.I18N = {

/* ----------------------------------------------------------------
   ENGLISH
   ---------------------------------------------------------------- */
en: {
    // Page metadata
    "meta.title": "Hengzhe's Science Classroom",
    "meta.description": "From elementary school to the research frontier — interactive science education with visualizations for Math, CS, Physics & Chemistry",

    // Navigation
    "nav.home": "Home",
    "nav.journey": "Journey",
    "nav.features": "Features",
    "nav.vision": "Vision",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "4 courses live — 88 more planned",
    "hero.title1": "Hengzhe's",
    "hero.title2": "Science Classroom",
    "hero.subtitle": "From elementary curiosity to research frontiers — interactive, visualization-driven science education for everyone.",
    "hero.cta.start": "Start Exploring",

    // Stats
    "stats.courses": "Courses Planned",
    "stats.tiers": "Tiers",
    "stats.disciplines": "Disciplines",
    "stats.visualizations": "Visualizations (so far)",

    // Journey section header
    "journey.tag": "The Journey",
    "journey.title": "From Curiosity to Frontier",
    "journey.desc": "Five tiers of science education. Every concept gets the interactive treatment it deserves.",

    // Tier badges
    "tier1.badge": "TIER 1",
    "tier2.badge": "TIER 2",
    "tier3.badge": "TIER 3",
    "tier4.badge": "TIER 4",
    "tier5.badge": "TIER 5",

    // Tier 1: Foundation
    "tier1.name": "\u{1F331} \u542F\u8499 Foundation",
    "tier1.desc": "Elementary & Middle School — where curiosity begins",

    // Tier 1 - Mathematics
    "tier1.math.name": "Mathematics",
    "tier1.math.1.title": "Fun Arithmetic & Number Sense",
    "tier1.math.1.author": "Operations, patterns, number games",
    "tier1.math.2.title": "Fractions, Decimals & Ratios",
    "tier1.math.2.author": "Visual fraction models, proportional reasoning",
    "tier1.math.3.title": "Geometric Intuition",
    "tier1.math.3.author": "Shapes, symmetry, transformations",
    "tier1.math.4.title": "Mathematical Thinking Games",
    "tier1.math.4.author": "Logic puzzles, combinatorics, reasoning",
    "tier1.math.5.title": "Intro to Number Theory",
    "tier1.math.5.author": "Primes, factors, GCD, LCM",

    // Tier 1 - Physics
    "tier1.phys.name": "Physics",
    "tier1.phys.1.title": "Forces & Motion Intuition",
    "tier1.phys.1.author": "Newton's laws made tangible",
    "tier1.phys.2.title": "Light & Sound",
    "tier1.phys.2.author": "Reflection, refraction, color, waves",
    "tier1.phys.3.title": "Simple Circuits",
    "tier1.phys.3.author": "Circuit builder, Ohm's law, series & parallel",
    "tier1.phys.4.title": "Intro to Astronomy",
    "tier1.phys.4.author": "Solar system, moon phases, seasons",
    "tier1.phys.5.title": "Energy & Conservation",
    "tier1.phys.5.author": "KE, PE, energy transfers, simple machines",

    // Tier 1 - Chemistry
    "tier1.chem.name": "Chemistry",
    "tier1.chem.1.title": "Matter & Change",
    "tier1.chem.1.author": "States of matter, physical vs chemical change",
    "tier1.chem.2.title": "Atoms & Molecules",
    "tier1.chem.2.author": "Atomic structure, periodic table explorer",
    "tier1.chem.3.title": "Acids, Bases & Salts",
    "tier1.chem.3.author": "pH visualization, indicator simulations",
    "tier1.chem.4.title": "Chemistry in Daily Life",
    "tier1.chem.4.author": "Combustion, rust, food chemistry",

    // Tier 2: High School
    "tier2.name": "\u{1F4D8} \u8FDB\u9636 High School",
    "tier2.desc": "High school depth — building real understanding",

    // Tier 2 - Mathematics
    "tier2.math.name": "Mathematics",
    "tier2.math.1.title": "Algebra",
    "tier2.math.1.author": "Equations, functions, polynomials, logarithms",
    "tier2.math.2.title": "Geometry",
    "tier2.math.2.author": "Euclidean, trigonometry, conic sections",
    "tier2.math.3.title": "Precalculus",
    "tier2.math.3.author": "Limits intuition, function families, sequences",
    "tier2.math.4.title": "Probability & Statistics Intuition",
    "tier2.math.4.author": "Probability models, CLT, normal distribution",
    "tier2.math.5.title": "The Beauty of Mathematics",
    "tier2.math.5.author": "Golden ratio, fractals, infinity, symmetry",

    // Tier 2 - Physics
    "tier2.phys.name": "Physics",
    "tier2.phys.1.title": "Classical Mechanics",
    "tier2.phys.1.author": "Newton deep-dive, work, energy, momentum, rotation",
    "tier2.phys.2.title": "Electromagnetism",
    "tier2.phys.2.author": "Coulomb, fields, potentials, induction",
    "tier2.phys.3.title": "Thermal Physics",
    "tier2.phys.3.author": "Temperature, gas laws, thermodynamics",
    "tier2.phys.4.title": "Optics & Waves",
    "tier2.phys.4.author": "Wave equation, interference, diffraction, EM spectrum",
    "tier2.phys.5.title": "Intro to Modern Physics",
    "tier2.phys.5.author": "Relativity, quantum concepts, atomic models",

    // Tier 2 - Chemistry
    "tier2.chem.name": "Chemistry",
    "tier2.chem.1.title": "Stoichiometry",
    "tier2.chem.1.author": "Mole concept, balancing, solutions, gas chemistry",
    "tier2.chem.2.title": "Chemical Equilibrium",
    "tier2.chem.2.author": "Reversible reactions, Le Chatelier, solubility",
    "tier2.chem.3.title": "Electrochemistry",
    "tier2.chem.3.author": "Redox, galvanic cells, electrolysis",
    "tier2.chem.4.title": "Organic Basics",
    "tier2.chem.4.author": "Carbon skeleton, functional groups, isomers",
    "tier2.chem.5.title": "Materials & Life",
    "tier2.chem.5.author": "Metals, polymers, ceramics, nanomaterials",

    // Tier 3: Undergraduate
    "tier3.name": "\u{1F393} \u672C\u79D1 Undergraduate",
    "tier3.desc": "University core — where rigor meets intuition",

    // Tier 3 - Mathematics
    "tier3.math.name": "Mathematics",
    "tier3.math.1.title": "Calculus",
    "tier3.math.1.author": "Stewart",
    "tier3.math.2.title": "Linear Algebra",
    "tier3.math.2.author": "Strang",
    "tier3.math.3.title": "Discrete Math",
    "tier3.math.3.author": "Rosen",
    "tier3.math.4.title": "Intro to Proofs",
    "tier3.math.4.author": "Hammack",
    "tier3.math.5.title": "Intro to Probability",
    "tier3.math.5.author": "Blitzstein",

    // Tier 3 - Computer Science
    "tier3.cs.name": "Computer Science",
    "tier3.cs.1.title": "Intro to Programming",
    "tier3.cs.1.author": "SICP",
    "tier3.cs.2.title": "Data Structures",
    "tier3.cs.2.author": "Sedgewick",
    "tier3.cs.3.title": "Computer Architecture",
    "tier3.cs.3.author": "Patterson & Hennessy",

    // Tier 3 - Physics
    "tier3.phys.name": "Physics",
    "tier3.phys.1.title": "Mechanics",
    "tier3.phys.1.author": "Kleppner & Kolenkow",
    "tier3.phys.2.title": "E&M",
    "tier3.phys.2.author": "Purcell",
    "tier3.phys.3.title": "Thermal Physics",
    "tier3.phys.3.author": "Schroeder",
    "tier3.phys.4.title": "Modern Physics",
    "tier3.phys.4.author": "Krane",

    // Tier 3 - Chemistry
    "tier3.chem.name": "Chemistry",
    "tier3.chem.1.title": "General Chemistry",
    "tier3.chem.1.author": "Atkins / Zumdahl",
    "tier3.chem.2.title": "Organic Chemistry",
    "tier3.chem.2.author": "McMurry",

    // Tier 4: Graduate
    "tier4.name": "\u{1F52C} \u7814\u7A76\u751F Graduate",
    "tier4.desc": "Master's & PhD — deep theory, serious proofs",

    // Tier 4 - Mathematics
    "tier4.math.name": "Mathematics",
    "tier4.math.1.title": "Real Analysis",
    "tier4.math.1.author": "Rudin / Tao",
    "tier4.math.2.title": "Abstract Algebra",
    "tier4.math.2.author": "Dummit & Foote",
    "tier4.math.3.title": "Advanced Linear Algebra",
    "tier4.math.3.author": "Roman \u00B7 GTM 135",
    "tier4.math.4.title": "Topology",
    "tier4.math.4.author": "Munkres",
    "tier4.math.5.title": "Complex Analysis",
    "tier4.math.5.author": "Ahlfors",
    "tier4.math.6.title": "ODE",
    "tier4.math.6.author": "Tenenbaum",
    "tier4.math.7.title": "PDE",
    "tier4.math.7.author": "Evans",
    "tier4.math.8.title": "Probability & Statistics",
    "tier4.math.8.author": "Casella & Berger",
    "tier4.math.9.title": "Statistical Modeling",
    "tier4.math.9.author": "Dobson / McCullagh & Nelder",
    "tier4.math.10.title": "Causal Inference",
    "tier4.math.10.author": "Imbens & Rubin / Pearl",

    // Tier 4 - Computer Science
    "tier4.cs.name": "Computer Science",
    "tier4.cs.1.title": "Algorithms",
    "tier4.cs.1.author": "CLRS",
    "tier4.cs.2.title": "Operating Systems",
    "tier4.cs.2.author": "OSTEP",
    "tier4.cs.3.title": "Compilers",
    "tier4.cs.3.author": "Dragon Book",
    "tier4.cs.4.title": "Networking",
    "tier4.cs.4.author": "Kurose & Ross",
    "tier4.cs.5.title": "Databases",
    "tier4.cs.5.author": "CMU 15-445",
    "tier4.cs.6.title": "Machine Learning",
    "tier4.cs.6.author": "Bishop / Murphy",
    "tier4.cs.7.title": "Computer Graphics",
    "tier4.cs.7.author": "Fundamentals of CG",

    // Tier 4 - Physics
    "tier4.phys.name": "Physics",
    "tier4.phys.1.title": "Classical Mechanics",
    "tier4.phys.1.author": "Goldstein / Taylor",
    "tier4.phys.2.title": "Electromagnetism",
    "tier4.phys.2.author": "Griffiths",
    "tier4.phys.3.title": "Quantum Mechanics",
    "tier4.phys.3.author": "Griffiths / Sakurai",
    "tier4.phys.4.title": "Statistical Mechanics",
    "tier4.phys.4.author": "Pathria",
    "tier4.phys.5.title": "Mathematical Physics",
    "tier4.phys.5.author": "Arfken",

    // Tier 4 - Chemistry
    "tier4.chem.name": "Chemistry",
    "tier4.chem.1.title": "Organic Chemistry",
    "tier4.chem.1.author": "Clayden",
    "tier4.chem.2.title": "Physical Chemistry",
    "tier4.chem.2.author": "Atkins",
    "tier4.chem.3.title": "Inorganic Chemistry",
    "tier4.chem.3.author": "Miessler",
    "tier4.chem.4.title": "Analytical Chemistry",
    "tier4.chem.4.author": "Skoog",

    // Tier 5: Frontier
    "tier5.name": "\u{1F680} \u524D\u6CBF Frontier",
    "tier5.desc": "Research-level — the cutting edge of human knowledge",

    // Tier 5 - Mathematics
    "tier5.math.name": "Mathematics",
    "tier5.math.1.title": "Algebraic Topology",
    "tier5.math.1.author": "Hatcher",
    "tier5.math.2.title": "Differential Geometry",
    "tier5.math.2.author": "do Carmo",
    "tier5.math.3.title": "Functional Analysis",
    "tier5.math.3.author": "Rudin",
    "tier5.math.4.title": "Measure Theory",
    "tier5.math.4.author": "Folland",
    "tier5.math.5.title": "Algebraic Geometry",
    "tier5.math.5.author": "Hartshorne",
    "tier5.math.6.title": "Analytic Number Theory",
    "tier5.math.6.author": "Apostol",
    "tier5.math.7.title": "Representation Theory",
    "tier5.math.7.author": "Fulton & Harris",
    "tier5.math.8.title": "High-Dimensional Statistics",
    "tier5.math.8.author": "Wainwright / Vershynin",

    // Tier 5 - Computer Science
    "tier5.cs.name": "Computer Science",
    "tier5.cs.1.title": "Distributed Systems",
    "tier5.cs.1.author": "Kleppmann",
    "tier5.cs.2.title": "Cryptography",
    "tier5.cs.2.author": "Katz & Lindell",
    "tier5.cs.3.title": "Computational Complexity",
    "tier5.cs.3.author": "Arora & Barak",
    "tier5.cs.4.title": "Type Theory",
    "tier5.cs.4.author": "Pierce",
    "tier5.cs.5.title": "Deep Learning",
    "tier5.cs.5.author": "Goodfellow",

    // Tier 5 - Physics
    "tier5.phys.name": "Physics",
    "tier5.phys.1.title": "Quantum Field Theory",
    "tier5.phys.1.author": "Peskin & Schroeder",
    "tier5.phys.2.title": "General Relativity",
    "tier5.phys.2.author": "Carroll",
    "tier5.phys.3.title": "Condensed Matter",
    "tier5.phys.3.author": "Ashcroft & Mermin",
    "tier5.phys.4.title": "Particle Physics",
    "tier5.phys.4.author": "Griffiths",
    "tier5.phys.5.title": "Cosmology",
    "tier5.phys.5.author": "Weinberg",

    // Tier 5 - Chemistry
    "tier5.chem.name": "Chemistry",
    "tier5.chem.1.title": "Advanced Organic Synthesis",
    "tier5.chem.1.author": "March",
    "tier5.chem.2.title": "Quantum Chemistry",
    "tier5.chem.2.author": "Szabo & Ostlund",
    "tier5.chem.3.title": "Biochemistry",
    "tier5.chem.3.author": "Lehninger / Stryer",
    "tier5.chem.4.title": "Materials Science",
    "tier5.chem.4.author": "Callister",

    // Status labels
    "status.planned": "Planned",
    "status.live": "LIVE",

    // Features section
    "features.tag": "Approach",
    "features.title": "How We Teach",
    "features.desc": "Not exam prep. Not memorization. Pure understanding through interaction.",

    "features.1.title": "Interactive Visualizations",
    "features.1.desc": "Drag points, adjust sliders, watch animations. Abstract concepts become tangible through hands-on exploration.",
    "features.2.title": "Intuition First",
    "features.2.desc": "Build deep understanding before formalism. Every theorem starts with \"why\" before \"how to prove.\"",
    "features.3.title": "Rigorous When Ready",
    "features.3.desc": "KaTeX-rendered math with full proofs. Rigor scales with the tier — from playful to publication-grade.",
    "features.4.title": "Learn at Any Age",
    "features.4.desc": "Five tiers from elementary school to research frontier. Start wherever you are, go as far as you want.",
    "features.5.title": "Progress Tracking",
    "features.5.desc": "Your learning progress is saved locally. Pick up right where you left off, across sessions.",
    "features.6.title": "Free & Open Source",
    "features.6.desc": "Everything is on GitHub. No accounts, no paywalls, no ads. Just open the link and start learning.",

    // Vision / Orbit section
    "vision.tag": "Vision",
    "vision.title": "A Connected Universe",
    "vision.desc": "Every discipline connects. From counting to cosmology, it's all one story.",
    "vision.center": "Science<br>Classroom",
    "orbit.center.line1": "Science",
    "orbit.center.line2": "Classroom",
    "orbit.label.math": "Math",
    "orbit.label.physics": "Physics",
    "orbit.label.cs": "CS",
    "orbit.label.chemistry": "Chemistry",
    "orbit.label.foundation": "Foundation",
    "orbit.label.undergrad": "Undergrad",
    "orbit.label.graduate": "Graduate",
    "orbit.label.frontier": "Frontier",
    "orbit.label.highschool": "High School",

    // Footer
    "footer.text": "Built by Hengzhe",
    "footer.github": "GitHub",
    "footer.opensource": "Open Source & Free Forever"
},

/* ----------------------------------------------------------------
   CHINESE (zh)
   ---------------------------------------------------------------- */
zh: {
    // Page metadata
    "meta.title": "恒哲的科学教室",
    "meta.description": "从小学到科研前沿 — 数学、计算机、物理与化学的交互式可视化教育",

    // Navigation
    "nav.home": "首页",
    "nav.journey": "学习之旅",
    "nav.features": "教学特色",
    "nav.vision": "愿景",
    "nav.github": "GitHub",

    // Hero
    "hero.badge": "4门课程已上线 — 另有88门规划中",
    "hero.title1": "恒哲的",
    "hero.title2": "科学教室",
    "hero.subtitle": "从童年好奇到科研前沿 — 面向所有人的交互式可视化科学教育。",
    "hero.cta.start": "开始探索",

    // Stats
    "stats.courses": "规划课程",
    "stats.tiers": "学习阶梯",
    "stats.disciplines": "学科方向",
    "stats.visualizations": "可视化（目前）",

    // Journey section header
    "journey.tag": "学习之旅",
    "journey.title": "从好奇到前沿",
    "journey.desc": "五大学习阶梯，每个概念都配得上交互式的深度体验。",

    // Tier badges
    "tier1.badge": "阶梯 1",
    "tier2.badge": "阶梯 2",
    "tier3.badge": "阶梯 3",
    "tier4.badge": "阶梯 4",
    "tier5.badge": "阶梯 5",

    // Tier 1: Foundation
    "tier1.name": "\u{1F331} 启蒙",
    "tier1.desc": "小学与初中 — 好奇心的起点",

    // Tier 1 - Mathematics
    "tier1.math.name": "数学",
    "tier1.math.1.title": "趣味算术与数感",
    "tier1.math.1.author": "四则运算、数字规律、趣味游戏",
    "tier1.math.2.title": "分数、小数与比例",
    "tier1.math.2.author": "可视化分数模型、比例推理",
    "tier1.math.3.title": "几何直觉",
    "tier1.math.3.author": "图形、对称、变换",
    "tier1.math.4.title": "数学思维游戏",
    "tier1.math.4.author": "逻辑谜题、组合计数、推理",
    "tier1.math.5.title": "初等数论入门",
    "tier1.math.5.author": "质数、因数、最大公约数、最小公倍数",

    // Tier 1 - Physics
    "tier1.phys.name": "物理",
    "tier1.phys.1.title": "力与运动直觉",
    "tier1.phys.1.author": "让牛顿定律变得可触可感",
    "tier1.phys.2.title": "光与声",
    "tier1.phys.2.author": "反射、折射、色彩、波动",
    "tier1.phys.3.title": "简单电路",
    "tier1.phys.3.author": "电路搭建、欧姆定律、串并联",
    "tier1.phys.4.title": "天文学入门",
    "tier1.phys.4.author": "太阳系、月相、四季成因",
    "tier1.phys.5.title": "能量与守恒",
    "tier1.phys.5.author": "动能、势能、能量转换、简单机械",

    // Tier 1 - Chemistry
    "tier1.chem.name": "化学",
    "tier1.chem.1.title": "物质与变化",
    "tier1.chem.1.author": "物质三态、物理变化与化学变化",
    "tier1.chem.2.title": "原子与分子",
    "tier1.chem.2.author": "原子结构、元素周期表探索",
    "tier1.chem.3.title": "酸、碱与盐",
    "tier1.chem.3.author": "pH可视化、指示剂模拟",
    "tier1.chem.4.title": "生活中的化学",
    "tier1.chem.4.author": "燃烧、生锈、食品化学",

    // Tier 2: High School
    "tier2.name": "\u{1F4D8} 进阶",
    "tier2.desc": "高中深度 — 构建真正的理解",

    // Tier 2 - Mathematics
    "tier2.math.name": "数学",
    "tier2.math.1.title": "代数",
    "tier2.math.1.author": "方程、函数、多项式、对数",
    "tier2.math.2.title": "几何",
    "tier2.math.2.author": "欧氏几何、三角学、圆锥曲线",
    "tier2.math.3.title": "预备微积分",
    "tier2.math.3.author": "极限直觉、函数族、数列",
    "tier2.math.4.title": "概率与统计直觉",
    "tier2.math.4.author": "概率模型、中心极限定理、正态分布",
    "tier2.math.5.title": "数学之美",
    "tier2.math.5.author": "黄金比例、分形、无穷、对称",

    // Tier 2 - Physics
    "tier2.phys.name": "物理",
    "tier2.phys.1.title": "经典力学",
    "tier2.phys.1.author": "牛顿力学深入、功、能量、动量、转动",
    "tier2.phys.2.title": "电磁学",
    "tier2.phys.2.author": "库仑定律、场、电势、感应",
    "tier2.phys.3.title": "热学",
    "tier2.phys.3.author": "温度、气体定律、热力学",
    "tier2.phys.4.title": "光学与波动",
    "tier2.phys.4.author": "波动方程、干涉、衍射、电磁波谱",
    "tier2.phys.5.title": "近代物理入门",
    "tier2.phys.5.author": "相对论、量子概念、原子模型",

    // Tier 2 - Chemistry
    "tier2.chem.name": "化学",
    "tier2.chem.1.title": "化学计量学",
    "tier2.chem.1.author": "摩尔概念、配平、溶液、气体化学",
    "tier2.chem.2.title": "化学平衡",
    "tier2.chem.2.author": "可逆反应、勒夏特列原理、溶解度",
    "tier2.chem.3.title": "电化学",
    "tier2.chem.3.author": "氧化还原、原电池、电解",
    "tier2.chem.4.title": "有机化学基础",
    "tier2.chem.4.author": "碳骨架、官能团、同分异构体",
    "tier2.chem.5.title": "材料与生活",
    "tier2.chem.5.author": "金属、高分子、陶瓷、纳米材料",

    // Tier 3: Undergraduate
    "tier3.name": "\u{1F393} 本科",
    "tier3.desc": "大学核心 — 严谨与直觉的交汇",

    // Tier 3 - Mathematics
    "tier3.math.name": "数学",
    "tier3.math.1.title": "微积分",
    "tier3.math.1.author": "Stewart",
    "tier3.math.2.title": "线性代数",
    "tier3.math.2.author": "Strang",
    "tier3.math.3.title": "离散数学",
    "tier3.math.3.author": "Rosen",
    "tier3.math.4.title": "证明方法入门",
    "tier3.math.4.author": "Hammack",
    "tier3.math.5.title": "概率论入门",
    "tier3.math.5.author": "Blitzstein",

    // Tier 3 - Computer Science
    "tier3.cs.name": "计算机科学",
    "tier3.cs.1.title": "编程入门",
    "tier3.cs.1.author": "SICP",
    "tier3.cs.2.title": "数据结构",
    "tier3.cs.2.author": "Sedgewick",
    "tier3.cs.3.title": "计算机体系结构",
    "tier3.cs.3.author": "Patterson & Hennessy",

    // Tier 3 - Physics
    "tier3.phys.name": "物理",
    "tier3.phys.1.title": "力学",
    "tier3.phys.1.author": "Kleppner & Kolenkow",
    "tier3.phys.2.title": "电磁学",
    "tier3.phys.2.author": "Purcell",
    "tier3.phys.3.title": "热物理",
    "tier3.phys.3.author": "Schroeder",
    "tier3.phys.4.title": "近代物理",
    "tier3.phys.4.author": "Krane",

    // Tier 3 - Chemistry
    "tier3.chem.name": "化学",
    "tier3.chem.1.title": "普通化学",
    "tier3.chem.1.author": "Atkins / Zumdahl",
    "tier3.chem.2.title": "有机化学",
    "tier3.chem.2.author": "McMurry",

    // Tier 4: Graduate
    "tier4.name": "\u{1F52C} 研究生",
    "tier4.desc": "硕士与博士 — 深度理论，严格证明",

    // Tier 4 - Mathematics
    "tier4.math.name": "数学",
    "tier4.math.1.title": "实分析",
    "tier4.math.1.author": "Rudin / Tao",
    "tier4.math.2.title": "抽象代数",
    "tier4.math.2.author": "Dummit & Foote",
    "tier4.math.3.title": "高等线性代数",
    "tier4.math.3.author": "Roman \u00B7 GTM 135",
    "tier4.math.4.title": "拓扑学",
    "tier4.math.4.author": "Munkres",
    "tier4.math.5.title": "复分析",
    "tier4.math.5.author": "Ahlfors",
    "tier4.math.6.title": "常微分方程",
    "tier4.math.6.author": "Tenenbaum",
    "tier4.math.7.title": "偏微分方程",
    "tier4.math.7.author": "Evans",
    "tier4.math.8.title": "概率与统计",
    "tier4.math.8.author": "Casella & Berger",
    "tier4.math.9.title": "统计建模",
    "tier4.math.9.author": "Dobson / McCullagh & Nelder",
    "tier4.math.10.title": "因果推断",
    "tier4.math.10.author": "Imbens & Rubin / Pearl",

    // Tier 4 - Computer Science
    "tier4.cs.name": "计算机科学",
    "tier4.cs.1.title": "算法",
    "tier4.cs.1.author": "CLRS",
    "tier4.cs.2.title": "操作系统",
    "tier4.cs.2.author": "OSTEP",
    "tier4.cs.3.title": "编译器",
    "tier4.cs.3.author": "Dragon Book",
    "tier4.cs.4.title": "计算机网络",
    "tier4.cs.4.author": "Kurose & Ross",
    "tier4.cs.5.title": "数据库",
    "tier4.cs.5.author": "CMU 15-445",
    "tier4.cs.6.title": "机器学习",
    "tier4.cs.6.author": "Bishop / Murphy",
    "tier4.cs.7.title": "计算机图形学",
    "tier4.cs.7.author": "Fundamentals of CG",

    // Tier 4 - Physics
    "tier4.phys.name": "物理",
    "tier4.phys.1.title": "经典力学",
    "tier4.phys.1.author": "Goldstein / Taylor",
    "tier4.phys.2.title": "电动力学",
    "tier4.phys.2.author": "Griffiths",
    "tier4.phys.3.title": "量子力学",
    "tier4.phys.3.author": "Griffiths / Sakurai",
    "tier4.phys.4.title": "统计力学",
    "tier4.phys.4.author": "Pathria",
    "tier4.phys.5.title": "数学物理",
    "tier4.phys.5.author": "Arfken",

    // Tier 4 - Chemistry
    "tier4.chem.name": "化学",
    "tier4.chem.1.title": "有机化学",
    "tier4.chem.1.author": "Clayden",
    "tier4.chem.2.title": "物理化学",
    "tier4.chem.2.author": "Atkins",
    "tier4.chem.3.title": "无机化学",
    "tier4.chem.3.author": "Miessler",
    "tier4.chem.4.title": "分析化学",
    "tier4.chem.4.author": "Skoog",

    // Tier 5: Frontier
    "tier5.name": "\u{1F680} 前沿",
    "tier5.desc": "研究级别 — 人类知识的最前沿",

    // Tier 5 - Mathematics
    "tier5.math.name": "数学",
    "tier5.math.1.title": "代数拓扑",
    "tier5.math.1.author": "Hatcher",
    "tier5.math.2.title": "微分几何",
    "tier5.math.2.author": "do Carmo",
    "tier5.math.3.title": "泛函分析",
    "tier5.math.3.author": "Rudin",
    "tier5.math.4.title": "测度论",
    "tier5.math.4.author": "Folland",
    "tier5.math.5.title": "代数几何",
    "tier5.math.5.author": "Hartshorne",
    "tier5.math.6.title": "解析数论",
    "tier5.math.6.author": "Apostol",
    "tier5.math.7.title": "表示论",
    "tier5.math.7.author": "Fulton & Harris",
    "tier5.math.8.title": "高维统计",
    "tier5.math.8.author": "Wainwright / Vershynin",

    // Tier 5 - Computer Science
    "tier5.cs.name": "计算机科学",
    "tier5.cs.1.title": "分布式系统",
    "tier5.cs.1.author": "Kleppmann",
    "tier5.cs.2.title": "密码学",
    "tier5.cs.2.author": "Katz & Lindell",
    "tier5.cs.3.title": "计算复杂性",
    "tier5.cs.3.author": "Arora & Barak",
    "tier5.cs.4.title": "类型论",
    "tier5.cs.4.author": "Pierce",
    "tier5.cs.5.title": "深度学习",
    "tier5.cs.5.author": "Goodfellow",

    // Tier 5 - Physics
    "tier5.phys.name": "物理",
    "tier5.phys.1.title": "量子场论",
    "tier5.phys.1.author": "Peskin & Schroeder",
    "tier5.phys.2.title": "广义相对论",
    "tier5.phys.2.author": "Carroll",
    "tier5.phys.3.title": "凝聚态物理",
    "tier5.phys.3.author": "Ashcroft & Mermin",
    "tier5.phys.4.title": "粒子物理",
    "tier5.phys.4.author": "Griffiths",
    "tier5.phys.5.title": "宇宙学",
    "tier5.phys.5.author": "Weinberg",

    // Tier 5 - Chemistry
    "tier5.chem.name": "化学",
    "tier5.chem.1.title": "高等有机合成",
    "tier5.chem.1.author": "March",
    "tier5.chem.2.title": "量子化学",
    "tier5.chem.2.author": "Szabo & Ostlund",
    "tier5.chem.3.title": "生物化学",
    "tier5.chem.3.author": "Lehninger / Stryer",
    "tier5.chem.4.title": "材料科学",
    "tier5.chem.4.author": "Callister",

    // Status labels
    "status.planned": "规划中",
    "status.live": "已上线",

    // Features section
    "features.tag": "教学特色",
    "features.title": "我们如何教学",
    "features.desc": "不是应试训练，不是死记硬背，是通过交互达成的纯粹理解。",

    "features.1.title": "交互式可视化",
    "features.1.desc": "拖拽点、调节滑块、观看动画。抽象概念通过动手探索变得触手可及。",
    "features.2.title": "直觉优先",
    "features.2.desc": "先建立深层理解，再引入形式化。每个定理先讲「为什么」，再讲「怎么证」。",
    "features.3.title": "循序渐进的严谨",
    "features.3.desc": "KaTeX渲染的数学公式与完整证明。严谨程度随阶梯递进 — 从趣味启蒙到学术级别。",
    "features.4.title": "任何年龄皆可学",
    "features.4.desc": "从小学到科研前沿共五大阶梯。从你所在之处开始，走到你想去的远方。",
    "features.5.title": "学习进度追踪",
    "features.5.desc": "学习进度保存在本地，跨会话无缝衔接，随时从上次中断处继续。",
    "features.6.title": "免费且开源",
    "features.6.desc": "一切都在GitHub上。无需注册、没有付费墙、没有广告。打开链接即可开始学习。",

    // Vision / Orbit section
    "vision.tag": "愿景",
    "vision.title": "万物相连的知识宇宙",
    "vision.desc": "学科之间没有围墙。从数数到宇宙学，本是同一个故事。",
    "vision.center": "科学<br>教室",
    "orbit.center.line1": "科学",
    "orbit.center.line2": "教室",
    "orbit.label.math": "数学",
    "orbit.label.physics": "物理",
    "orbit.label.cs": "计算机",
    "orbit.label.chemistry": "化学",
    "orbit.label.foundation": "启蒙",
    "orbit.label.undergrad": "本科",
    "orbit.label.graduate": "研究生",
    "orbit.label.frontier": "前沿",
    "orbit.label.highschool": "进阶",

    // Footer
    "footer.text": "恒哲出品",
    "footer.github": "GitHub",
    "footer.opensource": "开源且永久免费"
}

};
