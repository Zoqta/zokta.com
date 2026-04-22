'use client'

import { useEffect } from 'react'

/**
 * Mirrors prefers-reduced-motion onto <html class="reduce-motion"> so CSS can target it reliably,
 * and reacts when the user toggles the OS/browser setting live.
 */
export function ReducedMotionSync() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      document.documentElement.classList.toggle('reduce-motion', mq.matches)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return null
}
