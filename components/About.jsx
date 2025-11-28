"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-purple-400">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-slate-200">B.E. Electronics & Communication</p>
                <p className="text-slate-400">Dr. Ambedkar Institute of Technology</p>
                <p className="text-slate-500">Bengaluru, Karnataka</p>
              </div>
            </motion.div>

            {/* Brief Overview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-pink-400">Overview</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I’m Abhisek Patra — a passionate developer with a strong foundation in software engineering, web development, and DevOps. I come from an Electronics & Communication Engineering background, but my curiosity for building digital products pushed me into the world of coding. Over the past months, I’ve worked on real projects across React, Next.js, Node.js, PostgreSQL, and cloud technologies like AWS.

I love solving problems, creating clean UI/UX experiences, optimizing performance, and building products that people actually want to use. I’ve also gained hands-on experience with version control, API development, debugging, and deploying applications.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="border-l-2 border-purple-500 pl-6 space-y-2">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white">DevOps Intern</h4>
                    <p className="text-purple-400">Tech Solutions Pvt. Ltd.</p>
                  </div>
                  <span className="text-sm text-slate-400">6 months</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Automated CI/CD pipelines using Jenkins and Docker</li>
                  <li>Managed Kubernetes clusters and container orchestration</li>
                  <li>Improved deployment efficiency by 40%</li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="border-l-2 border-pink-500 pl-6 space-y-2">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Full Stack Developer Intern</h4>
                    <p className="text-pink-400">Digital Innovations Inc.</p>
                  </div>
                  <span className="text-sm text-slate-400">6 months</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Built RESTful APIs with Node.js and Express</li>
                  <li>Developed responsive web applications using React</li>
                  <li>Integrated MongoDB for data management</li>
                </ul>
              </div>

              {/* Experience Item 3 */}
              <div className="border-l-2 border-purple-500 pl-6 space-y-2">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Backend Developer Intern</h4>
                    <p className="text-purple-400">CloudTech Systems</p>
                  </div>
                  <span className="text-sm text-slate-400">4 months</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Deployed applications on AWS EC2 and S3</li>
                  <li>Implemented authentication systems with JWT</li>
                  <li>Optimized database queries and API performance</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
