import SectionHeader from '../ui/SectionHeader'
import { CONTACT_LINKS } from '../../data'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 text-center">
      <SectionHeader label="Contact" title="Let's work together" />

      <div className="relative bg-bg-card border border-line rounded-3xl p-5 sm:p-8 md:p-12 max-w-xl mx-auto mt-10 sm:mt-14 overflow-hidden reveal">
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent blur-[100px] opacity-[0.06] pointer-events-none" />

        <h3 className="font-syne font-extrabold text-[clamp(26px,6vw,34px)] tracking-tight mb-4">Get in touch 👋</h3>
        <p className="text-sm text-ink-2 leading-relaxed mb-10 font-light">
          Looking for a freelance developer, part-time collaborator, or full-time team member? Open to opportunities across Tri-City, Delhi-NCR, and remote.
        </p>

        <div className="flex flex-col gap-3 text-left">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="flex min-w-0 items-center gap-3 sm:gap-4 bg-white/[0.03] border border-line rounded-xl px-3 py-4 sm:px-5 text-ink text-sm transition-all duration-200 hover:border-accent hover:bg-accent/[0.07] hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-[9px] bg-accent/[0.12] flex items-center justify-center text-base flex-shrink-0">
                {link.icon}
              </div>
              <div className="min-w-0">
                <div className="font-medium break-words">{link.text}</div>
                <div className="text-xs text-ink-3 mt-0.5">{link.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
