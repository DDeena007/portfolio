import { motion } from 'framer-motion'
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { personalInfo } from '../data/resume'

interface ContactItem {
  icon: React.ElementType
  label: string
  value: string
  href: string | null
  color: string
  description: string
  external?: boolean
}

const buildContactItems = (): ContactItem[] => [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#00d4ff',
    description: 'Drop me an email anytime',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'View my repositories',
    href: personalInfo.github,
    color: '#a78bfa',
    description: 'Open source work & projects',
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
    color: '#0ea5e9',
    description: 'Professional network',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: '#10b981',
    description: 'Based in Chennai, India',
  },
]

export default function Contact() {
  const contactItems = buildContactItems()

  return (
    <section
      id="contact"
      className="py-24 relative"
      style={{ background: 'rgba(124,58,237,0.01)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#00d4ff' }}>
            {'// 07. Contact'}
          </p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            I'm open to new opportunities, collaborations, or just a great engineering
            conversation. Reach out!
          </p>
          <div className="section-divider w-24 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`glass-card p-5 flex items-center gap-4 group ${item.href ? 'cursor-pointer' : ''}`}
                  whileHover={item.href ? { y: -3 } : undefined}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm truncate">{item.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.description}</div>
                  </div>
                  {item.href && (
                    <ArrowRight
                      size={16}
                      className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0"
                    />
                  )}
                </motion.div>
              )

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.label}
                  >
                    {cardContent}
                  </a>
                )
              }

              return <div key={item.label}>{cardContent}</div>
            })}
          </div>

          {/* CTA message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 text-center"
            style={{ border: '1px solid rgba(0,212,255,0.1)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <Send size={22} style={{ color: '#00d4ff' }} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Open to Opportunities</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Whether it's a full-time role, contract work, or an interesting project — I'd love
              to hear from you.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary inline-flex" aria-label="Send an email">
              <Mail size={16} />
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
