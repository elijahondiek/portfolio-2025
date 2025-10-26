"use client"

import type React from "react"

import {
  useState,
  useRef,
  useEffect,
} from "react"
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Share2,
  Star,
  Calendar,
  Code,
  Globe,
  Zap,
  ArrowRight,
  Server,
  Bot,
  Layout,
  FileCode,
  Menu,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  tagline: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  status: "Live" | "In Development" | "Creation"
  image: string
  githubUrl?: string
  liveUrl?: string
  challenges: string[]
  solutions: string[]
  features: string[]
  dateCompleted: string
  metrics?: string[]
  primaryTech: string
  primaryTechIcon: React.ReactNode
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-tenant Identity Microservice",
    tagline: "Comprehensive authentication system with RBAC, multi-tenancy, and advanced security features",
    description: "Comprehensive authentication system with RBAC, multi-tenancy, and advanced security features",
    longDescription:
      "A secure identity microservice providing JWT-based authentication, role-based access control (RBAC), multi-tenancy, session management, audit logging, and multi-factor authentication. Built with FastAPI and PostgreSQL for enterprise-grade security and scalability.",
    technologies: ["FastAPI", "PostgreSQL", "Redis", "JWT", "Message Queue"],
    category: "API",
    difficulty: "Advanced",
    status: "Creation",
    image: "/projects/1.png",
    githubUrl: "https://github.com/elijahondiek/Multi-tenant-Identity-Microservice",
    liveUrl: "https://identity.elijah-ondiek.site/docs",
    challenges: ["Multi-tenant data isolation", "Secure session management", "Fine-grained access control", "Performance at scale"],
    solutions: ["Tenant-scoped database queries", "Redis cache for token validation", "Hierarchical RBAC model", "Optimized caching strategies"],
    features: [
      "JWT-based authentication", 
      "Role-based access control", 
      "Multi-tenancy support", 
      "Account security (lockout, tracking)", 
      "One device, one session policy",
      "Audit logging"
    ],
    dateCompleted: "2024-02-15",
    primaryTech: "FastAPI",
    primaryTechIcon: <Server />,
  },
  {
    id: 2,
    title: "ShadowCoach: Boxing Form Analyzer",
    tagline: "Computer vision-based boxing technique analysis using AI and pose estimation",
    description: "Computer vision-based boxing technique analysis using AI and pose estimation",
    longDescription:
      "A computer vision-based boxing form analysis application that uses AI to analyze boxing techniques, compare them to reference techniques, and provide detailed feedback. Part of the larger ShadowCoach fitness platform, focusing on jab technique analysis using pose estimation.",
    technologies: ["Python", "OpenCV", "MediaPipe", "FastAPI", "NumPy"],
    category: "AI/ML",
    difficulty: "Advanced",
    status: "Creation",
    image: "/projects/ShadowCoach_ Boxing Form Analyzer.png",
    githubUrl: "https://github.com/elijahondiek/ShadowCoach-Boxer",
    challenges: ["Real-time pose detection", "Technique comparison algorithms", "Actionable feedback generation", "Handling different speeds and orientations"],
    solutions: ["MediaPipe pose estimation", "Dynamic Time Warping", "Reference technique comparison", "Visualization tools"],
    features: [
      "Real-time pose detection", 
      "Jab technique analysis", 
      "Reference comparison", 
      "Detailed feedback", 
      "Technique visualization",
      "API integration"
    ],
    dateCompleted: "2024-01-20",
    primaryTech: "Python",
    primaryTechIcon: <Bot />,
  },
  {
    id: 3,
    title: "Katiba360°",
    tagline: "Constitutional education platform making Kenya's constitution accessible to everyone",
    description: "Constitutional education platform making Kenya's constitution accessible to everyone",
    longDescription:
      "A comprehensive platform that makes Kenya's constitution accessible, understandable, and actionable for all citizens through simple language and practical examples, regardless of their educational background, language preference, or technical expertise.",
    technologies: ["React", "Next.js", "Tailwind CSS", "ShadCN UI", "FastAPI"],
    category: "Education",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/katiba360.png",
    githubUrl: "https://github.com/elijahondiek/katiba360",
    liveUrl: "https://katiba360.com/",
    challenges: ["Simplifying complex legal language", "Multi-language support", "Accessible design for all devices including feature phones"],
    solutions: ["Plain language rewriting", "i18n implementation for multiple languages", "Progressive enhancement for broad device support"],
    features: ["Chapter-by-chapter constitution breakdown", "Rights explorer", "Search functionality", "Practical examples of constitutional applications"],
    dateCompleted: "2024-03-15",
    primaryTech: "Next.js",
    primaryTechIcon: <Code />,
  },
  {
    id: 4,
    title: "GraphQL e-commerce API",
    tagline: "Node.js server with GraphQL for optimized e-commerce operations and product reviews",
    description: "Node.js server with GraphQL for optimized e-commerce operations and product reviews",
    longDescription:
      "An e-commerce API that runs on a Node.js server and uses GraphQL as a query language. Optimizes CRUD operation queries and provides robust support for product reviews and ratings, allowing clients to request exactly the data they need.",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Express", "Apollo Server"],
    category: "API",
    difficulty: "Intermediate",
    status: "Creation",
    image: "/projects/GraphQL eCommerce Backend.png",
    githubUrl: "https://github.com/elijahondiek/GraphQL-e-commerce-API",
    challenges: ["Optimizing complex queries", "Implementing efficient review system", "Handling product relationships"],
    solutions: ["GraphQL schema design", "Resolver optimization", "MongoDB aggregation pipelines"],
    features: ["Optimized CRUD operations", "Product review & rating system", "GraphQL playground"],
    dateCompleted: "2023-10-20",
    primaryTech: "GraphQL",
    primaryTechIcon: <Server />,
  },
  {
    id: 6,
    title: "Social Media Unified Microservice",
    tagline: "FastAPI backend with PostgreSQL for user accounts, posts, and voting system",
    description: "FastAPI backend with PostgreSQL for user accounts, posts, and voting system",
    longDescription:
      "A social media microservice that manages user account creation with access tokens, post creation, update, and deletion, as well as upvotes and downvotes. Built with FastAPI and powered by a Postgres database.",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Python", "Swagger UI"],
    category: "API",
    difficulty: "Intermediate",
    status: "Creation",
    image: "/projects/Social Media Unified Microservice.png",
    githubUrl: "https://github.com/elijahondiek/Social-Media-App-Microservice",
    liveUrl: "https://fastapi-develie.herokuapp.com/",
    challenges: ["Token-based authentication", "Database relationship modeling", "API performance optimization"],
    solutions: ["JWT authentication", "SQLAlchemy ORM relationships", "Efficient query design"],
    features: ["User account management", "Post CRUD operations", "Upvote/downvote system", "API documentation with Swagger UI"],
    dateCompleted: "2023-09-15",
    primaryTech: "FastAPI",
    primaryTechIcon: <Server />,
  },
  {
    id: 7,
    title: "AI-Powered WhatsApp Assistant",
    tagline: "WhatsApp bot with Twilio, Google Dialogflow, and Node.js server",
    description: "WhatsApp bot with Twilio, Google Dialogflow, and Node.js server",
    longDescription:
      "A WhatsApp bot built with Twilio as the messaging client, Google's Dialogflow for intent filtering, and runs on a Node.js server. Provides intelligent conversational interactions through natural language processing.",
    technologies: ["Node.js", "Twilio", "Dialogflow", "Express.js", "Google Cloud Platform"],
    category: "AI/Bot",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/AI-Powered WhatsApp Assistant (Twilio & Dialogflow).png",
    githubUrl: "https://github.com/elijahondiek/AI-Powered-WhatsApp-Student-Assistant-Twilio-Dialogflow-",
    challenges: ["Intent recognition", "Webhook integration", "Conversation flow management"],
    solutions: ["Dialogflow intent configuration", "Twilio messaging API", "Express.js webhook endpoints"],
    features: [
      "Natural language understanding",
      "Intent-based responses",
      "Webhook integration",
      "Conversational flow management",
    ],
    dateCompleted: "2023-08-10",
    primaryTech: "Dialogflow",
    primaryTechIcon: <Bot />,
  },
  {
    id: 8,
    title: "Bookmarks Manager Microservice",
    tagline: "RESTful API for bookmark management with user authentication and visit tracking",
    description: "RESTful API for bookmark management with user authentication and visit tracking",
    longDescription:
      "A bookmark manager microservice that allows for simple bookmark management. Features user creation and authentication with access tokens, full CRUD operations for bookmarks, and link visit tracking with usage statistics.",
    technologies: ["FastAPI", "PostgreSQL", "JWT", "REST API"],
    category: "Productivity",
    difficulty: "Intermediate",
    status: "Creation",
    image: "/projects/Bookmarks-Manager-Microservice.png",
    githubUrl: "https://github.com/elijahondiek/Bookmarks-Manager-Microservice",
    challenges: ["Secure authentication", "Visit tracking implementation", "Statistics aggregation"],
    solutions: ["JWT token authentication", "Click tracking middleware", "MongoDB aggregation pipelines"],
    features: ["User authentication", "CRUD operations", "Visit tracking", "Usage statistics"],
    dateCompleted: "2023-07-25",
    primaryTech: "FastAPI",
    primaryTechIcon: <Server />,
  },
  {
    id: 10,
    title: "Full Circle Health & Wellness",
    tagline: "Next.js 14 blog with TypeScript, Sanity CMS, and holistic health content",
    description: "Next.js 14 blog with TypeScript, Sanity CMS, and holistic health content",
    longDescription:
      "A modern health and wellness blog built with Next.js 14, featuring a headless CMS for content management and optimized for SEO and performance.",
    technologies: ["Next.js 14", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    category: "Blog",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/full-circle.png",
    githubUrl: "https://github.com/elijahondiek/fullcircle-health-and-fitness",
    liveUrl: "https://fullcirclehealthandfitness.vercel.app/",
    challenges: ["SEO optimization", "Content management", "Performance optimization"],
    solutions: ["Static site generation", "Image optimization", "Structured data markup"],
    features: ["Content management", "SEO optimization"],
    dateCompleted: "2024-01-20",
    primaryTech: "Next.js",
    primaryTechIcon: <Code />,
  },
  {
    id: 11,
    title: "Triotech Software Solutions",
    tagline: "Corporate website showcasing custom software development services",
    description: "Corporate website showcasing custom software development services",
    longDescription:
      "A professional corporate website for a software development company, featuring service portfolios, team profiles, and client testimonials.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    category: "Corporate",
    difficulty: "Beginner",
    status: "Live",
    image: "/projects/triotech.png",
    githubUrl: "https://github.com/elijahondiek/triotech-website",
    liveUrl: "https://triotech-website.vercel.app/",
    challenges: ["Professional design", "Performance optimization", "Contact form integration"],
    solutions: ["Modern UI/UX design", "Image optimization", "Serverless form handling"],
    features: ["Service showcase", "Team profiles", "Contact forms", "Testimonials"],
    dateCompleted: "2023-12-05",
    primaryTech: "Next.js",
    primaryTechIcon: <Code />,
  },
  {
    id: 12,
    title: "Mema Africa",
    tagline: "Marketing consulting website for boutique firm with value-driven solutions",
    description: "Marketing consulting website for boutique firm with value-driven solutions",
    longDescription:
      "A sleek marketing website for a boutique consulting firm specializing in African markets, featuring case studies and service offerings.",
    technologies: ["React", "CSS3", "Bootstrap5"],
    category: "Marketing",
    difficulty: "Beginner",
    status: "Live",
    image: "/projects/memaafrica.png",
    githubUrl: "https://www.memaafrica.org/",
    liveUrl: "https://www.memaafrica.org/",
    challenges: ["Brand representation", "Content organization", "Mobile optimization"],
    solutions: ["Custom design system", "Content strategy", "Progressive web app"],
    features: ["Case studies", "Service pages"],
    dateCompleted: "2023-11-10",
    primaryTech: "React",
    primaryTechIcon: <Layout />,
  },
  {
    id: 13,
    title: "Itesyl Technologies",
    tagline: "Fintech website specializing in real estate banking services",
    description: "Fintech website specializing in real estate banking services",
    longDescription:
      "A fintech platform website showcasing innovative banking solutions for the real estate industry, with secure client portals and service information.",
    technologies: ["React", "CSS3", "Bootstrap5"],
    category: "Fintech",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/itesyl.png",
    githubUrl: "https://itesyl.netlify.app/",
    liveUrl: "https://itesyl.netlify.app/",
    challenges: ["Security compliance", "Financial data handling", "User authentication"],
    solutions: ["Multi-factor authentication", "Encrypted data transmission", "Compliance frameworks"],
    features: ["Client portals", "Service calculator", "Secure messaging", "Document upload"],
    dateCompleted: "2024-02-14",
    primaryTech: "React",
    primaryTechIcon: <Layout />,
  },
  {
    id: 14,
    title: "Teksade: Tech Community HQ",
    tagline: "Tech community discovery platform with Next.js, TypeScript, and Prisma",
    description: "Tech community discovery platform with Next.js, TypeScript, and Prisma",
    longDescription:
      "Discover the most vibrant and engaged tech communities. Teksade is an easier and faster tech community discovery platform, helping users find their place among like-minded individuals in the tech world.",
    technologies: ["Next.js 13", "TypeScript", "Prisma", "TRPC", "Clerk", "TailwindCSS"],
    category: "Web App",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/teksade.png",
    githubUrl: "https://github.com/elijahondiek/Teksade-The-Tech-Community-HQ",
    liveUrl: "https://teksade.vercel.app/",
    challenges: ["Community data organization", "User authentication", "Real-time updates", "Image storage"],
    solutions: ["Prisma ORM for data modeling", "Clerk for user management", "TRPC for type-safe APIs", "Firebase for image storage"],
    features: ["Community discovery", "User profiles", "Community listings", "Search functionality", "Email notifications"],
    dateCompleted: "2024-03-01",
    primaryTech: "Next.js",
    primaryTechIcon: <Code />,
  },
  {
    id: 15,
    title: "LiteraryServe",
    tagline: "Academic blog platform for student authors and tutors",
    description: "Academic blog platform for student authors and tutors",
    longDescription:
      "A custom blog platform designed for students to showcase their academic writing and creative work. Features author profiles, post categorization, and a clean, reader-friendly interface for educational content.",
    technologies: ["Next.js", "Sanity CMS", "TailwindCSS", "Vercel", "TypeScript"],
    category: "Blog",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/literaryserve.png",
    githubUrl: "https://github.com/elijahondiek/literaryserve",
    liveUrl: "https://literaryserve.vercel.app/",
    challenges: ["Content management for multiple authors", "Academic content presentation", "User-friendly author interfaces"],
    solutions: ["Headless CMS integration", "Custom author profiles", "Responsive design for all devices"],
    features: ["Author profiles", "Categorized content", "About page", "Clean reading experience", "Mobile-optimized layout"],
    dateCompleted: "2023-12-10",
    primaryTech: "Next.js",
    primaryTechIcon: <Code />,
  },
  {
    id: 16,
    title: "Fitspire",
    tagline: "Modern fitness center website with interactive features and BMI calculator",
    description: "Modern fitness center website with interactive features and BMI calculator",
    longDescription:
      "A comprehensive website for a fitness community featuring professional trainers, modern equipment, and gym facilities. Includes interactive elements like a BMI calculator, class schedules, team profiles, and gallery.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    category: "Corporate",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/fitspire.png",
    liveUrl: "https://fitspire.vercel.app/",
    githubUrl: "https://github.com/elijahondiek/fitspire",
    challenges: ["Interactive feature implementation", "Responsive design for fitness content", "Visual appeal for fitness audience"],
    solutions: ["Custom React components", "Mobile-first design approach", "Engaging animations and transitions"],
    features: ["BMI calculator", "Class schedules", "Team profiles", "Gallery", "Pricing plans", "Contact form"],
    dateCompleted: "2024-01-05",
    primaryTech: "React",
    primaryTechIcon: <Layout />,
  },

  {
    id: 18,
    title: "AWS Serverless Expense Tracker",
    tagline: "Cloud-native expense tracking with Lambda functions and DynamoDB",
    description: "Cloud-native expense tracking with Lambda functions, API Gateway, and DynamoDB",
    longDescription:
      "A serverless expense tracking application that leverages AWS services for scalability and cost-effectiveness. Features automated categorization and spending analytics.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "React"],
    category: "Cloud",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/Message-Driven E-commerce Architecture.png",
    githubUrl: "https://github.com/elijahondiek/AWS-Serverless-API",
    liveUrl: "https://github.com/elijahondiek/AWS-Serverless-API",
    challenges: ["Cold start optimization", "Cost management", "Data consistency"],
    solutions: ["Connection pooling", "Reserved concurrency", "DynamoDB transactions"],
    features: ["Automated categorization", "Spending analytics", "Receipt scanning", "Budget alerts"],
    dateCompleted: "2023-11-30",
    metrics: ["99.9% uptime", "0.2s average response time", "$0.15 daily operating cost"],
    primaryTech: "AWS",
    primaryTechIcon: <Server />,
  },

 

  {
    id: 22,
    title: "Threaded Replies App",
    tagline: "Python Flask application with nested comment system",
    description: "Python Flask application with MySQL, SQLAlchemy ORM, and nested comment system",
    longDescription:
      "A discussion platform featuring nested comment threads, user moderation tools, and real-time updates for engaging community conversations.",
    technologies: ["Python", "Flask", "MySQL", "SQLAlchemy", "Bootstrap"],
    category: "Web App",
    difficulty: "Intermediate",
    status: "Creation",
    image: "/projects/Nested Comments Engine.png",
    githubUrl: "hhttps://github.com/elijahondiek/Dynamic-Nested-Reply-Platform",
    challenges: ["Nested comment structure", "Performance optimization", "Real-time updates"],
    solutions: ["Recursive query optimization", "Database indexing", "WebSocket implementation"],
    features: ["Nested comments", "User moderation", "Real-time updates", "Vote system"],
    dateCompleted: "2023-06-12",
    metrics: ["10,000+ comments stored", "5-level deep nesting support", "50ms average page load"],
    primaryTech: "Flask",
    primaryTechIcon: <Server />,
  },


]

