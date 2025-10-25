"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  Phone,
  Clock,
  Download,
  ExternalLink,
  Copy,
  CheckCircle,
  Globe,
  Briefcase,
  Users,
  Coffee,
  Zap,
  Heart,
  DollarSign,
} from "lucide-react";
import GradientMagicButton from "./gradient-magic-button";

interface ContactMethod {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  action: () => void;
  copyable?: boolean;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [availabilityStatus, setAvailabilityStatus] = useState<
    "available" | "busy" | "away"
  >("available");
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setMousePosition({ x, y });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nairobiTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setCurrentTime(nairobiTime);

      // Update availability based on time
      const hour = Number.parseInt(nairobiTime.split(":")[0]);
      if (hour >= 9 && hour < 17) {
        setAvailabilityStatus("available");
      } else if (hour >= 17 && hour < 22) {
        setAvailabilityStatus("busy");
      } else {
        setAvailabilityStatus("away");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const moveX = mousePosition.x * 10 - 5;
  const moveY = mousePosition.y * 10 - 5;

  const copyToClipboard = async (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedItem(id);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    } else {
      console.warn("Clipboard API not available.");
      // Optionally, provide a fallback or inform the user
    }
  };

  const contactMethods: ContactMethod[] = [
    {
      id: "email",
      label: "Email",
      value: "eochieng9448@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      action: () => copyToClipboard("eochieng9448@gmail.com", "email"),
      copyable: true,
    },
    {
      id: "phone",
      label: "Phone",
      value: "+254 7** *** **7",
      icon: <Phone className="w-5 h-5" />,
      action: () => {
        if (typeof window !== "undefined") {
          if (window.innerWidth <= 768) {
            window.location.href = "tel:+254768144877";
          } else {
            copyToClipboard("+254 7** *** **7", "phone");
          }
        } else {
          copyToClipboard("+254 7** *** **7", "phone");
        }
      },
      copyable: true,
    },
    {
      id: "location",
      label: "Location",
      value: "Nairobi, Kenya 🇰🇪",
      icon: <MapPin className="w-5 h-5" />,
      action: () => copyToClipboard("Nairobi, Kenya", "location"),
      copyable: true,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href:
        process.env.NEXT_PUBLIC_LINKEDIN_URL ||
        "https://www.linkedin.com/in/ondiek-elijah/",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Professional network",
      followers: "2106+ connections",
    },
    {
      name: "GitHub",
      href:
        process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/elijahondiek",
      icon: <Github className="w-6 h-6" />,
      description: "Code repositories",
      followers: "116+ repositories",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "#00ff88";
      case "busy":
        return "#ffd700";
      case "away":
        return "#ff6b6b";
      default:
        return "#00d4ff";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Available";
      case "busy":
        return "Busy";
      case "away":
        return "Away";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 relative"
      ref={containerRef}
    >
      {/* Subtle spotlight effect */}
      <div
        className="absolute pointer-events-none w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
          left: `calc(${mousePosition.x * 100}% - 20vw)`,
          top: `calc(${mousePosition.y * 100}% - 20vw)`,
          transition: "all 0.3s ease",
        }}
      />

      <div className="container mx-auto w-full sm:max-w-6xl px-2 sm:px-6">
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
            Let's Connect
          </h2>
          <p className="text-[#b4bcd0] text-lg max-w-2xl mx-auto mb-8">
            Ready to collaborate on your next project? Let's build something
            amazing together.
          </p>

