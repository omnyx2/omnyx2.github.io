'use client'

import { useRef, useState } from 'react'

// A vertical scroll area with the scrollbar hidden. On desktop you grab the
// paper and pull it up/down (drag-to-scroll); on touch devices native scrolling
// is left untouched.
export default function PaperScroll({ className = '', children }) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startY: 0, startTop: 0 })
  const [grabbing, setGrabbing] = useState(false)

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return // let mobile use native scrolling
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
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
      style={{ touchAction: 'pan-y' }}
      className={`no-scrollbar cursor-grab ${grabbing ? 'cursor-grabbing select-none' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