const categories = [
  "All",
  "E-commerce",
  "API",
  "Cloud",
  "AI/Bot",
  "Web App",
  "Blog",
  "Corporate",
  "Marketing",
  "Fintech",
]

export default function ProjectsSidebar() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
        const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject?.id)

        if (e.key === "ArrowUp" && currentIndex > 0) {
          handleProjectSelect(filteredProjects[currentIndex - 1])
        } else if (e.key === "ArrowDown" && currentIndex < filteredProjects.length - 1) {
          handleProjectSelect(filteredProjects[currentIndex + 1])
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredProjects, selectedProject, isMounted])

  useEffect(() => {
    if (!isMounted) return;

    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }, [selectedProject, isMounted])
  
  // Filter projects based on active category and search query
  useEffect(() => {
    if (!isMounted) return;
    
    let filtered = [...projects];
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
    
    // If the currently selected project is not in the filtered list,
    // select the first project in the filtered list
    if (filtered.length > 0 && !filtered.some(p => p.id === selectedProject?.id)) {
      setSelectedProject(filtered[0]);
    }
  }, [activeCategory, searchQuery, selectedProject?.id, isMounted])

  const moveX = mousePosition.x * 10 - 5
  const moveY = mousePosition.y * 10 - 5

  const handleProjectSelect = (project: Project) => {
    setIsLoading(true)
    setSelectedProject(project)
    setIsMobileSidebarOpen(false)

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, "", `#projects-${project.id}`)
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "#00ff88"
      case "In Development":
        return "#ffd700"
      case "Creation":
        return "#00d4ff"
      default:
        return "#00d4ff"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "#00ff88"
      case "Intermediate":
        return "#00d4ff"
      case "Advanced":
        return "#ff6b6b"
      default:
        return "#00d4ff"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "E-commerce":
        return "#00d4ff"
      case "API":
        return "#00ff88"
      case "Cloud":
        return "#ffd700"
      case "AI/Bot":
        return "#ff6b6b"
      case "Web App":
        return "#9c5fff"
      case "Blog":
        return "#00d4ff"
      case "Corporate":
        return "#00ff88"
      case "Marketing":
        return "#ffd700"
      case "Fintech":
        return "#ff6b6b"
      default:
        return "#00d4ff"
    }
  }

  const shareProject = (project: Project) => {
    if (typeof window === 'undefined') {
      alert("Sharing features are not available during server rendering.");
      return;
    }
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveUrl || window.location.href,
      })
    } else {
      navigator.clipboard.writeText(project.liveUrl || window.location.href)
    }
  }

  const getRelatedProjects = () => {
    const relatedProjects = projects
      .filter(
        (project) =>
          project.id !== selectedProject?.id &&
          project.technologies.some((tech) => selectedProject?.technologies.includes(tech)),
      )
      .slice(0, 3)
    return relatedProjects
  }

  return (
    <section id="projects" className="min-h-screen py-24  relative" ref={containerRef}>
      <div
        className="absolute pointer-events-none w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
          left: `calc(${mousePosition.x * 100}% - 20vw)`,
          top: `calc(${mousePosition.y * 100}% - 20vw)`,
          transition: "all 0.3s ease",
        }}
      />

      <div className="container w-full">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "var(--accent-primary)",
              transform: `translate(${moveX * -0.3}px, ${moveY * -0.3}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-[#b4bcd0] text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving
          </p>
        </div>

        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="w-full glass-card p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <Menu className="w-5 h-5 mr-2 text-[#00d4ff]" />
              <span>{selectedProject?.title}</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row gap-6 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div
            className={cn(
              "md:w-[30%] glass-card p-4 md:max-h-[800px] overflow-hidden flex flex-col",
              isMobileSidebarOpen ? "block" : "hidden md:flex",
            )}
          >
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b4bcd0] w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 glass-card text-white placeholder-[#b4bcd0] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 text-sm"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Filter className="w-4 h-4 mr-2" style={{ color: 'var(--accent-primary)' }} />
                <h4 className="text-sm font-medium">Filter by Category</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      activeCategory === category ? "text-[#0a0f1c]" : "glass-card"
                    }`}
                    style={
                      activeCategory === category
                      ? { backgroundColor: "var(--accent-primary)", color: "#0a0f1c" }
                      : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.slice(5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      activeCategory === category ? "text-[#ffff]" : "glass-card"
                    }`}
                    style={
                      activeCategory === category
                        ? { backgroundColor: "var(--accent-primary)", color: "#ffff" }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h4 className="text-sm font-medium mb-2 text-[#b4bcd0]">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""}
              </h4>
              <div className="space-y-2">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-3 rounded-lg  ${
                      selectedProject?.id === project.id
                        ? " border-l-4 border-[#00d4ff]"
                        : "glass-card"
                    }`}
                    style={{ transform: "none" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{
                            backgroundColor: `${getCategoryColor(project.category)}15`,
                            color: getCategoryColor(project.category),
                          }}
                        >
                          {project.primaryTechIcon}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{project.title}</h3>
                          <p className="text-[#b4bcd0] text-xs truncate max-w-[180px]">{project.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="text-center py-8 glass-card">
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-[#b4bcd0]">No projects found</p>
                    <button
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory("All")
                      }}
                      className="mt-2 text-[#00d4ff] text-sm"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#b4bcd0] flex items-center justify-center">
              <span className="glass-card px-2 py-1 rounded mr-2">↑</span>
              <span className="glass-card px-2 py-1 rounded mr-2">↓</span>
              <span>to navigate projects</span>
            </div>
          </div>

          <div className="md:w-[70%] glass-card p-6 md:max-h-[800px] overflow-hidden relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-t-[#00d4ff] border-r-[#00d4ff] border-b-[#00ff88] border-l-[#00ff88] rounded-full animate-spin"></div>
              </div>
            )}

            <div ref={contentRef} className="h-full overflow-y-auto pr-2 custom-scrollbar">
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject?.title}</h2>
                    <p className="text-[#b4bcd0] text-lg">{selectedProject?.tagline}</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: getStatusColor(selectedProject?.status),
                        color: "#0a0f1c",
                      }}
                    >
                      {selectedProject?.status}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: getDifficultyColor(selectedProject?.difficulty),
                        color: "#0a0f1c",
                      }}
                    >
                      {selectedProject?.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-lg"
                      style={{
                        backgroundColor: "var(--accent-primary)",
                      }}
                    >
                      <span className="text-white">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject?.githubUrl && (
                    <a
                      href={selectedProject?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject?.liveUrl && (
                    <a
                      href={selectedProject?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: "var(--accent-primary)",
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-white">Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => shareProject(selectedProject)}
                    className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Overview
                  </h3>
                  <p className="text-[#b4bcd0] leading-relaxed">{selectedProject?.longDescription}</p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedProject?.image || "/placeholder.svg"}
                    alt={selectedProject?.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject?.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 glass-card p-3 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#00ff88] flex-shrink-0 mt-1.5"></div>
                        <span className="text-[#b4bcd0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {selectedProject?.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-[#ff6b6b] flex-shrink-0 mt-1.5"></div>
                          <span className="text-[#b4bcd0]">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {selectedProject?.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-[#00d4ff] flex-shrink-0 mt-1.5"></div>
                          <span className="text-[#b4bcd0]">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-sm text-[#b4bcd0] flex items-center">
                  <Calendar className="w-4 h-4 mr-1 opacity-60" />
                  <span className="opacity-60">Completed: {new Date(selectedProject?.dateCompleted).toLocaleDateString()}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {getRelatedProjects().map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleProjectSelect(project)}
                        className="glass-card p-4 rounded-lg text-left transition-all duration-300 w-full"
                        aria-label={`View details for ${project.title}`}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: getCategoryColor(project.category),
                              color: "#0a0f1c",
                            }}
                          >
                            {project.primaryTechIcon}
                          </div>
                          <h4 className="font-medium text-sm">{project.title}</h4>
                        </div>
                        <p className="text-[#b4bcd0] text-xs line-clamp-2">{project.tagline}</p>
                        <div className="flex items-center mt-2 text-[#00d4ff] text-xs">
                          <span>View details</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </button>
                    ))}
                    {getRelatedProjects().length === 0 && (
                      <div className="col-span-3 glass-card p-6 text-center">
                        <p className="text-[#b4bcd0]">No related projects found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
