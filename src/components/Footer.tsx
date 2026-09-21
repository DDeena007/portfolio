import { Mail, Code2, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { personalInfo } from '../data/resume'

interface Social {
  icon: React.ElementType
  href: string
  label: string
}

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  const socials: Social[] = [
    { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.02) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-mono font-semibold text-white hover:text-teal-500 transition-colors mb-3"
            >
              <Code2 size={18} style={{ color: '#00d4ff' }} />
              <span style={{ color: '#00d4ff' }}>&lt;</span>DD
              <span style={{ color: '#00d4ff' }}>/&gt;</span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Software &amp; Big Data Engineer building high-performance pipelines and distributed
              systems at scale.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.label !== 'Email' ? '_blank' : undefined}
                    rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
            <a
              href={personalInfo.resumeFile}
              download
              className="text-sm font-medium transition-colors"
              style={{ color: '#00d4ff' }}
            >
              Download Resume →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {year}{' '}
            <span className="text-gray-300 font-medium">{personalInfo.name}</span>. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <Heart size={13} className="text-red-400" />
            using React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
