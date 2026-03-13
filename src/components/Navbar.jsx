import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',          href: '#about'          },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Experience',     href: '#experience'     },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
]

export default function Navbar({ name, darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-brand" onClick={e => handleNav(e, '#home')}>
        Reyhandhani<span>.</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
