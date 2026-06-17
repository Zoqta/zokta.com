'use client'

import dynamic from 'next/dynamic'

export const HeroRetroShooterPreviewLazy = dynamic(
  () => import('./HeroRetroShooterPreview').then(m => ({ default: m.HeroRetroShooterPreview })),
  { ssr: false, loading: () => <div className="retro-preview-shell" /> }
)
