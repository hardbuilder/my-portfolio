import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
    const navRef = useRef(null)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false)
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial Entry
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 2 }
        )

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (selector) => {
        const element = document.querySelector(selector)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <nav
            ref={navRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 2rem', // Tighter padding
                zIndex: 100,
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                mixBlendMode: 'difference',
                color: '#fff'
            }}
        >
            {/* Logo Left - Closer to bar edge due to padding change */}
            <div className="nav-left">
                <MagneticButton onClick={scrollToTop}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                        OT.
                    </span>
                </MagneticButton>
            </div>

            {/* Right Section: Links + Socials */}
            <div className="nav-right" style={{ display: 'flex', alignItems: 'center' }}>

                {/* Navigation Links */}
                <div style={{ display: 'flex', gap: '2rem', marginRight: '3rem' }}>
                    <MagneticButton onClick={() => scrollToSection('.projects-section')}>
                        WORK
                    </MagneticButton>
                    <MagneticButton onClick={() => scrollToSection('.whatido-section')}>
                        ABOUT
                    </MagneticButton>
                    <MagneticButton onClick={() => scrollToSection('.timeline-section')}>
                        TIMELINE
                    </MagneticButton>
                </div>

                {/* Social Icons Separator (Optional, or just space) */}
                <div style={{ width: '1px', height: '20px', background: '#fff', opacity: 0.3, marginRight: '2rem' }}></div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {/* GitHub */}
                    <MagneticButton isIcon onClick={() => window.open('https://github.com/hardbuilder', '_blank')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </MagneticButton>

                    {/* LinkedIn */}
                    <MagneticButton isIcon onClick={() => window.open('https://linkedin.com/in/omtakale', '_blank')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </MagneticButton>

                    {/* LeetCode (Simple Code bracket icon representation as placeholder or specific SVG) */}
                    <MagneticButton isIcon onClick={() => window.open('https://leetcode.com/u/omrtakale/', '_blank')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </MagneticButton>
                </div>

            </div>
        </nav>
    )
}

function MagneticButton({ children, onClick }) {
    const btnRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const btn = btnRef.current
        const text = textRef.current

        if (!btn || !text) return

        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            // Move button slightly towards mouse
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            })

            // Move text slightly more for depth
            gsap.to(text, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseLeave = () => {
            gsap.to([btn, text], {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            })
        }

        btn.addEventListener('mousemove', handleMouseMove)
        btn.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove)
            btn.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '2rem', // Large hit area for magnetic effect
                margin: '-2rem', // Compensate for padding to keep layout tight
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <span
                ref={textRef}
                style={{
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    pointerEvents: 'none' // Let button handle events
                }}
            >
                {/* Hover underline effect */}
                <span className="hover-line"
                    style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        width: '0%',
                        height: '1px',
                        background: '#fff',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease'
                    }}
                />

                {children}

                <style>{`
                    button:hover .hover-line {
                        width: 100% !important;
                    }
                `}</style>
            </span>
        </button>
    )
}
