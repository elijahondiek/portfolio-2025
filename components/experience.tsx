"use client"

import { useState, useRef, useEffect } from "react"
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Building2,
  Briefcase,
  History,
  Trophy,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Responsibility {
  id: number
  title: string
  description: string
  skills: string[]
  icon: string
}

const responsibilities: Responsibility[] = [
  {
    id: 1,
    title: "Collaborative Development",
    description:
      "Partner with designers, backend engineers, product managers, and stakeholders to deliver exceptional user experiences and robust software solutions.",
    skills: ["Team Collaboration", "Cross-functional Communication", "Stakeholder Management"],
    icon: "🤝",
  },
  {
    id: 2,
    title: "Modern Technologies",
    description:
      "Leverage cutting-edge frontend technologies including React, Next.js, Material-UI, Redux, Zustand, and Context API to build scalable applications.",
    skills: ["React", "Next.js", "Material-UI", "Redux", "Zustand", "Context API"],
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Clean Code Practices",
    description:
      "Write maintainable, scalable code with emphasis on reusable components, proper architecture, and adherence to coding standards.",
    skills: ["Clean Architecture", "Component Design", "Code Standards", "Scalability"],
    icon: "🧹",
  },
  {
    id: 4,
    title: "Testing & QA",
    description:
      "Implement comprehensive testing strategies using Jest, React Testing Library, and Cypress, along with thorough code reviews.",
    skills: ["Jest", "React Testing Library", "Cypress", "Code Reviews", "QA"],
    icon: "🧪",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Optimize application performance using Lighthouse metrics, Web Vitals monitoring, and ensure cross-browser compatibility.",
    skills: ["Lighthouse", "Web Vitals", "Performance Tuning", "Cross-browser Testing"],
    icon: "⚡",
  },
  {
    id: 6,
    title: "Agile & CI/CD",
    description:
      "Work within Agile methodologies including Scrum and Kanban, implementing automated testing and deployment pipelines.",
    skills: ["Scrum", "Kanban", "CI/CD", "Automated Testing", "DevOps"],
    icon: "🔄",
  },
  {
    id: 7,
    title: "Security Compliance",
    description:
      "Implement security best practices including XSS and CSRF protection, ensuring compliance with industry standards.",
    skills: ["XSS Protection", "CSRF Prevention", "Security Standards", "Compliance"],
    icon: "🔒",
  },
  {
    id: 8,
    title: "Innovation",
    description:
      "Stay current with latest technology trends, drive technology adoption, and prototype new features for enhanced user experiences.",
    skills: ["Technology Research", "Feature Prototyping", "Innovation", "Trend Analysis"],
    icon: "💡",
  },
  {
    id: 9,
    title: "Documentation",
    description:
      "Maintain comprehensive technical documentation, establish Git workflows, and ensure proper version control practices.",
    skills: ["Technical Writing", "Git Workflow", "Version Control", "Documentation"],
    icon: "📚",
  },
]

interface InternResponsibility {
  id: number
  title: string
  description: string
  skills: string[]
}

const internResponsibilities: InternResponsibility[] = [
  {
    id: 1,
    title: "Backend Development and Support",
    description:
      "Supported and enhanced the Real Estate FastAPI backend, integrating new features designed to streamline operations for caretakers and enhance overall functionality.",
    skills: ["FastAPI", "Python", "Backend Development", "Feature Integration"],
  },
  {
    id: 2,
    title: "WhatsApp Bot and Technology Integration",
    description:
      "Overhauled the WhatsApp bot for Kodeec, an advanced business banking solution for the real estate sector, using Google Dialogflow. Ensured robust performance and extended bot capabilities using TypeScript, Node.js, and Express.",
    skills: ["Dialogflow", "TypeScript", "Node.js", "Express", "WhatsApp API"],
  },
  {
    id: 3,
    title: "Web Design and User Experience",
    description:
      "Revitalized the company's existing website and the Kodeec platform, applying cutting-edge design and development practices. This work significantly improved user experience and functionality, tailoring both platforms to meet the specialized needs of real estate professionals.",
    skills: ["Web Design", "UX/UI", "Frontend Development", "Responsive Design"],
  },
]

interface Achievement {
  id: number
  title: string
  description: string
  metrics?: string[]
  icon: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Performance Recognition",
    description: "Top performer in recent Safaricom performance review",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Partner Workspace Platform",
    description: "Fixed 9 months of pending issues in 2 weeks",
    metrics: [
      "Enabled KES 1.1 billion in Fuliza new limits",
      "Contributed to KES 411 million in Mshwari adjustments",
      "Facilitated KES 5.1 billion in KCB M-Pesa disbursements",
    ],
    icon: "💼",
  },
  {
    id: 3,
    title: "Merchant Enterprise Portal",
    description: "Developed solution saving KES 15M yearly",
    metrics: ["Used by 128,610+ organizations", "Built comprehensive B2B/B2C transaction interfaces"],
    icon: "🏢",
  },
]

