import { motion } from 'framer-motion'
import { Terminal, Zap, Database, Brain, Download } from 'lucide-react'
import { summary, stats, personalInfo } from '../data/resume'

const highlights = [
  {
    icon: Zap,
    title: 'High-Performance Pipelines',
    description: 'Built Kafka pipelines handling 5B rows/hour and CDC services moving 5TB/day.',
    color: '#00d4ff',
  },
  {
    icon: Database,
    title: 'Big Data Infrastructure',
    description: 'Hands-on with Hadoop, Hive, Trino, Apache Pinot — building medallion architecture data lakes.',
    color: '#7c3aed',
  },
  {
    icon: Brain,
    title: 'AI & ML Ops',
    description: 'Excited to explore LangChain, LangGraph, RAG, and deploying AI/ML systems at scale.',
    color: '#2dd4bf',
  },
  {
    icon: Terminal,
    title: 'Systems Engineering',
    description: 'Distributed systems, zero-downtime migrations, clean code, and mentoring engineering teams.',
    color: '#a78bfa',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider w-24 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Terminal card + summary + Download */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal window */}
            <div
              className="glass-card overflow-hidden mb-6"
              style={{ border: '1px solid rgba(0,212,255,0.15)' }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b terminal-header"
                style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'var(--terminal-bg)' }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  deena@portfolio:~
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <div>
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span style={{ color: 'var(--text-secondary)' }}>whoami</span>
                </div>
                <div className="pl-4" style={{ color: 'var(--text-muted)' }}>
                  Deena Dhayalan — Software &amp; Big Data Engineer
                </div>
                <div className="pt-1">
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span style={{ color: 'var(--text-secondary)' }}>cat stats.json</span>
                </div>
                <div className="pl-4 text-xs space-y-1">
                  <div>
                    <span className="text-purple-400">"experience"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-green-400">"5+ years"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"throughput"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-green-400">"5 billion rows/hr"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"data_ingestion"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-green-400">"5TB/day"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"gpa"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-green-400">"9.1/10"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"interest"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-teal-400">"AI / ML Ops"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"status"</span>
                    <span style={{ color: 'var(--text-muted)' }}>: </span>
                    <span className="text-teal-400">"open to opportunities"</span>
                  </div>
                </div>
                <div className="pt-1">
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span className="animate-pulse" style={{ color: 'var(--text-secondary)' }}>_</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="leading-relaxed text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
              {summary}
            </p>

            {/* Download Resume — primary CTA in About */}
            <a
              href={personalInfo.resumeFile}
              download
              className="btn-primary inline-flex"
              aria-label="Download Deena Dhayalan's Resume"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Highlight cards + Stats */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, index) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-5 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${h.color}15`, border: `1px solid ${h.color}30` }}
                >
                  <h.icon size={20} style={{ color: h.color }} />
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                  {h.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {h.description}
                </p>
              </motion.div>
            ))}

            {/* Stats mini-grid */}
            <div className="sm:col-span-2 grid grid-cols-2 gap-4">
              {stats.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                  style={{ border: '1px solid rgba(0,212,255,0.1)' }}
                >
                  <div className="text-xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
