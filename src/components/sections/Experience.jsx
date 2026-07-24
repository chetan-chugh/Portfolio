import SectionHeader from '../ui/SectionHeader'
import { EXPERIENCE, EDUCATION } from '../../data'

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-16 py-28">
      <SectionHeader label="Experience" title="Where I've worked" />

      {/* Timeline */}
<div className="mt-14">
  {EXPERIENCE.map((exp, i) => (
    <div key={exp.company} className={`reveal reveal-d${i + 1} flex gap-6 pb-12 last:pb-0`}>
      {/* Line + dot column */}
      <div className="flex flex-col items-center w-2.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-bg border-2 border-line-2 flex-shrink-0 mt-1.5 transition-all duration-250 group-hover:border-accent group-hover:shadow-[0_0_0_4px_rgba(79,110,247,0.12)]" />
        {i < EXPERIENCE.length - 1 && (
          <div className="w-px flex-1 bg-line mt-1" />
        )}
      </div>

      {/* Content */}
      <div className="group">
        <p className="text-[11px] text-accent tracking-[0.06em] uppercase font-medium mb-2">{exp.period}</p>
        <h3 className="font-syne font-bold text-xl text-ink tracking-tight mb-1">{exp.role}</h3>
        <p className="text-sm text-ink-3 mb-4">{exp.company} · {exp.location}</p>
        <p className="text-sm text-ink-2 leading-[1.8] font-light max-w-2xl">{exp.desc}</p>
      </div>
    </div>
  ))}
</div>
      {/* Education */}
      <div className="mt-20">
        <p className="text-xs text-accent tracking-[0.1em] uppercase font-medium mb-8">Education</p>
        <div className="grid grid-cols-2 gap-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="reveal bg-bg-card border border-line rounded-2xl px-6 py-5 hover:border-line-2 transition-all duration-200"
            >
              <p className="text-[10px] text-ink-3 tracking-[0.08em] uppercase font-medium mb-1">{edu.period}</p>
              <p className="font-syne font-bold text-lg text-ink tracking-tight">{edu.degree}</p>
              <p className="text-sm text-ink-2 mt-0.5">{edu.institution}, {edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}