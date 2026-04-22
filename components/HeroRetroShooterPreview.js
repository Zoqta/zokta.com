'use client'

import { useEffect, useRef, useState } from 'react'

const ROUND_MS = 12000
const TARGET_KILLS = 5

export function HeroRetroShooterPreview() {
  const canvasRef = useRef(null)
  const frameRef = useRef(0)
  const lastTickRef = useRef(0)
  const fireRef = useRef(false)
  const pointerRef = useRef({ x: 0.5, y: 0.5 })
  const gameRef = useRef({
    shipX: 0.15,
    shipKick: 0,
    enemies: [],
    bullets: [],
    sparks: [],
    score: 0,
    elapsedMs: 0,
    spawnMs: 0,
    state: 'running',
    stars: Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.06 + 0.02,
    })),
  })

  const [hud, setHud] = useState({
    score: 0,
    dronesLeft: TARGET_KILLS,
    state: 'running',
    hint: 'Tap or click to shoot bug drones',
    progress: 0,
    timerLeft: Math.ceil(ROUND_MS / 1000),
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReduced = mq.matches || document.documentElement.classList.contains('reduce-motion')
    const speedScale = prefersReduced ? 0.68 : 1

    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * ratio)
      canvas.height = Math.floor(rect.height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const resetRound = () => {
      const current = gameRef.current
      current.enemies = []
      current.bullets = []
      current.sparks = []
      current.score = 0
      current.elapsedMs = 0
      current.spawnMs = 0
      current.state = 'running'
      setHud({
        score: 0,
        dronesLeft: TARGET_KILLS,
        state: 'running',
        hint: 'Tap or click to shoot bug drones',
        progress: 0,
        timerLeft: Math.ceil(ROUND_MS / 1000),
      })
    }

    const spawnEnemy = () => {
      const lane = Math.random() * 0.7 + 0.15
      gameRef.current.enemies.push({
        x: 1.04,
        y: lane,
        speed: (Math.random() * 0.08 + 0.1) * speedScale,
        r: 7 + Math.random() * 3,
      })
    }

    const fireBullet = () => {
      const g = gameRef.current
      if (g.state !== 'running') return
      const shipY = 0.5
      const tx = Math.max(0.2, pointerRef.current.x)
      const ty = pointerRef.current.y
      const dx = tx - g.shipX
      const dy = ty - shipY
      const mag = Math.hypot(dx, dy) || 1
      const speed = 0.7
      g.bullets.push({
        x: g.shipX + 0.04,
        y: shipY,
        vx: (dx / mag) * speed,
        vy: (dy / mag) * speed,
      })
      g.shipKick = Math.min(g.shipKick + 1, 1.4)
    }

    const loop = (ts) => {
      if (!lastTickRef.current) lastTickRef.current = ts
      const dt = Math.min((ts - lastTickRef.current) / 1000, 0.033)
      lastTickRef.current = ts

      const g = gameRef.current
      const rect = canvas.getBoundingClientRect()
      const w = rect.width || 1
      const h = rect.height || 1

      // Auto-fire slowly for autoplay demo; user click/tap gives immediate extra shots.
      if (fireRef.current || Math.random() < dt * 1.6) fireBullet()
      fireRef.current = false

      if (g.state === 'running') {
        g.elapsedMs += dt * 1000
        g.spawnMs += dt * 1000
        if (g.spawnMs > 780) {
          g.spawnMs = 0
          spawnEnemy()
        }
      }

      for (const s of g.stars) {
        s.x -= s.speed * dt * speedScale
        if (s.x < 0) s.x = 1
      }

      g.enemies.forEach((e) => {
        if (g.state === 'running') e.x -= e.speed * dt
      })
      g.bullets.forEach((b) => {
        b.x += b.vx * dt
        b.y += b.vy * dt
      })
      g.sparks.forEach((p) => {
        p.life -= dt
        p.x += p.vx * dt
        p.y += p.vy * dt
      })
      g.shipKick = Math.max(g.shipKick - dt * 4.2, 0)

      // Collisions
      for (let i = g.enemies.length - 1; i >= 0; i -= 1) {
        const e = g.enemies[i]
        let hit = false
        for (let j = g.bullets.length - 1; j >= 0; j -= 1) {
          const b = g.bullets[j]
          const d = Math.hypot((b.x - e.x) * w, (b.y - e.y) * h)
          if (d < e.r + 4) {
            g.bullets.splice(j, 1)
            hit = true
            break
          }
        }
        if (hit) {
          g.enemies.splice(i, 1)
          g.score += 1
          for (let k = 0; k < 8; k += 1) {
            g.sparks.push({
              x: e.x,
              y: e.y,
              vx: (Math.random() - 0.5) * 0.45,
              vy: (Math.random() - 0.5) * 0.45,
              life: 0.3 + Math.random() * 0.3,
            })
          }
        }
      }

      g.enemies = g.enemies.filter((e) => e.x > -0.08)
      g.bullets = g.bullets.filter((b) => b.x > 0 && b.x < 1.1 && b.y > -0.2 && b.y < 1.2)
      g.sparks = g.sparks.filter((p) => p.life > 0)

      if (g.state === 'running') {
        if (g.score >= TARGET_KILLS) {
          g.state = 'won'
          setHud({
            score: g.score,
            dronesLeft: 0,
            state: 'won',
            hint: 'Deployment stabilized. Rebooting simulation...',
            progress: 1,
            timerLeft: 0,
          })
          setTimeout(resetRound, 1800)
        } else if (g.elapsedMs >= ROUND_MS) {
          g.state = 'timeout'
          setHud({
            score: g.score,
            dronesLeft: Math.max(TARGET_KILLS - g.score, 0),
            state: 'timeout',
            hint: 'Drones escaped. Auto-restarting...',
            progress: g.score / TARGET_KILLS,
            timerLeft: 0,
          })
          setTimeout(resetRound, 1600)
        } else {
          setHud({
            score: g.score,
            dronesLeft: Math.max(TARGET_KILLS - g.score, 0),
            state: 'running',
            hint: 'Clear 5 bug drones to stabilize deployment',
            progress: g.score / TARGET_KILLS,
            timerLeft: Math.max(Math.ceil((ROUND_MS - g.elapsedMs) / 1000), 0),
          })
        }
      }

      // Draw
      ctx.clearRect(0, 0, w, h)
      const t = ts * 0.001
      const nebulaX = w * (0.62 + Math.sin(t * 0.22) * 0.14)
      const nebulaY = h * (0.32 + Math.cos(t * 0.19) * 0.14)
      const nebula = ctx.createRadialGradient(nebulaX, nebulaY, 12, nebulaX, nebulaY, w * 0.62)
      nebula.addColorStop(0, 'rgba(125,233,255,0.2)')
      nebula.addColorStop(0.42, 'rgba(133,173,255,0.12)')
      nebula.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = 'rgba(10,16,26,0.96)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = nebula
      ctx.fillRect(0, 0, w, h)

      // Lane grid
      ctx.strokeStyle = 'rgba(125,233,255,0.12)'
      ctx.lineWidth = 1
      for (let i = 0; i < 7; i += 1) {
        const y = (i / 6) * h
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Stars
      for (const s of g.stars) {
        ctx.fillStyle = 'rgba(180,210,255,0.6)'
        ctx.fillRect(s.x * w, s.y * h, s.size, s.size)
      }

      // Ship
      const shipX = g.shipX * w
      const shipY = 0.5 * h
      const kick = g.shipKick
      const shipOffset = kick * 4
      const shipGlow = ctx.createRadialGradient(shipX - 3 - shipOffset, shipY, 1, shipX - 3 - shipOffset, shipY, 18)
      shipGlow.addColorStop(0, 'rgba(107,245,198,0.55)')
      shipGlow.addColorStop(1, 'rgba(107,245,198,0)')
      ctx.fillStyle = shipGlow
      ctx.beginPath()
      ctx.arc(shipX - 3 - shipOffset, shipY, 18, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#7de9ff'
      ctx.beginPath()
      ctx.moveTo(shipX - 8 - shipOffset, shipY)
      ctx.lineTo(shipX + 11 - shipOffset, shipY - 9)
      ctx.lineTo(shipX + 11 - shipOffset, shipY + 9)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgba(2,18,36,0.95)'
      ctx.fillRect(shipX + 1 - shipOffset, shipY - 3, 5, 6)
      ctx.fillStyle = 'rgba(107,245,198,0.9)'
      ctx.fillRect(shipX - 14 - shipOffset, shipY - 2, 7 + kick * 5, 4)

      for (const b of g.bullets) {
        ctx.fillStyle = '#c180ff'
        ctx.fillRect(b.x * w - 3, b.y * h - 1, 6, 2)
      }

      for (const e of g.enemies) {
        const ex = e.x * w
        const ey = e.y * h
        ctx.fillStyle = '#ff6b8f'
        ctx.beginPath()
        ctx.arc(ex, ey, e.r, 0, Math.PI * 2)
        ctx.fill()
        // Pixel-bug legs/antenna accents for retro personality.
        ctx.fillStyle = 'rgba(255,177,196,0.9)'
        ctx.fillRect(ex - e.r - 3, ey - 1, 2, 2)
        ctx.fillRect(ex + e.r + 1, ey - 1, 2, 2)
        ctx.fillRect(ex - 1, ey - e.r - 3, 2, 2)
        ctx.fillRect(ex - 1, ey + e.r + 1, 2, 2)
        ctx.strokeStyle = 'rgba(255,255,255,0.35)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(ex - e.r - 3, ey)
        ctx.lineTo(ex + e.r + 3, ey)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(ex, ey - e.r - 3)
        ctx.lineTo(ex, ey + e.r + 3)
        ctx.stroke()
      }

      for (const p of g.sparks) {
        ctx.fillStyle = `rgba(125,233,255,${Math.max(p.life, 0)})`
        ctx.fillRect(p.x * w - 1, p.y * h - 1, 3, 3)
      }

      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div className="retro-preview-shell">
      <div className="retro-preview-head">
        <span className="retro-pill">Arcade Live</span>
        <span className="retro-status">
          {hud.state === 'won' ? 'Stabilized' : hud.state === 'timeout' ? 'Retrying' : 'Active'}
        </span>
      </div>
      <div className="retro-objective-row">
        <span className="retro-objective-text">Clear 5 bug drones to stabilize deployment</span>
        <span className="retro-timer">T-{hud.timerLeft}s</span>
      </div>
      <button
        type="button"
        className="retro-canvas-button"
        onPointerDown={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          pointerRef.current = {
            x: (event.clientX - rect.left) / rect.width,
            y: (event.clientY - rect.top) / rect.height,
          }
          fireRef.current = true
        }}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          pointerRef.current = {
            x: (event.clientX - rect.left) / rect.width,
            y: (event.clientY - rect.top) / rect.height,
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            fireRef.current = true
          }
        }}
        aria-label="Retro shooter preview. Press Enter, Space, click, or tap to fire."
      >
        <canvas ref={canvasRef} className="retro-preview-canvas" />
        {hud.state === 'won' && <div className="retro-win-flash">STABILIZED</div>}
        {hud.state === 'timeout' && <div className="retro-lose-flash">SYSTEM BREACH</div>}
      </button>
      <div className="retro-hud-row">
        <span className="retro-hud-chip">Score: {hud.score}</span>
        <span className="retro-hud-chip">Drones left: {hud.dronesLeft}</span>
      </div>
      <div className="retro-progress-track" aria-hidden>
        <div className="retro-progress-fill" style={{ width: `${Math.max(6, hud.progress * 100)}%` }} />
      </div>
      <p className="retro-help-text">{hud.hint}</p>
    </div>
  )
}
