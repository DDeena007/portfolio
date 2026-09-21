import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../data/resume'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(236,72,153,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials &amp; learning</p>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
              style={{ borderTop: `2px solid ${cert.color}50` }}
              whileHover={{ y: -5 }}
            >
              {/* Certificate image */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}05)`,
                  borderBottom: '1px solid var(--border-card)',
                }}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: '220px', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    // Fallback if image not found
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.style.minHeight = '120px'
                      parent.style.display = 'flex'
                      parent.style.alignItems = 'center'
                      parent.style.justifyContent = 'center'
                    }
                  }}
                />
                <div
                  className="absolute inset-0 hidden items-center justify-center p-6 text-center"
                  style={{ color: cert.color }}
                  aria-hidden="true"
                >
                  <BadgeCheck size={44} />
                </div>
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(180deg, transparent 60%, ${cert.color}20)` }}
                />
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BadgeCheck size={18} style={{ color: cert.color, flexShrink: 0 }} />
                    <span
                      className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-bold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Add more certifications placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: certifications.length * 0.1 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center group cursor-default"
            style={{
              border: '1px dashed var(--border-card)',
              minHeight: '280px',
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
            >
              <ExternalLink size={20} style={{ color: 'var(--text-muted)' }} />
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
              More coming soon
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Always learning &amp; growing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
