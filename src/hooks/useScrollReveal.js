import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const select = () => document.querySelectorAll('.reveal:not(.is-visible)')

    const observe = (els) => {
      if (!els.length) return () => {}
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )
      els.forEach((el) => io.observe(el))
      return () => io.disconnect()
    }

    // Initial observe
    let cleanup = observe(select())

    // Re-observe when tab switches re-render new elements (e.g. Skills tabs)
    const mo = new MutationObserver(() => {
      cleanup()
      cleanup = observe(select())
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      cleanup()
      mo.disconnect()
    }
  }, [])
}
