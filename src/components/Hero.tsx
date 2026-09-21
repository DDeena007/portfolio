import { useEffect, useRef, useState } from 'react'
import { Mail, Download, ArrowDown, ChevronRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons'
import { personalInfo, stats } from '../data/resume'

const titles = [
  'Software Engineer',
  'Big Data Engineer',
  'Distributed Systems Builder',
  'Data Pipeline Architect',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const current = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, titleIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; r: number; alpha: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 60%), #0a0f1e',
      }}
    >
      <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="section-container relative z-10 pt-20 pb-16">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-300">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          {/* Typing title */}
          <div className="h-14 flex items-center mb-6">
            <span
              className="text-2xl sm:text-3xl font-mono font-semibold"
              style={{ color: '#00d4ff' }}
            >
              {displayed}
              <span className="animate-blink ml-0.5 border-r-2 border-teal-500">&nbsp;</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
              <ChevronRight size={16} />
            </button>
            <a
              href={personalInfo.resumeFile}
              download
              className="btn-secondary"
              aria-label="Download Deena Dhayalan's Resume"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} className="group-hover:text-teal-500 transition-colors" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} className="group-hover:text-teal-500 transition-colors" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              aria-label="Send Email"
            >
              <Mail size={20} className="group-hover:text-teal-500 transition-colors" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-teal-500 transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
