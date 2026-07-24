import useScrolled from '../../hooks/useScrolled'
import { NAV_LINKS } from '../../data'

/**
 * Navbar typography:
 *   Logo  → Inter 800, tight tracking   (brand identity, heaviest weight)
 *   Links → Fira Code 500, uppercase, 0.08em tracking (technical precision)
 *
 * Fira Code for nav links creates a "developer terminal" feel
 * and visually separates nav from body text (which is also Inter).
 */
export default function Navbar() {
  const scrolled = useScrolled()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-bg/85 backdrop-blur-2xl border-b border-line'
          : 'py-6'
      }`}
    >
      {/* Logo: Inter 800 — heaviest weight, clearest identity signal */}
      <div className="font-sans font-extrabold text-[19px] tracking-[-0.04em] text-ink">
        CC<span className="text-accent">.</span>
      </div>

      {/* Links: Fira Code mono — distinguishes nav from all other text types */}
      <div className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="label-mono text-ink-2 hover:text-ink transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}