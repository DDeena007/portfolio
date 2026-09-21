import { motion } from 'framer-motion'
import { GraduationCap, Award, Star, ExternalLink } from 'lucide-react'
import { education, publications } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.03) 0%, transparent 60%)',
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
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and research</p>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education cards */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
                style={{ borderLeft: '3px solid rgba(124,58,237,0.3)' }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: '#7c3aed15', border: '1px solid #7c3aed30' }}
                  >
                    <GraduationCap size={22} style={{ color: '#a78bfa' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg leading-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div className="font-semibold mb-1" style={{ color: '#a78bfa' }}>
                      {edu.institution}
                    </div>
                    <div className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                      {edu.location} · {edu.period}
                    </div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                      style={{ background: '#7c3aed15', border: '1px solid #7c3aed30' }}
                    >
                      <Star size={13} style={{ color: '#fbbf24' }} />
                      <span className="text-sm font-mono font-semibold" style={{ color: 'var(--text-primary)' }}>
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Publications</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Peer-reviewed research</p>
            </motion.div>

            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                className="glass-card p-6"
                style={{ borderLeft: '3px solid rgba(0,212,255,0.3)' }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: '#00d4ff10', border: '1px solid #00d4ff25' }}
                  >
                    <Award size={22} style={{ color: '#00d4ff' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {pub.title}
                      </h4>
                      {pub.link !== '#' && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 transition-colors"
                          style={{ color: 'var(--text-muted)' }}
                          aria-label="View publication"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <div
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-semibold mb-3"
                      style={{ background: '#00d4ff10', color: '#00d4ff', border: '1px solid #00d4ff20' }}
                    >
                      {pub.venue}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {pub.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
