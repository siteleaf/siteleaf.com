/* =================================================================
   ASCII GARDEN — animates every [data-garden] element (homepage only)
   Styles live in styles/_home.scss under `.garden`.
   ================================================================= */
(() => {
  // ---- tweakables ----
  const CONFIG = {
    density: 26000,          // px² per flower (lower = more flowers)
    minFlowers: 6,
    maxFlowers: 26,
    grassRatio: 0.4,         // grass tufts per flower
    spacing: [84, 56],       // min horizontal/vertical gap between plants (px)
    candidates: 20,          // spots tried per placement (higher = more even spread)
    sway: 16,                // max lean in degrees at full wind
    gustEvery: [4, 10],      // seconds between gusts
    bloomLife: [16, 40],     // seconds a flower stays in bloom
  };

  // lights listed twice so darks stay accents (~1 in 4 flowers)
  const HEADS = ['--head-1', '--head-2', '--head-3', '--head-4', '--head-5',
                 '--head-1', '--head-2', '--head-3', '--head-4', '--head-5',
                 '--head-6', '--head-7', '--head-8'];
  const STAGES = ['sprout', 'bud', 'bloom', 'wilt', 'dead'];
  const DUR = { sprout: [2, 4], bud: [3, 6], bloom: CONFIG.bloomLife, wilt: [5, 8], dead: [3, 5] };
  const FLEX = { sprout: .4, bud: .7, bloom: 1, wilt: .9, dead: .5 };

  // [role, text] per line, top to bottom. h = head, s = stem
  const FLOWERS = {
    tulip: { w: 3, ground: '^^^^^',
      sprout: [['s', ',']],
      bud:    [['h', 'v'], ['s', '\\|']],
      bloom:  [['h', 'vVv'], ['h', '(_)'], ['s', '\\|/']],
      wilt:   [['h', 'v.v'], ['h', '(_,'], ['s', '\\|']],
      dead:   [['s', '\\,'], ['s', '|']] },
    daisy: { w: 3, ground: '^^^',
      sprout: [['s', '.']],
      bud:    [['h', 'o'], ['s', '|/']],
      bloom:  [['h', '(*)'], ['s', '>/']],
      wilt:   [['h', '(,)'], ['s', '>/']],
      dead:   [['s', '_/']] },
    sunny: { w: 2, ground: '^^^',
      sprout: [['s', ',']],
      bud:    [['h', 'o'], ['s', '\\|']],
      bloom:  [['h', '(o)'], ['s', '\\|/']],
      wilt:   [['h', '(.)'], ['s', '\\|/']],
      dead:   [['s', '\\|']] },
    bell: { w: 2, ground: '^^^^^',
      sprout: [['s', ',']],
      bud:    [['h', '...'], ['s', '|']],
      bloom:  [['h', ',,,'], ['h', '~Y~'], ['s', '\\|/']],
      wilt:   [['h', ', ,'], ['h', '~Y~'], ['s', '\\|']],
      dead:   [['s', '~Y'], ['s', '|']] },
    crocus: { w: 2, ground: '^^^^^',
      sprout: [['s', '.']],
      bud:    [['h', 'v'], ['s', '|']],
      bloom:  [['h', 'vvv'], ['s', 'Y']],
      wilt:   [['h', 'v v'], ['s', 'Y']],
      dead:   [['s', 'y']] },
    rose: { w: 1, ground: '^^^',
      sprout: [['s', ',']],
      bud:    [['h', 'o'], ['s', '\\|']],
      bloom:  [['h', '@'], ['s', '\\|/']],
      wilt:   [['h', '@,'], ['s', '\\|']],
      dead:   [['s', '\\|']] },
  };
  const GRASS = ['\\ |/', '\\|/', '\\ | /', '\\|', '|/', '\\(| ,-'];
  const MOTES = ['.', '..', '. .', '~'];
  const PETALS = ["'", ',', '`', '.'];

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[(Math.random() * a.length) | 0];
  const POOL = Object.entries(FLOWERS).flatMap(([k, v]) => Array(v.w).fill(k));

  class Garden {
    constructor(el) {
      this.el = el;
      this.items = [];
      this.petals = [];
      this.t = 0;
      this.gust = null;
      this.nextGust = rand(1.5, 4);
      this.nextSpawn = 1;
      this.visible = true;
      this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.measure();
      this.populate();
      new ResizeObserver(() => this.measure()).observe(el);
      new IntersectionObserver(([e]) => {
        this.visible = e.isIntersecting;
        if (this.visible) this.start();
      }).observe(el);
    }

    measure() {
      const r = this.el.getBoundingClientRect();
      this.w = r.width; this.h = r.height;
      this.target = Math.max(CONFIG.minFlowers,
        Math.min(CONFIG.maxFlowers, Math.round(this.w * this.h / CONFIG.density)));
      this.items = this.items.filter(o => {
        if (o.x < this.w - 10) return true;
        o.el.remove(); return false;
      });
    }

    // Best-candidate sampling: try several random spots and keep the one
    // furthest from every existing plant. Gives the even, unclumped scatter
    // of the Figma artwork instead of pure random placement.
    freeSpot(rx = CONFIG.spacing[0], ry = CONFIG.spacing[1]) {
      let best = null, bestD = 1; // must clear the minimum spacing ellipse
      for (let i = 0; i < CONFIG.candidates; i++) {
        const x = rand(24, this.w - 24), y = rand(46, this.h - 6);
        let d = Infinity;
        for (const o of this.items) {
          const dx = (o.x - x) / rx, dy = (o.y - y) / ry;
          d = Math.min(d, dx * dx + dy * dy);
          if (d <= bestD) break;
        }
        if (d > bestD) { best = { x, y }; bestD = d; }
      }
      return best;
    }

    makeEl(x, y, headVar) {
      const el = document.createElement('div');
      el.className = 'sprite';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.zIndex = Math.round(y);
      if (headVar) el.style.setProperty('--head', `var(${headVar})`);
      const plant = document.createElement('div');
      plant.className = 'plant';
      el.appendChild(plant);
      this.el.appendChild(el);
      return { el, plant };
    }

    lines(target, rows) {
      target.replaceChildren(...rows.map(([role, text]) => {
        const d = document.createElement('div');
        d.className = role; d.textContent = text;
        return d;
      }));
    }

    plant(name, stage, { x, y }, animate = true) {
      const sp = FLOWERS[name];
      const head = pick(HEADS);
      const { el, plant } = this.makeEl(x, y, head);
      const g = document.createElement('div');
      g.className = 'g'; g.textContent = sp.ground;
      el.appendChild(g);
      const d = DUR[STAGES[stage]];
      const f = { kind: 'flower', sp, el, plantEl: plant, x, y, stage,
        dur: rand(d[0], d[1]), age: 0, lean: 0, vel: 0, phase: rand(0, 6.28), head };
      this.render(f);
      if (animate) el.animate(
        [{ opacity: 0, transform: 'translate(-50%,-100%) scale(.5)' },
         { opacity: 1, transform: 'translate(-50%,-100%) scale(1)' }],
        { duration: 700, easing: 'cubic-bezier(.2,.8,.3,1.4)' });
      this.items.push(f);
      return f;
    }

    render(f) { this.lines(f.plantEl, f.sp[STAGES[f.stage]]); }

    populate() {
      for (let i = 0; i < this.target * CONFIG.grassRatio; i++) {
        const s = this.freeSpot(CONFIG.spacing[0] * 0.6, CONFIG.spacing[1] * 0.6); if (!s) break;
        const { el, plant } = this.makeEl(s.x, s.y);
        this.lines(plant, [['s', pick(GRASS)]]);
        this.items.push({ kind: 'grass', el, plantEl: plant, x: s.x, y: s.y,
          lean: 0, vel: 0, phase: rand(0, 6.28), flex: 1.2 });
      }
      for (let i = 0; i < this.target * 0.5; i++) {
        const { el, plant } = this.makeEl(rand(10, this.w - 10), rand(20, this.h - 4));
        this.lines(plant, [['g', pick(MOTES)]]);
      }
      for (let i = 0; i < this.target; i++) {
        const s = this.freeSpot(); if (!s) break;
        const r = Math.random();
        const stage = this.reduced ? 2 : r < .1 ? 0 : r < .25 ? 1 : r < .85 ? 2 : 3;
        const f = this.plant(pick(POOL), stage, s, false);
        f.age = rand(0, f.dur); // stagger so they don't all change together
      }
    }

    start() {
      if (this.running || this.reduced) return;
      this.running = true;
      this.last = performance.now();
      requestAnimationFrame(this.tick);
    }

    tick = now => {
      if (!this.visible) { this.running = false; return; }
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.update(dt);
      requestAnimationFrame(this.tick);
    };

    windAt(x) {
      const t = this.t;
      let w = 0.15 + 0.28 * Math.sin(t * 0.7 + x * 0.006) + 0.1 * Math.sin(t * 1.7 + x * 0.021);
      const g = this.gust;
      if (g) {
        const d = (x - g.front) / g.width;
        w += g.strength * Math.exp(-d * d);
        if (x < g.front) w += g.strength * 0.3 * Math.exp((x - g.front) / 500);
      }
      return w;
    }

    spawnPetals(f, n) {
      for (let i = 0; i < n; i++) {
        const el = document.createElement('span');
        el.className = 'petal';
        el.textContent = pick(PETALS);
        el.style.setProperty('--head', `var(${f.head})`);
        el.style.zIndex = 9999;
        this.el.appendChild(el);
        this.petals.push({ el, x: f.x + rand(-5, 5), y: f.y - rand(26, 40),
          vx: rand(5, 20), vy: rand(-14, -2), age: 0, life: rand(3, 5.5), phase: rand(0, 6.28) });
      }
    }

    update(dt) {
      this.t += dt;

      // gusts roll left → right across the bed
      if (this.gust) {
        this.gust.front += this.gust.speed * dt;
        if (this.gust.front > this.w + 800) {
          this.gust = null;
          this.nextGust = rand(...CONFIG.gustEvery);
        }
      } else if ((this.nextGust -= dt) <= 0) {
        this.gust = { front: -300, speed: rand(220, 380), strength: rand(.7, 1.3), width: rand(160, 260) };
      }

      // new sprouts pop up in empty spots
      if ((this.nextSpawn -= dt) <= 0) {
        this.nextSpawn = rand(0.4, 1.6);
        const count = this.items.filter(o => o.kind === 'flower').length;
        if (count < this.target) {
          const s = this.freeSpot();
          if (s) this.plant(pick(POOL), 0, s);
        }
      }

      for (let i = this.items.length - 1; i >= 0; i--) {
        const o = this.items[i];
        const wind = this.windAt(o.x);

        if (o.kind === 'flower') {
          o.age += dt;
          if (o.age > o.dur) {
            o.stage++; o.age = 0;
            if (o.stage >= STAGES.length) {
              o.el.classList.add('is-gone');
              setTimeout(() => o.el.remove(), 1300);
              this.items.splice(i, 1);
              continue;
            }
            const d = DUR[STAGES[o.stage]];
            o.dur = rand(d[0], d[1]);
            this.render(o);
            if (o.stage === 3) this.spawnPetals(o, 2 + (Math.random() * 2 | 0));
            if (o.stage === 4) this.spawnPetals(o, 1);
          }
          // a strong gust can steal a petal from a bloom
          if (o.stage === 2 && wind > 1 && Math.random() < dt * 0.12) this.spawnPetals(o, 1);
          o.flex = FLEX[STAGES[o.stage]];
        }

        // springy sway toward the local wind
        const target = wind * o.flex + 0.06 * Math.sin(this.t * 2.4 + o.phase);
        o.vel += ((target - o.lean) * 30 - o.vel * 5) * dt;
        o.lean += o.vel * dt;
        o.plantEl.style.transform = `skewX(${(-o.lean * CONFIG.sway).toFixed(2)}deg)`;
      }

      for (let i = this.petals.length - 1; i >= 0; i--) {
        const p = this.petals[i];
        p.age += dt;
        const wind = this.windAt(p.x);
        p.vx += ((wind * 90 + 10) - p.vx) * dt * 1.5;
        p.vy += 14 * dt;
        p.x += p.vx * dt;
        p.y += (p.vy + Math.sin(p.age * 4 + p.phase) * 10) * dt;
        const k = p.age / p.life;
        if (k >= 1 || p.x > this.w + 20 || p.y > this.h + 10) {
          p.el.remove(); this.petals.splice(i, 1); continue;
        }
        p.el.style.opacity = (1 - k * k).toFixed(3);
        p.el.style.transform =
          `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) rotate(${(Math.sin(p.age * 3 + p.phase) * 40).toFixed(1)}deg)`;
      }
    }
  }

  const init = () => document.querySelectorAll('[data-garden]').forEach(el => new Garden(el));
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
