'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

// A vertical scroll area with the scrollbar hidden. On desktop you grab the
// paper and pull it up/down (drag-to-scroll); touch keeps native scrolling.
// Adds scroll affordances: a shadow "lip" at the top once scrolled, and a
// fade + bouncing chevron at the bottom while there is more to read.
export default function PaperScroll({ className = '', children }) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startY: 0, startTop: 0 })
  const [grabbing, setGrabbing] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(true)

  const recompute = useCallback(() => {
    const el = ref.current
    if (!el) return
    setAtTop(el.scrollTop <= 2)
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2)
  }, [])

  useEffect(() => {
    recompute()
    const el = ref.current
    const ro = new ResizeObserver(recompute)
    if (el) ro.observe(el)
    window.addEventListener('resize', recompute)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recompute)
    }
  }, [recompute])

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    drag.current = { active: true, startY: e.clientY, startTop: el.scrollTop }
    setGrabbing(true)
    el.setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.active) return
    const el = ref.current
    if (!el) return
    el.scrollTop = drag.current.startTop - (e.clientY - drag.current.startY)
  }
  const end = (e) => {
    if (!drag.current.active) return
    drag.current.active = false
    setGrabbing(false)
    ref.current?.releasePointerCapture?.(e.pointerId)
  }

  return (
    <div className="relative h-full">
      <div
        ref={ref}
        onScroll={recompute}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={end}
        onPointerCancel={end}
        style={{ touchAction: 'pan-y' }}
        className={`no-scrollbar cursor-grab ${grabbing ? 'cursor-grabbing select-none' : ''} ${className}`}
      >
        {children}
      </div>

      {/* top lip — signals content scrolled up under the edge */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/15 to-transparent transition-opacity duration-300 ${atTop ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* bottom fade + chevron — signals more to read below */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fbfae8] to-transparent transition-opacity duration-300 ${atBottom ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-dark/45 transition-opacity duration-300 ${atBottom ? 'opacity-0' : 'opacity-100'}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
