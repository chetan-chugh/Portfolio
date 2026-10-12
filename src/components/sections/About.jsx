import SectionHeader from '../ui/SectionHeader'
import { ABOUT_CARDS } from '../../data'

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 bg-bg-2 border-t border-b border-line">
      <SectionHeader
        label="About me"
        title={<>Full Stack developer</>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-14 items-start">

        {/* Text */}
        <div className="reveal reveal-d1 space-y-5">
          {[
            <>I'm a <strong className="text-ink font-medium">Full-Stack Developer</strong> with 2+ years of hands-on production experience. I take complete ownership of projects — from requirement gathering through to production deployment.</>,
            <>Currently at <strong className="text-ink font-medium">Exotica IT Solutions</strong>, managing multiple client projects simultaneously, collaborating with designers and backend teams to deliver robust, user-friendly solutions on strict deadlines.</>,
            <>I specialize in <strong className="text-ink font-medium">AI-integrated platforms</strong>, real-time features, subscription systems, and multi-role dashboards — all shipped with clean, maintainable code.</>,
            <>Pursuing my <strong className="text-ink font-medium">MCA from Guru Jambheshwar University</strong> (2025–2027) alongside full-time work.</>,
          ].map((text, i) => (
            <p key={i} className="text-base text-ink-2 leading-[1.85] font-light">{text}</p>
          ))}
        </div>

        {/* Cards */}
        <div className="reveal reveal-d2 flex flex-col gap-3">
          {ABOUT_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex items-center gap-4 bg-bg-card border border-line rounded-2xl px-5 py-4 transition-all duration-250 hover:border-accent hover:translate-x-1.5 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: card.bg }}
              >
                {card.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-ink mb-0.5">{card.title}</div>
                <div className="text-xs text-ink-3">{card.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
