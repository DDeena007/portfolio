import { motion } from 'framer-motion'
import { Code2, Lightbulb, Wrench, TrendingUp, ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons/SocialIcons'
import { projects } from '../data/resume'

const cardColors = ['#00d4ff', '#7c3aed']

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)',
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Things I've built at scale</p>
          <div className="section-divider w-24" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const color = cardColors[index % cardColors.length]

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card overflow-hidden group"
                style={{ borderTop: `2px solid ${color}40` }}
                whileHover={{ y: -6 }}
              >
                {/* Card header */}
                <div
                  className="px-6 pt-6 pb-4"
                  style={{ borderBottom: '1px solid var(--border-card)' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                    >
                      <Code2 size={20} style={{ color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                          background: `${color}10`,
                          color: `${color}cc`,
                          border: `1px solid ${color}20`,
                        }}
                      >
                        {project.type}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-all"
                          style={{
                            background: 'var(--bg-card)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-card)',
                          }}
                          aria-label={`View ${project.name} on GitHub`}
                          title="View on GitHub"
                        >
                          <GithubIcon size={13} />
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                </div>

                {/* Card details */}
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <Lightbulb size={15} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        Problem
                      </span>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Wrench size={15} className="flex-shrink-0 mt-0.5" style={{ color }} />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        Solution
                      </span>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <TrendingUp size={15} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        Impact
                      </span>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t" style={{ borderColor: 'var(--border-card)' }}>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono"
                          style={{
                            background: `${color}10`,
                            border: `1px solid ${color}20`,
                            color: `${color}bb`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm mt-10 font-mono"
          style={{ color: 'var(--text-muted)' }}
        >
          <span style={{ color: '#00d4ff' }}>// </span>
          Projects built at Zoho Corporation as part of the BDaaS platform
        </motion.p>
      </div>
    </section>
  )
}