          {/* Live Status Indicator */}
          <div className="flex items-center justify-center space-x-3 glass-card px-6 py-3 rounded-full inline-flex">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: getStatusColor(availabilityStatus) }}
            />
            <span className="text-sm font-medium">
              {getStatusText(availabilityStatus)}
            </span>
            <span className="text-[#b4bcd0] text-sm">•</span>
            <Clock
              className="w-4 h-4"
              style={{ color: "var(--accent-primary)" }}
            />
            <span className="text-sm font-mono">{currentTime} EAT</span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Direct Communication Card */}
          <div
            className={`lg:col-span-2 glass-card p-8 transform transition-all duration-1000 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: "0.2s",
              transform: `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`,
            }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Mail
                className="w-6 h-6 mr-3"
                style={{ color: "var(--accent-primary)" }}
              />
              Direct Communication
            </h3>

            <div className="space-y-4 w-full max-w-full overflow-x-hidden">
              {contactMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 glass-card rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 w-full"
                  onClick={method.action}
                  style={{ transform: "none" }}
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="text-[#00d4ff] flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{method.label}</p>
                      <p className="text-[#b4bcd0] text-sm truncate">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#b4bcd0] ml-3 flex-shrink-0">
                    {copiedItem === method.id ? (
                      <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Networks Card */}
          <div
            className={`glass-card p-8 transform transition-all duration-1000 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: "0.4s",
              transform: `translate(${moveX * -0.1}px, ${moveY * -0.1}px)`,
            }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Globe
                className="w-5 h-5 mr-2"
                style={{ color: "var(--accent-primary)" }}
              />
              Networks
            </h3>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 glass-card rounded-lg hover:scale-105 transition-all duration-300 hover:text-[#00d4ff]"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </div>
                  <p className="text-[#b4bcd0] text-xs">{link.description}</p>
                  <p className="text-[#00d4ff] text-xs">{link.followers}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Professional Status Card */}
          <div
            className={`glass-card p-8 transform transition-all duration-1000 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: "0.6s",
              transform: `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`,
            }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Briefcase
                className="w-5 h-5 mr-2"
                style={{ color: "var(--accent-primary)" }}
              />
              Status
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-[#b4bcd0] text-sm">Current Role</p>
                <p className="font-medium">Full-Stack Software Engineer</p>
                <p className="text-[#00d4ff] text-sm">@ Safaricom PLC</p>
              </div>

              <div>
                <p className="text-[#b4bcd0] text-sm">Availability</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  <p className="font-medium text-[#00ff88]">
                    Open to opportunities
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#b4bcd0] text-sm">Response Time</p>
                <p className="font-medium">Usually within 24 hours</p>
              </div>

              <div>
                <p className="text-[#b4bcd0] text-sm">Time Zone</p>
                <p className="font-medium">East Africa Time (EAT)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resources Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-6">
          {/* Buy Me a Coffee Card */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Floating Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl animate-float"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                    boxShadow: "0 8px 32px rgba(0, 212, 255, 0.4)",
                  }}
                >
                  <Coffee className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="glass-card pt-16 pb-8 px-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <h4 className="font-bold mb-4 text-2xl text-[var(--text-primary)] text-center">
                  Buy Me a Coffee
                </h4>
                <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed text-center">
                Thank you for validating my need to make things that probably didn’t need making.


                </p>

                {/* Strong CTA */}
                <div className="space-y-3 flex flex-col items-center">
                  <GradientMagicButton
                    href={
                      process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL ??
                      "https://buymeacoffee.com/teksad"
                    }
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 w-full md:w-4/5 text-lg shadow-lg hover:shadow-xl text-white [&_*]:!text-white"
                    accentColor="primary"
                  >
                    <DollarSign className="w-6 h-6" />
                    <span>Caffeinate</span>
                  </GradientMagicButton>
                  <p className="text-xs text-[var(--text-secondary)] text-center">
                    ☕ Coffee goes in, code comes out
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Viber Coder Tips Handbook Card */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="relative">
              {/* Floating Icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl animate-float"
                  style={{
                    background: "linear-gradient(135deg, #00ff88, #00cc66)",
                    boxShadow: "0 8px 32px rgba(0, 255, 136, 0.4)",
                    animationDelay: "0.5s",
                  }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="glass-card pt-16 pb-8 px-8 rounded-2xl hover:scale-[1.02] transition-all duration-500 h-full">
                <h4 className="font-bold mb-4 text-2xl text-[var(--text-primary)] text-center">
                  Viber Coder Tips
                </h4>
                <p className="text-[var(--text-secondary)] text-base mb-8 leading-relaxed text-center">
                  Master the art of shipping real apps with AI. Get practical
                  insights and proven strategies.
                </p>

                {/* Strong CTA */}
                <div className="space-y-3 flex flex-col items-center">
                  <GradientMagicButton
                    href="https://eochieng.gumroad.com/l/awhmp"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 w-full md:w-4/5 text-lg shadow-lg hover:shadow-xl text-white [&_*]:!text-white"
                    accentColor="secondary"
                  >
                    <Zap className="w-6 h-6" />
                    <span>Level Up Now</span>
                  </GradientMagicButton>
                  <p className="text-xs text-[var(--text-secondary)] text-center">
                    🚀 Transform your coding workflow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            transitionDelay: "1s",
          }}
        >
          <div className="glass-card p-12 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-float"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#00d4ff" : "#00ff88",
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 10 + 5}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Something Great?
              </h3>
              <p className="text-[#b4bcd0] text-lg mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, need technical consultation,
                or just want to connect, I'm here to help bring your ideas to
                life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientMagicButton
                  href={`mailto:${
                    process.env.NEXT_PUBLIC_EMAIL || "eochieng9448@gmail.com"
                  }`}
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white [&_*]:!text-white"
                  accentColor="primary"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </GradientMagicButton>

                <a
                  href={
                    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                    "https://www.linkedin.com/in/ondiek-elijah/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 glass-card px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:text-[#00d4ff]"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
