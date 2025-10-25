"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ProjectsStyleSkills } from "./projects-style-skills";
import { Terminal } from "lucide-react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  // Always set to true to ensure content is immediately visible without scroll delay
  const isInView = true;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants - removed delays for better UX
  const textVariants = {
    hidden: { opacity: 1, y: 0 }, // Start fully visible with no offset
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0, // No delay
        duration: 0.1, // Very fast transition
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-24 relative"
      ref={containerRef}
    >
      {/* Subtle spotlight effect */}
      <div
        className="absolute pointer-events-none w-[30vw] h-[30vw] rounded-full blur-3xl opacity-30"
        style={{
          background: "rgba(59, 130, 246, 0.1)",
          left: `calc(${mousePosition.x * 100}% - 15vw)`,
          top: `calc(${mousePosition.y * 100}% - 15vw)`,
          transition: "all 0.3s ease",
        }}
      />

      <div className="container w-full px-6" ref={aboutRef}>
        {/* Modern About Content */}
        <div className="space-y-12 mb-16">
          {/* Opening Statement */}
          <motion.h2
            className="about-opening text-white"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Full-Stack Software Engineer at Safaricom (via Andela), building enterprise fintech solutions that enable billions in business value.
          </motion.h2>

          {/* Secondary Statement */}
          <motion.p
            className="about-secondary text-slate-400"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Delivered KES 6.6 billion in business impact through Partner Workspace (credit analytics platform), Merchant Enterprise Portal (serving 128,610+ organizations), and digital banking solutions. Recognized as top performer for exceptional problem-solving and technical leadership.
          </motion.p>

          {/* Professional Snapshot */}
          <motion.p
            className="about-snapshot text-blue-500"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              fontWeight: 500,
            }}
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Part of Africa's elite tech talent network, specializing in React, TypeScript, and expanding into Java/Spring Boot for full-stack development. Passionate about building secure, scalable applications that balance technical excellence with measurable business outcomes.
          </motion.p>
        </div>

        {/* Skills Section - no animation */}
        <div>
          <h3
            className="about-opening text-white mb-6"
            style={{
              fontSize: "clamp(1rem, 5vw, 2rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Technical Skills
          </h3>
          <ProjectsStyleSkills />
        </div>
      </div>
    </section>
  );
}
