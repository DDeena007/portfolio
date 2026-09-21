import { Mail, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { personalInfo } from '../data/resume'

interface Social {
  icon: React.ElementType
  href: string
  label: string
  external: boolean
}

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  const socials: Social[] = [
    { icon: GithubIcon, href: personalInfo.github, label: 'GitHub', external: true },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn', external: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', external: false },
  ]

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative pt-16 pb-8 border-t"
      style={{ borderColor: 'var(--border-card)' }}
    >
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
              className="flex items-center gap-2 font-mono font-semibold mb-3 transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              <Code2 size={18} style={{ color: '#00d4ff' }} />
              <span style={{ color: '#00d4ff' }}>&lt;</span>DD
              <span style={{ color: '#00d4ff' }}>/&gt;</span>
            </button>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Software &amp; Big Data Engineer building high-performance pipelines and distributed
              systems at scale.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom — just copyright */}
        <div className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
          <p>
            © {year}{' '}
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              {personalInfo.name}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
