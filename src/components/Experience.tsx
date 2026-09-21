import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'
import { experiences } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, #00d4ff40, #7c3aed40, transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center -translate-x-1/2"
                  style={{
                    borderColor: exp.current ? '#00d4ff' : '#7c3aed',
                    background: exp.current ? '#00d4ff20' : '#7c3aed20',
                    boxShadow: exp.current ? '0 0 10px rgba(0,212,255,0.4)' : 'none',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: exp.current ? '#00d4ff' : '#7c3aed' }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass-card p-6 lg:p-8"
                  style={{ borderLeft: `3px solid ${exp.current ? '#00d4ff30' : '#7c3aed30'}` }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} style={{ color: exp.current ? '#00d4ff' : '#7c3aed' }} />
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                        {exp.current && (
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{ background: '#00d4ff15', color: '#00d4ff', border: '1px solid #00d4ff30' }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-semibold" style={{ color: exp.current ? '#00d4ff' : '#a78bfa' }}>
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Project label */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg mb-5 text-xs font-mono font-medium"
                    style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.15)', color: '#00d4ff' }}
                  >
                    <span className="opacity-60">project:</span>
                    <span>{exp.project}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <ChevronRight
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: exp.current ? '#00d4ff' : '#7c3aed' }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-card)' }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
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
