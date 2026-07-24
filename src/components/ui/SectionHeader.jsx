/**
 * SectionHeader
 * Typography hierarchy:
 *   label  → Fira Code, 10px, uppercase, 0.1em tracking   (section identifier)
 *   title  → Inter 700, clamp 32–52px, -0.035em tracking  (primary heading)
 *   sub    → Inter 300, 16px, 1.8 leading, ink-2 colour   (supporting description)
 *
 * Spacing: 12px between label → title, 10px between title → sub.
 * Max-width on sub: 50ch — prevents lines longer than ~8 words, keeps it scannable.
 */
export default function SectionHeader({ label, title, sub }) {
  return (
    <div className="reveal">
      {/* Label: Fira Code mono — technical, precise, distinct from heading */}
      <p className="label-mono text-accent mb-3">{label}</p>

      {/* Title: Inter 700, tight tracking — weight alone carries the hierarchy */}
      <h2
        className="text-ink font-bold leading-[1.06] tracking-[-0.035em] mb-3"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
      >
        {title}
      </h2>

      {/* Sub: Inter 300 (light), ink-2 — recedes behind heading deliberately */}
      {sub && (
        <p className="text-[16px] text-ink-2 leading-[1.8] font-light max-w-[50ch]">
          {sub}
        </p>
      )}
    </div>
  )
}