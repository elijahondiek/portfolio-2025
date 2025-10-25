import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import CursorSpotlight from "@/components/cursor-spotlight"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Base URL for your site - use relative URLs for local development
const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction 
  ? 'https://elijah-ondiek.com' 
  : ''; // Use relative URLs in development

  export const metadata: Metadata = {
    title: {
      default: "Elijah Ondiek | Full-Stack Software Engineer",
      template: "%s | Elijah Ondiek"
    },
    description: "Explore the work of Elijah Ondiek, a Full-Stack Software Engineer at Safaricom (via Andela) specializing in enterprise fintech solutions. Building scalable applications with React, TypeScript, Next.js, Java, Spring Boot, and Python that enable billions in business value.",
    
    keywords: [
      "Elijah Ondiek",
      "Full-Stack Software Engineer",
      "Software Engineer",
      "Web Engineer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Java Developer",
      "Spring Boot Developer",
      "Python Developer",
      "Node.js Developer",
      "PostgreSQL",
      "AWS Developer",
      "Fintech Solutions",
      "Enterprise Applications",
      "Tailwind CSS",
      "Web Performance Optimization",
      "Open Source Contributor",
      "Modern Software Development",
      "Web Applications",
      "Clean Code Architecture",
      "Digital Solutions",
      "Kenya Software Engineer",
      "Safaricom",
      "Andela",
      "East Africa Developer",
      "Scalable Web Apps"
    ],
    
    authors: [{ name: "Elijah Ondiek", url: baseUrl }],
    creator: "Elijah Ondiek",
    publisher: "Elijah Ondiek",
    generator: 'Next.js',
    applicationName: "Elijah Ondiek - Full-Stack Software Engineer",
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: baseUrl ? new URL(baseUrl) : new URL('http://localhost:3000'),
    alternates: {
      canonical: baseUrl,
    },
    
    // OpenGraph metadata
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title: "Elijah Ondiek | Full-Stack Software Engineer",
      description: "Discover Elijah Ondiek, a Full-Stack Software Engineer at Safaricom (via Andela) building enterprise fintech solutions that enable KES 6.6B+ in business value.",
      siteName: "Elijah Ondiek - Full-Stack Software Engineer",
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: "Elijah Ondiek - Professional Software Engineer",  
          type: 'image/jpeg',
        },
        {
          url: '/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: "Elijah Ondiek - Software & Web Engineer",
          type: 'image/jpeg',
        }
      ],
    },
  
  };
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Comprehensive Favicon Configuration */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Elijah Ondiek",
              "jobTitle": "Full-Stack Software Engineer",
              "description": "Full-Stack Software Engineer at Safaricom (via Andela) specializing in enterprise fintech solutions",
              "url": baseUrl,
              "sameAs": [
                process.env.NEXT_PUBLIC_GITHUB_URL,
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
              ].filter(Boolean),
              "email": process.env.NEXT_PUBLIC_EMAIL,
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Java",
                "Spring Boot",
                "Python",
                "PostgreSQL",
                "AWS",
                "Web Development",
                "Software Engineering"
              ],
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}