import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const scrollRef = useRef(null)
    const blobsRef = useRef([])
    const textWrapperRef = useRef(null)

    useEffect(() => {
        // Entrance Animations
        const tl = gsap.timeline({ delay: 0.5 })

        // Animate container to ensure it's visible
        gsap.to(containerRef.current, { opacity: 1, duration: 0.5 })

        // Animate Base Content
        tl.fromTo(containerRef.current.querySelectorAll('.hero-content-base'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out' }
        )
            // Animate Reveal Content (sync with base)
            .fromTo(containerRef.current.querySelectorAll('.hero-content-reveal'),
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out' },
                '<'
            )
            .fromTo(scrollRef.current,
                { y: -10, opacity: 0 },
                { y: 0, opacity: 0.6, duration: 0.6, ease: 'power2.out' },
                '-=0.5'
            )

        // Text reveal mask animation
        const handleMouseMove = (e) => {
            if (!textWrapperRef.current) return

            const rect = textWrapperRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            gsap.to(blobsRef.current, {
                x: x,
                y: y,
                duration: 1.2,
                stagger: 0.05,
                ease: 'power2.out'
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const scrollToProjects = () => {
        const projectsSection = document.querySelector('.projects-section')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Helper to render content for both Base and Reveal layers
    const renderHeroContent = (isReveal) => (
        <div className={`hero-content-${isReveal ? 'reveal' : 'base'}`} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}>
            <h1
                style={{
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    lineHeight: '1',
                    fontWeight: 800,
                    maxWidth: '1400px',
                    margin: '0 auto',
                    textAlign: 'center',
                    // Base: Solid Grey, Reveal: Solid White
                    color: isReveal ? '#ffffff' : '#999999',
                    WebkitTextStroke: 'none',
                    textShadow: isReveal ? '0 0 20px rgba(255,255,255,0.5)' : 'none',
                    opacity: 1,
                    userSelect: 'none'
                }}
            >
                Full-Stack Developer
                <br />
                AI Enthusiast
                <br />
                Problem Solver
            </h1>

            <p
                style={{
                    marginTop: '3rem',
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    maxWidth: '700px',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    // Base: Dim Grey, Reveal: Bright White
                    color: isReveal ? '#ffffff' : '#444',
                    fontWeight: isReveal ? 500 : 400,
                    textShadow: isReveal ? '0 0 10px rgba(255,255,255,0.3)' : 'none',
                    opacity: 1
                }}
            >
                Full-Stack Engineer with a foundation in algorithmic rigor.
                <br />
                Currently bridging the gap between scalable web architecture and predictive AI to build systems that don’t just work..
                <br />
                they think.
            </p>


            <button
                onClick={!isReveal ? scrollToProjects : undefined}
                className={!isReveal ? "glass" : ""}
                style={{
                    marginTop: '3rem',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    // Base: Dim Glass, Reveal: Bright White/Glass
                    border: isReveal ? '1px solid rgba(255,255,255,0.8)' : '1px solid rgba(255,255,255,0.1)',
                    background: isReveal ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
                    color: isReveal ? '#ffffff' : 'rgba(255,255,255,0.3)',
                    boxShadow: isReveal ? '0 0 15px rgba(255,255,255,0.2)' : 'none',
                    pointerEvents: isReveal ? 'none' : 'auto'
                }}
            >
                View My Work
            </button>
        </div>
    )

    return (
        <section
            ref={containerRef}
            className="hero-section"
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 5%',
                overflow: 'hidden',
                background: 'transparent',
                opacity: 1
            }}
        >
            {/* SVG Mask Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo" />
                    </filter>
                    <mask id="fluid-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="black" />
                        <g filter="url(#goo)">
                            {/* Multiple circles for the trail */}
                            {[...Array(6)].map((_, i) => (
                                <circle
                                    key={i}
                                    ref={el => blobsRef.current[i] = el}
                                    cx="0"
                                    cy="0"
                                    r={80 - (i * 10)}
                                    fill="white"
                                />
                            ))}
                        </g>
                    </mask>
                </defs>
            </svg>

            {/* Overlapping Content Container */}
            <div
                ref={textWrapperRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    display: 'grid',
                    placeItems: 'center'
                }}
            >
                {/* Layer 1: Base Content */}
                <div style={{ gridArea: '1 / 1', zIndex: 10, width: '100%' }}>
                    {renderHeroContent(false)}
                </div>

                {/* Layer 2: Reveal Content - Masked */}
                <div style={{
                    gridArea: '1 / 1',
                    zIndex: 20,
                    width: '100%',
                    mask: 'url(#fluid-mask)',
                    WebkitMask: 'url(#fluid-mask)',
                    pointerEvents: 'none'
                }}>
                    {renderHeroContent(true)}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    opacity: 0,
                    zIndex: 10
                }}
                onClick={scrollToProjects}
            >
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.1em', color: '#666' }}>
                    SCROLL
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </section>
    )
}
