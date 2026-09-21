import { motion } from 'framer-motion'
import { Terminal, Zap, Database, Brain } from 'lucide-react'
import { summary, stats } from '../data/resume'

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
    title: 'AI & GenAI Integration',
    description: 'Experience with LangChain, LangGraph, RAG systems, and deploying AI in global SaaS.',
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
          <p className="font-mono text-sm mb-3" style={{ color: '#00d4ff' }}>{'// 01. About'}</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider w-24 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Terminal card + summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal window */}
            <div
              className="glass-card overflow-hidden mb-8"
              style={{ border: '1px solid rgba(0,212,255,0.15)' }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
                style={{ background: 'rgba(0,212,255,0.05)' }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-gray-500 font-mono">deena@portfolio:~</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2">
                <div>
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span className="text-gray-300">whoami</span>
                </div>
                <div className="text-gray-400 pl-4">Deena Dhayalan — Software &amp; Big Data Engineer</div>

                <div className="pt-1">
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span className="text-gray-300">cat stats.json</span>
                </div>
                <div className="pl-4 text-xs space-y-1">
                  <div>
                    <span className="text-purple-400">"experience"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-green-400">"3+ years"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"throughput"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-green-400">"5 billion rows/hr"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"data_ingestion"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-green-400">"5TB/day"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"gpa"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-green-400">"9.1/10"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"location"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-green-400">"Chennai, India"</span>
                  </div>
                  <div>
                    <span className="text-purple-400">"status"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-teal-400">"open to opportunities"</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span style={{ color: '#00d4ff' }}>$ </span>
                  <span className="text-gray-300 animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Summary paragraph */}
            <p className="text-gray-400 leading-relaxed text-base">{summary}</p>
          </motion.div>

          {/* Right: Highlight cards */}
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
                <h3 className="text-white font-semibold mb-2 text-sm">{h.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{h.description}</p>
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
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
