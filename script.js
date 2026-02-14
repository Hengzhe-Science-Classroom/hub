// === Hengzhe's Science Classroom — Hub Script ===

// --- Particle Background ---
(function () {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], mouse = { x: -1000, y: -1000 };
    const PARTICLE_COUNT = 120;
    const CONNECT_DIST = 140;
    const MOUSE_RADIUS = 200;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.r = Math.random() * 1.5 + 0.5;
            // Random color from palette
            const colors = [
                [79, 143, 255],
                [168, 85, 247],
                [34, 211, 238],
                [52, 211, 153],
                [244, 114, 182]
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            // Mouse repulsion
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS && dist > 0) {
                const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
                this.vx += (dx / dist) * force;
                this.vy += (dy / dist) * force;
            }
            // Damping
            this.vx *= 0.999;
            this.vy *= 0.999;
            this.x += this.vx;
            this.y += this.vy;
            // Wrap
            if (this.x < -20) this.x = w + 20;
            if (this.x > w + 20) this.x = -20;
            if (this.y < -20) this.y = h + 20;
            if (this.y > h + 20) this.y = -20;
        }
        draw() {
            const [r, g, b] = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},0.6)`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.12;
                    const [r1, g1, b1] = particles[i].color;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${r1},${g1},${b1},${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
})();

// --- Nav scroll effect ---
window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 50);
});

// --- Scroll reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.discipline-card, .feature-card').forEach((el, i) => {
    // Reset index per tier for staggering
    const parent = el.closest('.tier-grid') || el.closest('.features-grid') || el.closest('.discipline-grid');
    const siblings = parent ? Array.from(parent.children) : [];
    const localIdx = siblings.indexOf(el);
    el.style.transitionDelay = (localIdx >= 0 ? localIdx : i % 4) * 0.1 + 's';
    observer.observe(el);
});

// --- Counter animation ---
function animateCounters() {
    document.querySelectorAll('.stat-value[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * ease) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

// --- Orbit tooltip on hover ---
document.querySelectorAll('.orbit-node').forEach(node => {
    const label = node.querySelector('.orbit-label');
    if (!label) return;
    node.addEventListener('mouseenter', () => { label.style.opacity = '1'; });
    node.addEventListener('mouseleave', () => { label.style.opacity = '0'; });
});

// --- Smooth scroll for nav links ---
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- i18n Language Toggle ---
const I18n = {
    current: localStorage.getItem('hsc-lang') || 'en',

    init() {
        this.apply(this.current);
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                this.current = this.current === 'en' ? 'zh' : 'en';
                localStorage.setItem('hsc-lang', this.current);
                this.apply(this.current);
            });
        }
    },

    t(key) {
        const dict = window.I18N?.[this.current];
        return dict?.[key] ?? key;
    },

    apply(lang) {
        this.current = lang;
        const dict = window.I18N?.[lang];
        if (!dict) return;

        // Update toggle button text
        const btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';

        // Apply all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // For elements that may contain HTML entities, use innerHTML for simple text
                if (el.tagName === 'A' || el.querySelector('*')) {
                    // Skip complex elements — handle them separately
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Apply data-i18n-html (for elements needing innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        // Textbook items: traverse tier structure
        // Tier names/descs translate for all tiers
        // Textbook titles/authors only translate for tiers 1 & 2 (Foundation & High School)
        // Tiers 3+ (undergrad, graduate, frontier) keep English textbook details
        const bilingualTiers = ['tier1', 'tier2'];

        document.querySelectorAll('.tier').forEach(tierEl => {
            const tierKey = tierEl.getAttribute('data-i18n-tier');
            if (!tierKey) return;

            // Tier name and desc — always translate
            const nameEl = tierEl.querySelector('.tier-name');
            const descEl = tierEl.querySelector('.tier-desc');
            if (nameEl && dict[tierKey + '.name']) nameEl.textContent = dict[tierKey + '.name'];
            if (descEl && dict[tierKey + '.desc']) descEl.textContent = dict[tierKey + '.desc'];

            // Each discipline card within this tier
            tierEl.querySelectorAll('.discipline-card').forEach(card => {
                const discKey = card.getAttribute('data-i18n-disc');
                if (!discKey) return;
                const fullPrefix = tierKey + '.' + discKey;

                // Discipline name — always translate
                const dName = card.querySelector('.discipline-name');
                if (dName && dict[fullPrefix + '.name']) dName.textContent = dict[fullPrefix + '.name'];

                // Textbook items — only for bilingual tiers
                if (bilingualTiers.includes(tierKey)) {
                    card.querySelectorAll('.textbook-item').forEach((item, idx) => {
                        const n = idx + 1;
                        const titleEl = item.querySelector('.textbook-title');
                        const authorEl = item.querySelector('.textbook-author');
                        if (titleEl && dict[fullPrefix + '.' + n + '.title']) {
                            titleEl.textContent = dict[fullPrefix + '.' + n + '.title'];
                        }
                        if (authorEl && dict[fullPrefix + '.' + n + '.author']) {
                            authorEl.textContent = dict[fullPrefix + '.' + n + '.author'];
                        }
                    });
                }
            });
        });

        // Status badges
        document.querySelectorAll('.status-live').forEach(el => {
            el.textContent = dict['status.live'] || 'LIVE';
        });
        document.querySelectorAll('.status-planned').forEach(el => {
            el.textContent = dict['status.planned'] || 'Planned';
        });

        // Update page title
        if (dict['meta.title']) document.title = dict['meta.title'];
    }
};

// Initialize i18n after DOM ready
I18n.init();
