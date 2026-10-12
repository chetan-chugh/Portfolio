import SectionHeader from '../ui/SectionHeader'
import { SKILLS } from '../../data'

const CATEGORY_META = {
  'Frontend':           { icon: '▲', color: '#4F6EF7', bg: 'rgba(79,110,247,0.08)'  },
  'Backend':            { icon: '⬡', color: '#06B6D4', bg: 'rgba(6,182,212,0.08)'   },
  'Databases':          { icon: '◈', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)'  },
  'DevOps & Tools':     { icon: '⬙', color: '#10B981', bg: 'rgba(16,185,129,0.08)'  },
  'Specializations':    { icon: '✦', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)'  },
  'Currently Learning': { icon: '◎', color: '#EC4899', bg: 'rgba(236,72,153,0.08)'  },
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28">
      <SectionHeader
        label="Technical Skills"
        title="My tech stack"
        sub="Every tool I use in production."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 sm:mt-14">
        {SKILLS.map((skill, i) => {
          const meta = CATEGORY_META[skill.cat] || { icon: '◆', color: '#4F6EF7', bg: 'rgba(79,110,247,0.08)' }
          return (
            <div
              key={skill.cat}
              className={`reveal reveal-d${(i % 3) + 1} group relative bg-bg-card border border-line rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]`}
              style={{ '--cat-color': meta.color }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${meta.color}, transparent)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300"
                  style={{ background: meta.bg, color: meta.color }}
                >
                  {meta.icon}
                </div>
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.06em] uppercase"
                    style={{ color: meta.color }}
                  >
                    {skill.cat}
                  </p>
                  <p className="text-[10px] text-ink-3 mt-0.5">{skill.items.length} technologies</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-line mb-4" />

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-[12px] font-medium px-3 py-1.5 rounded-lg border transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderColor: 'rgba(255,255,255,0.07)',
                      color: '#8888A8',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = meta.bg
                      e.currentTarget.style.borderColor = meta.color + '55'
                      e.currentTarget.style.color = meta.color
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.color = '#8888A8'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
