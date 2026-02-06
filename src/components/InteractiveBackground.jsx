import React, { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight
        let particles = []
        let animationFrameId

        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0

        // Configuration
        const particleCount = 400 // More stars for the warp effect
        const speed = 2 // Speed of "travel"
        const depth = 2000 // Z-depth of the field
        const fov = 150 // Field of view

        const handleMouseMove = (e) => {
            // Calculate mouse offset from center
            const cx = window.innerWidth / 2
            const cy = window.innerHeight / 2
            mouseX = (e.clientX - cx) * 0.1 // Sensitivity
            mouseY = (e.clientY - cy) * 0.1
        }

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
            initParticles()
        }

        class Star {
            constructor() {
                // Initialize in a wider range to fill corners when projected
                this.x = (Math.random() - 0.5) * width * 2
                this.y = (Math.random() - 0.5) * height * 2
                this.z = Math.random() * depth
                this.pz = this.z // Previous Z for trail (optional, but good for speed feel)
            }

            update() {
                // Move star closer (decrease Z)
                this.z -= speed

                // Reset if it passes the camera (Z <= 0)
                if (this.z <= 1) {
                    this.z = depth
                    this.x = (Math.random() - 0.5) * width * 2
                    this.y = (Math.random() - 0.5) * height * 2
                    this.pz = this.z
                }
            }

            draw() {
                // Perspective projection
                // scale = fov / (fov + z) or simply fov / z depending on coordinate system
                // Standard 3D projection: x2d = x * (fov / z)

                const scale = fov / this.z

                // Apply mouse parallax to the "vanishing point" (center)
                // We shift the center based on mouse, giving the feeling of looking around
                targetX += (mouseX - targetX) * 0.05
                targetY += (mouseY - targetY) * 0.05

                const cx = width / 2 + targetX
                const cy = height / 2 + targetY

                const sx = cx + this.x * scale
                const sy = cy + this.y * scale

                // Size scales with proximity
                const r = Math.max(0.1, 1.5 * scale) // Min size 0.1

                // Alpha fades out at distance
                const alpha = Math.min(1, (1 - this.z / depth) + 0.2)

                ctx.beginPath()
                ctx.arc(sx, sy, r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Star())
            }
        }

        const loop = () => {
            // Create trails or clear screen
            // "Travel" feel often benefits from slight trails, but user asked for "new forming" 
            // clearRect is cleaner for "stars", fillRect with low opacity for "trails"
            // Let's stick to clean cinematic look first.
            ctx.clearRect(0, 0, width, height)

            particles.forEach(p => {
                p.update()
                p.draw()
            })

            animationFrameId = requestAnimationFrame(loop)
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        resize()
        loop()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
                background: '#050505' // Deep dark background
            }}
        />
    )
}
