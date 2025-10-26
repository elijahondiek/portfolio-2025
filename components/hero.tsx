"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown, ExternalLink, Code, FileText } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  // Removed scroll-based animations that were causing the hero to disappear
  // const { scrollY } = useScroll()
  // const opacity = useTransform(scrollY, [0, 300], [1, 0])
  // const y = useTransform(scrollY, [0, 300], [0, 100])

  // Mission statement words for animated display
  const missionWords = ["Building", "enterprise", "fintech", "solutions", "that", "enable", "billions", "in", "business", "value"]

  // Floating achievements data with improved colors and styling
  const achievements = [
    {
      icon: "💰",
      value: "KES 6.6B+",
      label: "Business Impact",
      bgColor: "bg-blue-900/90",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-700",
      delay: 0.2, // Restored delay
    },
    {
      icon: "🏢",
      value: "128K+",
      label: "Organizations Served",
      bgColor: "bg-emerald-900/90",
      borderColor: "border-emerald-500",
      iconBg: "bg-emerald-700",
      delay: 0.4, // Restored delay
    },
    {
      icon: "🎤",
      value: "10+",
      label: "Speaking Events",
      bgColor: "bg-purple-900/90",
      borderColor: "border-purple-500",
      iconBg: "bg-purple-700",
      delay: 0.6, // Restored delay
    },
    {
      icon: "🏆",
      value: "Top Performer",
      label: "Safaricom PLC",
      bgColor: "bg-amber-900/90",
      borderColor: "border-amber-500",
      iconBg: "bg-amber-700",
      delay: 0.8, // Restored delay
    },
  ]

  // Tech stack icons for the animated background - removed delays for better UX
  const techIcons = [
    { name: "React", symbol: "⚛️", x: 15, y: 20, size: 24, delay: 0 },
    { name: "JavaScript", symbol: "JS", x: 85, y: 15, size: 20, delay: 0 },
    { name: "TypeScript", symbol: "TS", x: 75, y: 85, size: 22, delay: 0 },
    { name: "Python", symbol: "🐍", x: 10, y: 70, size: 26, delay: 0 },
    { name: "AWS", symbol: "☁️", x: 60, y: 40, size: 28, delay: 0 },
    { name: "Node.js", symbol: "🟢", x: 30, y: 90, size: 18, delay: 0 },
    { name: "GraphQL", symbol: "◢", x: 90, y: 60, size: 20, delay: 0 },
    { name: "Docker", symbol: "🐳", x: 20, y: 40, size: 22, delay: 0 },
    { name: "Git", symbol: "⎇", x: 50, y: 75, size: 24, delay: 0 },
  ]

  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsMounted(true)

    // Rotate through achievements
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length)
    }, 5000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [achievements.length])

  // Animation variants - removed delays for better UX
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0, // Removed staggering
        delayChildren: 0, // Removed delay
        duration: 0.1, // Faster transition
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 0 }, // Removed y offset for instant appearance
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: [0.16, 1, 0.3, 1] }, // Faster transition
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 0 }, // Removed y offset for instant appearance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0, // Removed delay
        duration: 0.1, // Faster transition
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.section
      id="home"
      className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[var(--background-dark)] to-[var(--background-light)] flex items-center justify-center"
      ref={containerRef}
      style={{ paddingTop: 'clamp(80px, 10vh, 100px)' }}
      // Removed opacity and y transform that made the hero disappear when scrolling
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,rgba(16,185,129,0.05)_25%,transparent_100%)]"></div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
                 linear-gradient(to right, white 1px, transparent 1px),
                 linear-gradient(to bottom, white 1px, transparent 1px)
               `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Tech stack floating icons */}
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-opacity-20 pointer-events-none select-none"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              fontSize: `${icon.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -15, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: icon.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {icon.symbol}
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between" style={{ padding: 'clamp(1.5rem, 3vw, 3rem)', paddingTop: 'clamp(2rem, 4vh, 3rem)', paddingBottom: '4rem', gap: 'clamp(2rem, 4vw, 3rem)' }}>
        {/* Left column - Main content */}
        <motion.div
          className="w-full lg:w-7/12" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with animated reveal */}
          <div className="overflow-visible">
            <motion.h1
              className="font-bold tracking-tight text-[var(--text-primary)] pb-1"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              variants={itemVariants}
            >
              Elijah Ondiek
            </motion.h1>
          </div>

          {/* Professional title with animated underline */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h2 className="font-medium text-blue-400" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>Full-Stack Software Engineer</h2>
            <p className="text-[var(--text-secondary)]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>Safaricom PLC via Andela</p>
          </motion.div>

          {/* Mission statement with word-by-word animation */}
          <div className="pt-4 pb-8">
            <motion.p className="text-[var(--text-primary)] font-light leading-relaxed flex flex-wrap gap-x-2" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}>
              {missionWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              className="group relative overflow-hidden rounded-xl px-6 py-4 text-white shadow-lg transition-all duration-300 [&_span]:!text-white"
              style={{ backgroundColor: "var(--accent-primary)", boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Button background effects */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={isHovering ? { backgroundPosition: ["0% 50%", "100% 50%"] } : {}}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                style={{ backgroundSize: "200% 100%" }}
              />

              {/* Particle effects on hover */}
              <AnimatePresence>
                {isHovering && (
                  <>
                    {[...Array(10)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white"
                        initial={{
                          opacity: 0.7,
                          x: 0,
                          y: 0,
                          scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                          opacity: 0,
                          x: (Math.random() - 0.5) * 100,
                          y: (Math.random() - 0.5) * 100,
                          scale: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                          left: `${50 + (Math.random() - 0.5) * 20}%`,
                          top: `${50 + (Math.random() - 0.5) * 20}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Button text and icon */}
              <span className="relative z-10 flex items-center justify-center font-medium">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>

            {/* Resume CTA */}
            <motion.a
              href={process.env.NEXT_PUBLIC_RESUME_LINK || "https://docs.google.com/document/d/15EyX05Sg4k-fDOvEoEWjR53yjP_r_xHh9LBwLj3ldOE/edit?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl bg-transparent border-2 border-blue-500/50 px-6 py-4 transition-all duration-300 dark:[&_span]:!text-blue-400 [&_span]:!text-blue-600"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center font-medium">
                View Resume
                <FileText className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-3" />
              </span>
            </motion.a>

            {/* Contact CTA */}
            <motion.a
              href="#contact"
              className="group relative rounded-xl bg-transparent border-2 border-blue-500/50 px-6 py-4 transition-all duration-300 dark:[&_span]:!text-blue-400 [&_span]:!text-blue-600"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center font-medium">
                Get In Touch
                <ExternalLink className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </motion.a>
          </motion.div>

          {/* Tech stack indicators */}
          <motion.div className="flex flex-wrap gap-3 pt-8" variants={itemVariants}>
            <div className="text-sm text-[var(--text-secondary)] flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Tech Stack:
            </div>
            {["React", "TypeScript", "Next.js", "Java", "Spring Boot", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-[var(--text-secondary)] border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                {tech}
              </motion.span>
            ))}
            <motion.span
              className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-[var(--text-secondary)] border border-white/10 cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              +more
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Right column - Visual elements */}
        <div className="hidden lg:block w-full lg:w-5/12 relative" style={{ maxWidth: '100%', overflow: 'visible' }}>
          {/* 3D layered cards effect */}
          <div className="relative w-full perspective-1000" style={{ height: 'clamp(350px, 40vw, 500px)', maxWidth: '100%' }}>
            {/* Main profile card */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-xl [&_*]:!text-white [&_span.text-slate-500]:!text-slate-500 [&_span.text-blue-400]:!text-blue-400 [&_span.text-emerald-400]:!text-emerald-400 [&_span.text-amber-300]:!text-amber-300"
              initial={{ opacity: 0, rotateY: 10, rotateX: -10, y: 20 }}
              animate={{
                opacity: 1,
                rotateY: mousePosition.x * 5 - 2.5,
                rotateX: mousePosition.y * -5 + 2.5,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card content */}
              <div className="absolute inset-0 flex flex-col" style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}>
                {/* Card header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400">portfolio.tsx</div>
                </div>

                {/* Code-like visualization */}
                <div className="flex-1 overflow-hidden">
                  <div className="font-mono space-y-1" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.875rem)', lineHeight: '1.6' }}>
                    <div className="flex">
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>01</span>
                      <span className="text-blue-400">const</span>
                      <span className="text-white mx-2">developer</span>
                      <span className="text-blue-400">=</span>
                      <span className="text-white mx-2">{"{"}</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>02</span>
                      <span className="text-emerald-400">name:</span>
                      <span className="text-amber-300 mx-2">'Elijah Ondiek'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>03</span>
                      <span className="text-emerald-400">role:</span>
                      <span className="text-amber-300 mx-2">'Full-Stack Software Engineer'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>04</span>
                      <span className="text-emerald-400">company:</span>
                      <span className="text-amber-300 mx-2">'Safaricom PLC'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>05</span>
                      <span className="text-emerald-400">impact:</span>
                      <span className="text-amber-300 mx-2">'KES 6.6B+'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>06</span>
                      <span className="text-emerald-400">skills:</span>
                      <span className="text-white mx-2">[</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>07</span>
                      <span className="text-amber-300">'React'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'TypeScript'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'Next.js'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>08</span>
                      <span className="text-amber-300">'Java'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'Spring Boot'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'Node.js'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>09</span>
                      <span className="text-amber-300">'Python'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'PostgreSQL'</span>
                      <span className="text-white">,</span>
                      <span className="text-amber-300 ml-2">'AWS'</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>10</span>
                      <span className="text-white">]</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>11</span>
                      <span className="text-emerald-400">achievements:</span>
                      <span className="text-white mx-2">{"{"}</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>12</span>
                      <span className="text-emerald-400">businessValue:</span>
                      <span className="text-amber-300 mx-2">'6.6B KES'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>13</span>
                      <span className="text-emerald-400">organizations:</span>
                      <span className="text-amber-300 mx-2">'128K+'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>14</span>
                      <span className="text-emerald-400">rating:</span>
                      <span className="text-amber-300 mx-2">'Top Performer'</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>15</span>
                      <span className="text-white">{"}"}</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>16</span>
                      <span className="text-emerald-400">contact:</span>
                      <span className="text-white mx-2">{"{"}</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(3rem, 4vw, 4rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>17</span>
                      <span className="text-emerald-400">email:</span>
                      <span className="text-amber-300 mx-2">'eochieng9448@gmail.com'</span>
                    </div>
                    <div className="flex" style={{ paddingLeft: 'clamp(1.5rem, 2vw, 2rem)' }}>
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>18</span>
                      <span className="text-white">{"}"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-500" style={{ width: 'clamp(1.5rem, 2vw, 2rem)' }}>19</span>
                      <span className="text-white">{"}"}</span>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-3 flex justify-between items-center text-slate-400" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span>💼 Open to opportunities | 🚀 MySacco Platform Launch</span>
                  </div>
                  <div>Last commit: Today</div>
                </div>
              </div>
            </motion.div>

            {/* Background decorative cards */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/10"
              initial={{ opacity: 0, rotateY: 15, rotateX: -15, y: 40, x: 20 }}
              animate={{
                opacity: 0.6,
                rotateY: mousePosition.x * 8 - 4,
                rotateX: mousePosition.y * -8 + 4,
                y: 20,
                x: 20,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 border border-emerald-500/10"
              initial={{ opacity: 0, rotateY: 20, rotateX: -20, y: 60, x: 40 }}
              animate={{
                opacity: 0.4,
                rotateY: mousePosition.x * 10 - 5,
                rotateX: mousePosition.y * -10 + 5,
                y: 40,
                x: 40,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>

          {/* Achievement cards positioned at the middle of each side of the profile card on desktop */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {achievements.map((achievement, index) => {
              // Desktop positioning - optimized for laptop screens to prevent overflow and navbar overlap
              let positionClass = ""
              // Top card: Moved down to avoid navbar overlap, stays safe on laptops
              if (index === 0) positionClass = "top-[5%] lg:top-[2%] xl:top-[-8%] 2xl:top-[-20%] left-1/2 -translate-x-1/2"
              // Right card: Reduced offset to prevent viewport overflow on smaller screens
              if (index === 1) positionClass = "right-[-5%] lg:right-[-8%] xl:right-[-12%] 2xl:right-[-20%] top-1/2 -translate-y-1/2"
              // Bottom card: Safe positioning
              if (index === 2) positionClass = "bottom-[-8%] xl:bottom-[-12%] 2xl:bottom-[-20%] left-1/2 -translate-x-1/2"
              // Left card: Slightly reduced for balance
              if (index === 3) positionClass = "left-[-5%] lg:left-[-8%] xl:left-[-10%] 2xl:left-[-15%] top-1/2 -translate-y-1/2"

              // Active state
              const isActive = index === activeIndex

              return (
                <motion.div
                  key={`desktop-${index}`}
                  className={`absolute ${positionClass}`}
                  style={{ zIndex: 30 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.85,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: achievement.delay,
                  }}
                >
                  {/* Achievement card with better visibility */}
                  <motion.div
                    className={`backdrop-blur-md border-2 ${achievement.borderColor} rounded-xl shadow-lg shadow-black/30 p-3 bg-slate-900/95 [&_*]:!text-white [&_div.text-sm]:!text-slate-300`}
                    style={{ width: 'clamp(180px, 15vw, 220px)' }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    animate={
                      isActive
                        ? {
                            boxShadow: [
                              "0 10px 25px rgba(0,0,0,0.3)",
                              "0 15px 30px rgba(0,0,0,0.4)",
                              "0 10px 25px rgba(0,0,0,0.3)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: isActive ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Icon with background */}
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${achievement.iconBg} text-white text-xl flex-shrink-0`}
                      >
                        {achievement.icon}
                      </div>

                      {/* Achievement text with improved contrast */}
                      <div className="min-w-0">
                        <div className="font-bold text-white text-lg">{achievement.value}</div>
                        <div className="text-sm font-medium text-slate-300">{achievement.label}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <button
          className="hidden md:flex flex-col items-center text-[var(--text-secondary)] hover:text-blue-400 transition-colors duration-300"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-sm mb-2">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background-light)] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--background-dark)] to-transparent pointer-events-none"></div>
    </motion.section>
  )
}
