import SectionHeader from '../ui/SectionHeader'
import { PROJECTS } from '../../data'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 bg-bg-2 border-t border-b border-line">
      <SectionHeader
        label="Projects"
        title="Things I've built"
        sub={<>Here are some of the major SaaS projects I’ve worked on—<span className="whitespace-nowrap">real-world</span> products that have been successfully launched in production and are used by real users.</>}
        subClassName="max-w-[70ch]"
      />

      <div className="flex flex-col gap-4 sm:gap-6 mt-10 sm:mt-14">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className="group relative bg-bg-card border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:border-line-2 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: project.glowColor }}
            />

            {/* Glow top-right */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[70px] opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
              style={{ background: project.glowColor }}
            />

            {/* Project number watermark */}
            <div
              className="absolute bottom-0 right-6 font-extrabold text-[100px] leading-none select-none pointer-events-none tracking-[-0.04em] transition-opacity duration-300"
              style={{ color: project.glowColor, opacity: 0.04 }}
            >
              {project.num}
            </div>

            <div className="pl-5 pr-5 py-6 sm:pl-8 sm:pr-9 sm:pt-8 sm:pb-9">

              {/* Top row: number + tags */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex min-w-0 flex-wrap items-center gap-3">
                  {/* Project number pill */}
                  <span
                    className="label-mono text-[10px] px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: project.glowColor + '18',
                      color: project.glowColor,
                      border: `1px solid ${project.glowColor}30`,
                    }}
                  >
                    {project.num}
                  </span>
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1 rounded-full font-medium"
                        style={{
                          background: project.tagColors[j].bg,
                          color: project.tagColors[j].color,
                          border: `1px solid ${project.tagColors[j].border}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-ink mb-3 tracking-[-0.03em]"
                style={{ fontSize: 'clamp(21px, 3vw, 24px)', lineHeight: '1.2' }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-ink-2 leading-[1.85] font-light max-w-[700px] mb-7">
                {project.desc}
              </p>

              {/* Divider */}
              <div className="h-px bg-line mb-5" />

              {/* Features row — properly styled */}
              <div>
                <p className="label-mono text-ink-3 mb-3">Key features</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3.5 py-2 rounded-xl border text-ink-2 transition-all duration-200 group-hover:border-line-2"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderColor: '#1E1E30',
                      }}
                    >
                      {/* Dot indicator */}
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.glowColor, opacity: 0.7 }}
                      />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
