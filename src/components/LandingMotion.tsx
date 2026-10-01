'use client'

import { useEffect } from 'react'

export default function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.konten-landing')
    const navbar = document.querySelector<HTMLElement>('.landing-nav')
    if (!root || !navbar) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealTargets = root.querySelectorAll<HTMLElement>(
      '.hero-copy, .dashboard-stage, .workflow-section > .eyebrow, .section-heading, .workflow-card, .feature-visual, .feature-copy, .feature-grid article, .publish-section, .testimonials-section > .eyebrow, .testimonial-grid article, .cta-copy, .cta-visual, .footer-brand, .footer-links > div'
    )

    revealTargets.forEach((element, index) => {
      element.classList.add('motion-reveal')
      element.style.setProperty('--reveal-order', String(index % 6))
    })

    const updateNavbar = () => navbar.classList.toggle('is-scrolled', window.scrollY > 18)
    updateNavbar()
    window.addEventListener('scroll', updateNavbar, { passive: true })

    if (reducedMotion) {
      revealTargets.forEach(element => element.classList.add('is-visible'))
      return () => window.removeEventListener('scroll', updateNavbar)
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })

    revealTargets.forEach(element => observer.observe(element))

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - .5) * 2
      const y = (event.clientY / window.innerHeight - .5) * 2
      root.style.setProperty('--pointer-x', x.toFixed(3))
      root.style.setProperty('--pointer-y', y.toFixed(3))
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateNavbar)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return null
}
