'use client'

import { useState, useEffect } from 'react'

// Full-screen desk mat behind the paper, with a small toggle to switch
// between the sage and deep-blue mats. The choice is saved to localStorage.
export default function MatBackground() {
  const [mat, setMat] = useState('sage')

  useEffect(() => {
    const saved = localStorage.getItem('mat')
    if (saved === 'sage' || saved === 'blue') setMat(saved)
  }, [])

  const toggle = () => {
    setMat((prev) => {
      const next = prev === 'sage' ? 'blue' : 'sage'
      localStorage.setItem('mat', next)
      return next
    })
  }

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-0 transition-colors duration-500 ${mat === 'sage' ? 'mat-sage' : 'mat-blue'}`}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label="Switch background"
        className="fixed top-4 right-4 z-30 rounded-full border border-white/40 bg-black/25 px-3 py-1 text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/40"
      >
        {mat === 'sage' ? 'Blue mat' : 'Sage mat'}
      </button>
    </>
  )
}
