'use client'

import { useEffect, useRef } from 'react'

export function CursorGridBackground() {
  const glowRef = useRef(null)

  useEffect(() => {
    let rafId = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const animate = () => {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 220}px, ${y - 220}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!media.matches) {
      window.addEventListener('pointermove', onMove, { passive: true })
      rafId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className="ambient-root" aria-hidden>
      {/* z-index ≥ 0 so layers paint above html background (negative z sits behind body/bg and is invisible) */}
      <div
        className="ambient-mesh-layer"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 78% 58% at 72% 18%, rgba(193,128,255,0.28), transparent 54%), radial-gradient(ellipse 68% 52% at 8% 82%, rgba(125,233,255,0.22), transparent 56%)',
        }}
      />
      <div
        className="ambient-grid-layer"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        ref={glowRef}
        className="ambient-cursor-glow"
        style={{
          position: 'fixed',
          width: 440,
          height: 440,
          borderRadius: '50%',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(55px)',
          background:
            'radial-gradient(circle, rgba(133,173,255,0.38) 0%, rgba(193,128,255,0.22) 45%, rgba(0,0,0,0) 72%)',
          transform: 'translate(-9999px,-9999px)',
        }}
      />
    </div>
  )
}
