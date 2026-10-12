import { HERO_STATS } from '../../data'

/**
 * Hero typography hierarchy (top → bottom visual weight):
 *
 *   Available badge → Fira Code 10px, green, uppercase   [weakest — context]
 *   "Chetan"        → Inter 800, 56–96px, -0.045em       [primary identity]
 *   "Chugh"         → Inter 800, 56–96px, solid white    [secondary — recedes]
 *   "Full-Stack."   → Inter 800, 40–72px, gradient       [role — pops with colour]
 *   Description     → Inter 300, 17px, 1.85 leading      [supporting — breathes]
 *   Buttons         → Inter 500, 14px, -0.01em           [action — medium weight]
 *   Stats numbers   → Inter 800, 38px, -0.04em           [data — heavy]
 *   Stats labels    → Fira Code 10px, ink-3              [meta — recedes]
 *   Scroll hint     → Fira Code 10px, ink-3              [ambient — barely visible]
 */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-start justify-center px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:min-h-screen lg:px-16 lg:pt-0 lg:pb-0 overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Animated blobs */}
      <div className="blob absolute w-[700px] h-[700px] rounded-full bg-accent opacity-[0.09] blur-[100px] -top-48 -right-36 animate-float-1 pointer-events-none" />
      <div className="blob absolute w-[500px] h-[500px] rounded-full bg-accent-2 opacity-[0.09] blur-[100px] -bottom-24 left-[5%] animate-float-2 pointer-events-none" />
      <div className="blob absolute w-[350px] h-[350px] rounded-full bg-accent-3 opacity-[0.09] blur-[100px] top-[40%] right-[25%] animate-float-3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl">

        {/* Freelancing badge */}
        {/* <div
          className="inline-flex items-center gap-2 bg-brand-green/[0.08] border border-brand-green/25 rounded-full px-4 py-1.5 mb-8"
          style={{ animation: 'fadeUp .6s ease .1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
          <span className="label-mono text-brand-green">
            Available for freelance &amp; part-time
          </span>
        </div> */}

        {/* Name: Inter 800 — maximum weight, maximum size, minimum tracking */}
        <h1
          className="font-extrabold leading-[0.94] tracking-[-0.045em] mb-7"
          style={{ fontSize: 'clamp(48px, 9vw, 96px)', animation: 'fadeUp .7s ease .25s both' }}
        >
          <div className="text-ink">Chetan</div>
          {/* Same weight and white color as the first name */}
          <div className="text-ink">Chugh</div>
          {/* Gradient + slightly smaller: role label, not name */}
          <div
            className="text-gradient"
            style={{ fontSize: 'clamp(40px, 6.5vw, 76px)', letterSpacing: '-0.04em' }}
          >
            Full-Stack.
          </div>
        </h1>

        {/* Description: Inter 300 — lightest body weight, max contrast with heading */}
        <p
          className="text-[17px] text-ink-2 leading-[1.85] font-light max-w-[50ch] mb-10"
          style={{ animation: 'fadeUp .7s ease .4s both' }}
        >
          I build scalable web applications, AI-integrated platforms, and
          real-time systems using the Full stack — from idea to production.
        </p>

        {/* Buttons: Inter 500 (medium) — action weight, not competing with heading */}
        <div
          className="flex flex-wrap gap-3 sm:gap-4"
          style={{ animation: 'fadeUp .7s ease .55s both' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/85 text-white px-7 py-3.5 rounded-xl text-[14px] font-medium tracking-[-0.01em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(79,110,247,0.3)]"
          >
            View my work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-line-2 hover:border-ink-3 text-ink px-7 py-3.5 rounded-xl text-[14px] font-medium tracking-[-0.01em] transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Stats: Inter 800 numbers + Fira Code labels — data needs max weight */}
      <div
        className="relative z-10 mt-12 flex w-full flex-wrap gap-x-8 gap-y-5 sm:gap-x-12 lg:absolute lg:bottom-14 lg:right-16 lg:mt-0 lg:w-auto lg:flex-nowrap"
        style={{ animation: 'fadeUp .7s ease .7s both' }}
      >
        {HERO_STATS.map(({ num, label }) => (
          <div key={label} className="text-left lg:text-right">
            <div className="font-extrabold text-[clamp(28px,5vw,38px)] text-ink leading-none tracking-[-0.04em]">
              {num}
            </div>
            {/* Fira Code for stat labels — reinforces mono system used in badges */}
            <div className="label-mono text-ink-3 mt-2">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint: Fira Code — ambient, peripheral, not competing */}
      <div
        className="hidden lg:flex absolute bottom-14 left-16 z-10 items-center gap-3"
        style={{ animation: 'fadeUp .7s ease .9s both' }}
      >
        <div className="w-12 h-px bg-ink-3" />
        <span className="label-mono text-ink-3">Scroll to explore</span>
      </div>
    </section>
  )
}
