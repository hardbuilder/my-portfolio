import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillsData = [
    { category: "Web Engineering", items: ['JavaScript', 'React', 'HTML', 'CSS', 'Express'] },
    { category: "Core Languages", items: ['Python', 'Java'] },
    { category: "Databases", items: ['MySQL', 'MongoDB', 'Firebase', 'Firestore', 'Neo4j'] },
    { category: "Cloud & DevOps", items: ['AWS', 'GCP', 'Docker', 'Linux'] },
    { category: "Data Science", items: ['R', 'MATLAB', 'Tableau'] }
]

export default function WhatIDo() {
    const wrapperRef = useRef(null)
    const categoryRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        // Animate cards on scroll
        cardsRef.current.forEach((card, index) => {
            if (!card) return

            // Initial state: Blurred, transparent, pushed right
            gsap.set(card, { autoAlpha: 0, x: 50, filter: 'blur(5px)' })

            gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'top 15%',
                    scrub: 1,
                    toggleActions: 'play none none reverse'
                }
            })
                .to(card, {
                    autoAlpha: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                    ease: 'power2.out'
                })
                .to(card, {
                    autoAlpha: 0,
                    x: 50,
                    filter: 'blur(5px)',
                    duration: 1,
                    ease: 'power2.in'
                })
        })

        // Category switching
        skillsData.forEach((group, i) => {
            ScrollTrigger.create({
                trigger: `#category-${i}`,
                start: 'top 60%',
                end: 'bottom 60%',
                onEnter: () => updateCategory(group.category),
                onEnterBack: () => updateCategory(group.category),
                onLeaveBack: () => {
                    if (i === 0) updateCategory("") // Clear if scrolling back up past first
                }
            })
        })

        const updateCategory = (text) => {
            if (categoryRef.current) {
                gsap.to(categoryRef.current, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        categoryRef.current.innerText = text
                        gsap.to(categoryRef.current, { opacity: 1, duration: 0.2 })
                    }
                })
            }
        }

    }, [])

    return (
        <section
            ref={wrapperRef}
            className="container whatido-section"
            style={{
                position: 'relative',
                padding: '10vh 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                minHeight: '150vh',
            }}
        >

            {/* Left Column: Title (Sticky) */}
            <div
                style={{
                    position: 'sticky',
                    top: '50vh', // Center visually
                    transform: 'translateY(-50%)',
                    width: '25%', // Narrower to fit 3 columns
                    paddingLeft: '5%',
                    zIndex: 1
                }}
            >
                <div style={{ position: 'relative' }}>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)', // Slightly smaller to fit
                        lineHeight: 0.9,
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: '#fff',
                        marginBottom: '1rem'
                    }}>
                        WHAT<br />
                        <span style={{ color: '#666' }}>I DO.</span>
                    </h2>
                </div>
            </div>

            {/* Center Column: Scrolling List */}
            <div
                style={{
                    width: '40%', // Central column
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8rem', // More breathing room
                    paddingTop: '30vh',
                    paddingBottom: '30vh',
                    zIndex: 1,
                    // Center the items in this column
                    alignItems: 'center'
                }}
            >
                {skillsData.map((group, groupIndex) => (
                    <div key={groupIndex} id={`category-${groupIndex}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {group.items.map((tech, i) => (
                            <div
                                key={`${groupIndex}-${i}`}
                                ref={el => cardsRef.current.push(el)}
                                className="tech-item"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', // Center text relative to dot if needed, or keeping left aligned
                                    opacity: 0,
                                    cursor: 'default',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: 'fit-content'
                                }}
                            >
                                <div
                                    className="dot"
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        background: '#333',
                                        borderRadius: '50%',
                                        marginRight: '2rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <h3 style={{
                                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                                    fontWeight: 500,
                                    color: '#888',
                                    transition: 'color 0.3s ease'
                                }}>
                                    {tech}
                                </h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Right Column: Category Label (Sticky) */}
            <div
                style={{
                    position: 'sticky',
                    top: '50vh',
                    transform: 'translateY(-50%)',
                    width: '30%',
                    paddingRight: '5%',
                    zIndex: 1,
                    textAlign: 'right', // Align text to the right
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <h3
                    ref={categoryRef}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Big font as requested
                        lineHeight: 1,
                        fontWeight: 700,
                        // User said "follow aesthetics", usually implies consistency. 
                        // Let's go with a semi-transparent white or the grey accent.
                        color: 'rgba(255,255,255,0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textAlign: 'right'
                    }}
                >
                    {/* Dynamic Category Text */}
                </h3>
            </div>
        </section>
    )
}
