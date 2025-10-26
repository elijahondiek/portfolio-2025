"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function CursorSpotlight() {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== "undefined"

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Don't run this effect on the server
    if (!isBrowser) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isBrowser])
  
  // Don't render anything on the server or before mount
  if (!isBrowser || !isMounted) return null

  // Reduce opacity for dark theme to make it less intrusive
  const cursorOpacity = theme === 'dark' ? 0.25 : 1

  return (
    <div
      className="fixed pointer-events-none z-50 w-64 h-64 rounded-full mix-blend-screen blur-xl"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? cursorOpacity : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  )
}
