'use client'
import { useEffect, useRef, useState } from 'react'

export default function Stars() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !ref.current) return
    
    // Clear existing stars if any
    ref.current.innerHTML = ''
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div')
      const size = Math.random() * 2.5 + 1
      s.style.cssText = `
        position:absolute;border-radius:50%;background:white;
        width:${size}px;height:${size}px;
        left:${Math.random()*100}%;top:${Math.random()*100}%;
        opacity:${0.1+Math.random()*0.2};
        animation:twinkle ${2+Math.random()*4}s ease-in-out ${Math.random()*5}s infinite;
      `
      ref.current.appendChild(s)
    }
  }, [mounted])

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
  }

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}
