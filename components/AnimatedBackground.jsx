"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    let time = 0

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const gradients = [
      { x: 0.2, y: 0.3, speed: 0.0003, color: "rgba(168, 85, 247, 0.4)" }, // purple
      { x: 0.7, y: 0.6, speed: 0.0004, color: "rgba(236, 72, 153, 0.4)" }, // pink
      { x: 0.5, y: 0.8, speed: 0.00025, color: "rgba(147, 51, 234, 0.35)" }, // purple
    ]

    const animate = () => {
      time += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      gradients.forEach((grad, index) => {
        const x = canvas.width * (grad.x + Math.sin(time * grad.speed + index) * 0.15)
        const y = canvas.height * (grad.y + Math.cos(time * grad.speed + index * 1.5) * 0.15)
        const size = Math.min(canvas.width, canvas.height) * 0.6

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
        gradient.addColorStop(0, grad.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ filter: "blur(80px)" }} />
}
