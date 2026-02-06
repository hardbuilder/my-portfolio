import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
    const containerRef = useRef(null)
    const omRef = useRef(null)
    const takaleRef = useRef(null)
    const maskRef = useRef(null)
    const [displayOM, setDisplayOM] = useState('')
    const [displayTAKALE, setDisplayTAKALE] = useState('')
    const [typingDone, setTypingDone] = useState(false)

    useEffect(() => {
        const om = 'OM'
        const takale = 'TAKALE'
        let currentIndex = 0

        // Type OM first
        const typeOM = setInterval(() => {
            if (currentIndex <= om.length) {
                setDisplayOM(om.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typeOM)
                currentIndex = 0

                // Then type TAKALE
                const typeTAKALE = setInterval(() => {
                    if (currentIndex <= takale.length) {
                        setDisplayTAKALE(takale.slice(0, currentIndex))
                        currentIndex++
                    } else {
                        clearInterval(typeTAKALE)
                        setTypingDone(true)
                    }
                }, 100)
            }
        }, 100)

        return () => clearInterval(typeOM)
    }, [])

    // Handle animation after typing is done
    useEffect(() => {
        if (!typingDone || !maskRef.current) return

        const tl = gsap.timeline()

        // Small delay
        tl.to({}, { duration: 0.3 })
            // Move text apart
            .to(omRef.current, {
                y: -80,
                duration: 0.6,
                ease: 'power2.out'
            })
            .to(takaleRef.current, {
                y: 80,
                duration: 0.6,
                ease: 'power2.out'
            }, '<')
            // Show the window/mask
            .to(maskRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            }, '<0.1')
            // Hold
            .to({}, { duration: 0.5 })
            // Fade text
            .to([omRef.current, takaleRef.current], {
                opacity: 0,
                duration: 0.3
            })
            // Expand the window
            .to(maskRef.current, {
                scale: 50,
                duration: 0.8,
                ease: 'power2.inOut'
            }, '<')
            // Fade white overlay
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.4,
                onComplete: onComplete
            }, '-=0.3')

        return () => tl.kill()
    }, [typingDone, onComplete])

    return (
        <>
            {/* The actual site content renders behind */}

            {/* White overlay with hole that reveals site */}
            <div
                ref={containerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 9999,
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* OM */}
                <h1
                    ref={omRef}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 700,
                        color: '#000000',
                        letterSpacing: '0.15em',
                        fontFamily: 'monospace',
                        margin: 0,
                        zIndex: 2
                    }}
                >
                    {displayOM}
                    {displayOM.length < 2 && displayOM.length > 0 && (
                        <span style={{ animation: 'blink 1s infinite' }}>|</span>
                    )}
                </h1>

                {/* Window/Mask - reveals the dark site behind */}
                <div
                    ref={maskRef}
                    style={{
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        background: '#050505',
                        borderRadius: '12px',
                        opacity: 0,
                        scale: 0,
                        zIndex: 1
                    }}
                />

                {/* TAKALE */}
                <h1
                    ref={takaleRef}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 700,
                        color: '#000000',
                        letterSpacing: '0.15em',
                        fontFamily: 'monospace',
                        margin: 0,
                        zIndex: 2
                    }}
                >
                    {displayTAKALE}
                    {displayTAKALE.length < 6 && displayTAKALE.length > 0 && displayOM.length === 2 && (
                        <span style={{ animation: 'blink 1s infinite' }}>|</span>
                    )}
                </h1>

                <style>{`
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `}</style>
            </div>
        </>
    )
}
