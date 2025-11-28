"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming & Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "React.js", "Next.js", "TailwindCSS", "Redux"],
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Cloud & Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "SQL", "Redis", "FastAPI", "AWS"],
      gradient: "from-pink-500 to-pink-700",
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Jenkins", "Kubernetes", "CI/CD", "Linux", "Nginx"],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "n8n", "Prisma", "Mongoose", "Postman", "VS Code", "Drizzle"],
      gradient: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-lg mb-6 font-semibold`}
                >
                  {category.title}
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <motion.li key={skill} whileHover={{ x: 5 }} className="text-slate-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
