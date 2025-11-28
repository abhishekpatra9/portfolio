"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
      {
        title: "Nexaflow Landing Page",
        description:
          "Modern SaaS landing page showcasing AI-powered analytics platform built with Next.js featuring fully responsive design optimized for all devices, smooth hover animations, gradient text effects, and glassmorphism styling. Comprehensive sections include hero with dual CTA buttons, interactive features grid displaying six key capabilities, customer testimonials with avatars, three-tier pricing plans with popular badge highlight, and multi-column footer with navigation.",
        tags: ["Next.js","Tailwind CSS","React.js"],
        gradient: "from-purple-400 to-pink-500",
        demoLink: "https://nexaflow-landing-page.netlify.app/",
        githubLink: "https://github.com/abhishekpatra9/Nexaflow-Landing-Page",
        image: "/saas.png",
     
      },
    {
      title: "MineSweeper Game",
      description:
        "This project is a classic Minesweeper game recreated with modern JavaScript, combining clean UI design with smooth and intuitive gameplay. It features multiple difficulty levels, allowing players to choose between beginner, intermediate, or expert modes. The interface is fully responsive. Core mechanics, such as mine detection, flagging, timer functionality, and automatic cell revealing, are implemented to closely match the original game while improving usability.",
      tags: ["JavaScript", "HTML5", "CSS3", "Game Development"],
      gradient: "from-purple-500 to-purple-700",
      demoLink: "https://your-demo-link.com/minesweeper",
      githubLink: "https://github.com/yourusername/minesweeper",
      image: "/mineswipper.jpg",
    },
    {
      title: "SecureAuth",
      description:
        "Robust authentication system built with Node.js featuring JWT token management, OAuth integration, secure password hashing, and comprehensive user session management.",
      tags: ["Node.js", "Express", "JWT", "OAuth", "MongoDB"],
      gradient: "from-pink-500 to-pink-700",
      demoLink: "https://your-demo-link.com/secureauth",
      githubLink: "https://github.com/abhishekpatra9/auth-system",
      image: "/auth.png",
    },
    {
      title: "Project 4",
      description: "Another slot for your upcoming project. Click edit to add your own project details and live links.",
      tags: ["Coming Soon"],
      gradient: "from-pink-400 to-purple-500",
      demoLink: "",
      githubLink: "",
      image: "/coming_soon.jpg",
      isPlaceholder: true,
    },
  ]

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2)

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors pl-12"
              />
              <svg
                className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group ${
                  project.isPlaceholder ? "opacity-60" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg font-semibold text-sm`}
                  >
                    {project.isPlaceholder ? "Coming Soon" : "Project"}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.isPlaceholder && (
                    <div className="flex items-center gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 border border-slate-700 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                          aria-label="View on GitHub"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show no results message */}
          {filteredProjects.length === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-slate-400 text-lg">
              No projects found matching your search.
            </motion.p>
          )}

          {projects.length > 2 && filteredProjects.length > 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-slate-800/50 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
              >
                {showAll ? "Show Less" : "Show More Projects"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
