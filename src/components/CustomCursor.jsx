import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hover-target')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.4)',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 40, bounce: 0 }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 40, bounce: 0 }
    }
  }

  return (
    <motion.div
      className="cursor-ring"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
    />
  )
}
