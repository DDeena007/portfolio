import { motion } from 'framer-motion'
import { Code, Server, Brain, Database, Layers, HardDrive, Cloud, Terminal } from 'lucide-react'
import { skills } from '../data/resume'

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  server: Server,
  brain: Brain,
  database: Database,
  layers: Layers,
  'hard-drive': HardDrive,
  cloud: Cloud,
  terminal: Terminal,
}

const categoryColors: Record<string, string> = {
  'Programming Languages': '#00d4ff',
  'Backend & Architecture': '#7c3aed',
  'AI / Machine Learning': '#2dd4bf',
  'Big Data & Streaming': '#f59e0b',
  'Data Engineering': '#10b981',
  'Databases': '#ef4444',
  'Cloud & Storage': '#3b82f6',
  'DevOps & Platform': '#8b5cf6',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.03) 0%, transparent 70%)' }}
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#00d4ff' }}>{'// 02. Skills'}</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with professionally</p>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Code
            const color = categoryColors[category.category] ?? '#00d4ff'

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.07 }}
                className="glass-card p-5 group"
                style={{ borderColor: `${color}20` }}
                whileHover={{ y: -4 }}
              >
                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-tight">{category.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}20`,
                        color: `${color}cc`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
