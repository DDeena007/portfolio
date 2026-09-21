import { motion } from 'framer-motion'
import { Trophy, Award } from 'lucide-react'
import { achievements } from '../data/resume'

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
}

const colors = ['#fbbf24', '#a78bfa']

export default function Achievements() {
  return (
    <section className="py-16 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider w-24 mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] ?? Trophy
            const color = colors[index % colors.length]

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 flex items-center gap-4 group"
                whileHover={{ y: -3, boxShadow: `0 12px 30px ${color}15` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{achievement.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>{achievement.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