type TabType = "current" | "previous" | "achievements"

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [durationMonths, setDurationMonths] = useState(0)
  const [activeTab, setActiveTab] = useState<TabType>("current")
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate duration since November 2022
  useEffect(() => {
    const startDate = new Date(2022, 10, 1) // November 2022
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
    setDurationMonths(diffMonths)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const moveX = mousePosition.x * 10 - 5
  const moveY = mousePosition.y * 10 - 5

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
      {/* Subtle spotlight effect */}
      <div
        className="absolute pointer-events-none w-[35vw] h-[35vw] rounded-full blur-3xl opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
          left: `calc(${mousePosition.x * 100}% - 17.5vw)`,
          top: `calc(${mousePosition.y * 100}% - 17.5vw)`,
          transition: "all 0.3s ease",
        }}
      />

      <div className="container mx-auto px-2 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "var(--accent-primary)",
              transform: `translate(${moveX * -0.3}px, ${moveY * -0.3}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            Experience
          </h2>
          <p className="text-[#b4bcd0] text-lg max-w-2xl mx-auto">My professional journey in software engineering</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setActiveTab("current")}
            className={cn(
              "flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors duration-300",
              activeTab === "current" ? "text-[#ffff]" : "glass-card hover:border-[var(--accent-primary)] hover:shadow-sm",
            )}
            style={activeTab === "current" ? { backgroundColor: "var(--accent-primary)", color: "#fffff", transform: "none" } : { transform: "none" }}
          >
            <Briefcase className="w-5 h-5" style={activeTab === "current" ? { color: '#ffff' } : {}} />
            <span className="hidden sm:inline" style={activeTab === "current" ? { color: '#ffff' } : {}}>Current Role</span>
          </button>

          <button
            onClick={() => setActiveTab("previous")}
            className={cn(
              "flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors duration-300",
              activeTab === "previous" ? "text-[#ffff]" : "glass-card hover:border-[var(--accent-primary)] hover:shadow-sm",
            )}
            style={activeTab === "previous" ? { backgroundColor: "var(--accent-primary)", color: "#ffff", transform: "none" } : { transform: "none" }}
          >
            <History className="w-5 h-5" style={activeTab === "previous" ? { color: '#ffff' } : {}} />
            <span className="hidden sm:inline" style={activeTab === "previous" ? { color: '#ffff' } : {}}>Previous Experience</span>
          </button>

          <button
            onClick={() => setActiveTab("achievements")}
            className={cn(
              "flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors duration-300",
              activeTab === "achievements" ? "text-[#ffff]" : "glass-card hover:border-[var(--accent-primary)] hover:shadow-sm",
            )}
            style={activeTab === "achievements" ? { backgroundColor: "var(--accent-primary)", color: "#ffff", transform: "none" } : { transform: "none" }}
          >
            <Trophy className="w-5 h-5" style={activeTab === "achievements" ? { color: '#ffff' } : {}} />
            <span className="hidden sm:inline" style={activeTab === "achievements" ? { color: '#ffff' } : {}}>Key Achievements</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative tab-content">
          {/* Current Role Tab */}
          <div
            className={cn(
              "transition-all duration-500 transform",
              activeTab === "current"
                ? "opacity-100 translate-x-0"
                : "absolute opacity-0 translate-x-8 pointer-events-none",
            )}
          >
            {/* Company Header Card */}
            <div
              className={`glass-card p-8 mb-12 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transform: `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`,
                transitionDelay: "0.2s",
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                  {/* Company Logo Placeholder */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                      color: "#0a0f1c",
                    }}
                  >
                    S
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Full-Stack Software Engineer</h3>
                    <div className="flex items-center space-x-4 text-[#b4bcd0]">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>Safaricom PLC</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Kenya</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-[#00d4ff]" />
                    <span className="text-[#b4bcd0]">November 2022 - Present</span>
                  </div>
                  <div
                    className="text-2xl font-bold text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {durationMonths}+ Months
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline-container sm:pl-0 pl-4">
              {/* Timeline Line */}
              <div
                className="timeline-line"
                style={{
                  height: `${responsibilities.length * 200}px`,
                }}
              />

              {/* Timeline Dot */}
              <div className="timeline-dot animate-pulse" style={{ top: "24px" }} />

              {/* Responsibilities Cards */}
              <div className="space-y-4 ml-4 sm:space-y-8 sm:ml-20">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={responsibility.id}
                    className={`timeline-item transform transition-all duration-1000 ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${0.4 + index * 0.1}s`,
                    }}
                  >
                    <div
                      className="glass-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:border-[#00d4ff]"
                      onClick={() => toggleCard(responsibility.id)}
                    >
                      {/* Card Header */}
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">{responsibility.icon}</span>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{responsibility.title}</h4>
                            <p className="text-[#b4bcd0] text-sm line-clamp-2">{responsibility.description}</p>
                          </div>
                        </div>
                        <div className="text-[#00d4ff]">
                          {expandedCard === responsibility.id ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          expandedCard === responsibility.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/20 pt-4">
                            <p className="text-[#b4bcd0] mb-4 leading-relaxed">{responsibility.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {responsibility.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 text-xs font-medium rounded-full text-[#0a0f1c]"
                                  style={{
                                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Experience Tab */}
          <div
            className={cn(
              "transition-all duration-500 transform",
              activeTab === "previous"
                ? "opacity-100 translate-x-0"
                : "absolute opacity-0 translate-x-8 pointer-events-none",
            )}
          >
            {/* Internship Header Card */}
            <div
              className={`glass-card p-8 mb-12 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transform: `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`,
                transitionDelay: "0.2s",
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-6 mb-6 md:mb-0">
                  {/* Company Logo Placeholder */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                      color: "#0a0f1c",
                    }}
                  >
                    I
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Software Engineer Intern</h3>
                    <div className="flex items-center space-x-4 text-[#b4bcd0]">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-4 h-4" />
                        <span>Itesyl Technologies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Kenya</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-5 h-5 text-[#00d4ff]" />
                    <span className="text-[#b4bcd0]">May 2022 - July 2022</span>
                  </div>
                  <div
                    className="text-2xl font-bold text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    3 Months
                  </div>
                </div>
              </div>
            </div>

            {/* Intern Responsibilities */}
            <div className="timeline-container">
              {/* Timeline Line */}
              <div
                className="timeline-line"
                style={{
                  height: `${internResponsibilities.length * 200}px`,
                }}
              />

              {/* Timeline Dot */}
              <div className="timeline-dot animate-pulse" style={{ top: "24px" }} />

              {/* Responsibilities Cards */}
              <div className="space-y-8 ml-20">
                {internResponsibilities.map((responsibility, index) => (
                  <div
                    key={responsibility.id}
                    className={`timeline-item transform transition-all duration-1000 ${
                      isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${0.4 + index * 0.1}s`,
                    }}
                  >
                    <div
                      className="glass-card overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:border-[#00d4ff]"
                      onClick={() => toggleCard(responsibility.id + 100)} // Adding 100 to avoid ID conflicts
                    >
                      {/* Card Header */}
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">‣</span>
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{responsibility.title}</h4>
                            <p className="text-[#b4bcd0] text-sm line-clamp-2">{responsibility.description}</p>
                          </div>
                        </div>
                        <div className="text-[#00d4ff]">
                          {expandedCard === responsibility.id + 100 ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          expandedCard === responsibility.id + 100 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/20 pt-4">
                            <p className="text-[#b4bcd0] mb-4 leading-relaxed">{responsibility.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {responsibility.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 text-xs font-medium rounded-full text-[#0a0f1c]"
                                  style={{
                                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Website Link */}
            <div className="mt-8 text-center">
              <a
                href="https://itesyl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-xl hover:text-[#00d4ff] transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Company Website</span>
              </a>
            </div>
          </div>

          {/* Achievements Tab */}
          <div
            className={cn(
              "transition-all duration-500 transform",
              activeTab === "achievements"
                ? "opacity-100 translate-x-0"
                : "absolute opacity-0 translate-x-8 pointer-events-none",
            )}
          >
            {/* Achievements Header */}
            <div
              className={`glass-card p-8 mb-12 text-center transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transform: `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`,
                transitionDelay: "0.2s",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Key Professional Achievements</h3>
              <p className="text-[#b4bcd0]">Highlights of my impact and recognition in the industry</p>
            </div>

            {/* Achievements Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`glass-card p-6 transform transition-all duration-1000 hover:scale-102 hover:shadow-lg hover:border-[#00d4ff] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${0.4 + index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-[#b4bcd0] mb-4">{achievement.description}</p>

                      {achievement.metrics && (
                        <ul className="space-y-2">
                          {achievement.metrics.map((metric, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-[#00d4ff] mt-2 mr-2 flex-shrink-0" />
                              <span className="text-[#b4bcd0] text-sm">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: "1.5s",
              }}
            >
              <div className="glass-card p-6 text-center">
                <div
                  className="text-3xl font-bold mb-2 text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {durationMonths}+
                </div>
                <p className="text-[#b4bcd0] text-sm">Months Experience</p>
              </div>

              <div className="glass-card p-6 text-center">
                <div
                  className="text-3xl font-bold mb-2 text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  15+
                </div>
                <p className="text-[#b4bcd0] text-sm">Technologies</p>
              </div>

              <div className="glass-card p-6 text-center">
                <div
                  className="text-3xl font-bold mb-2 text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  9
                </div>
                <p className="text-[#b4bcd0] text-sm">Key Responsibilities</p>
              </div>

              <div className="glass-card p-6 text-center">
                <div
                  className="text-3xl font-bold mb-2 text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #00d4ff, #00ff88)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  100%
                </div>
                <p className="text-[#b4bcd0] text-sm">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
