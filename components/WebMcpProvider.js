'use client'

import { useEffect } from 'react'

export function WebMcpProvider() {
  useEffect(() => {
    try {
      const mc = typeof navigator !== 'undefined' && navigator.modelContext
      if (!mc || typeof mc.provideContext !== 'function') return

      mc.provideContext({
        tools: [
          {
            name: 'zoqta_join_waitlist',
            description: 'Submit the Zoqta waitlist form.',
            inputSchema: {
              type: 'object',
              properties: {
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: { type: 'string' },
                company: { type: 'string' },
              },
              required: ['firstName', 'lastName', 'email'],
            },
            execute: async (input) => {
              const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(input),
              })
              const data = await response.json().catch(() => null)
              if (!response.ok) throw new Error(data?.error || 'Waitlist request failed')
              return data
            },
          },
        ],
      })
    } catch (error) {
      console.warn('WebMCP provideContext skipped:', error)
    }
  }, [])

  return null
}
