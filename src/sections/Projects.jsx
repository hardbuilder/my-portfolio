import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: 'TechLingua',
        category: 'Web / Android Application',
        description: 'A gamified learning management system that enables faculty to deploy structured course modules and interactive quizzes. Features a dynamic tournament engine with real-time leaderboards and XP-based rewards to drive student engagement and healthy competition',
        tech: ['React (Vite)',
            'React Native',
            'Firebase (Auth & Firestore)',
            'Node.js'],
        color: '#6366f1',
        github: 'https://github.com/hardbuilder/Tech-Lingua'
    },
    {
        id: 2,
        title: 'LawUp',
        category: 'Legal-Tech / AI Platform',
        description: 'An AI-powered legal assistant providing automated document drafting, risk visualization, and intelligent legal guidance through LLM integration.',
        tech: ['Next.js', 'Python', 'Gemini API', 'PostgreSQL'],
        color: '#3b82f6',
        github: 'https://github.com/hardbuilder/Law-Up'
    },
    {
        id: 3,
        title: 'Pop Code',
        category: 'Competitive Programming Platform',
        description: 'An interactive coding ecosystem designed for mastering Data Structures and Algorithms. Features real-time code evaluation, algorithmic challenges, and a competitive ranking system to sharpen problem-solving skills.',
        tech: ['React (Vite)', 'React Native', 'Firebase', 'Node.js'],
        color: '#10b981',
        github: 'https://github.com/hardbuilder/Pop-Code'
    },
    {
        id: 4,
        title: 'Smart Checkout System',
        category: 'IoT / Embedded Systems',
        description: 'An automated retail solution built on Raspberry Pi that eliminates traditional checkout lines. It uses real-time sensor integration to identify products and syncs with a web-based billing interface for instant, contactless transactions.',
        tech: ['Raspberry Pi', 'Python', 'Edge Impulse', 'Flask', 'SQLite'],
        color: '#f59e0b',
        github: 'https://github.com/hardbuilder/Automated-Checkout-System'
    }
]

export default function Projects() {
    const containerRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const sections = gsap.utils.toArray('.project-card');

            const getScrollAmount = () => -(wrapper.scrollWidth - window.innerWidth);

            gsap.to(wrapper, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
                    invalidateOnRefresh: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e) => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section
            ref={containerRef}
            className="projects-section"
            style={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                background: 'transparent' // Transparent to show particles
            }}
        >
            <div
                ref={wrapperRef}
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '100%',
                    alignItems: 'center',
                    paddingLeft: '0'
                }}
            >
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{
                            width: '100vw', // Full width for immersive feel
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0',
                            flexShrink: 0
                        }}
                    >
                        <div
                            onMouseMove={handleMouseMove}
                            className="glass-card"
                            style={{
                                width: '85%',
                                height: '80%',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '5rem',
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                overflow: 'hidden',
                                cursor: 'none' // We can add a custom cursor later maybe
                            }}
                        >
                            {/* Spotlight Effect */}
                            <div
                                style={{
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                    transition: 'opacity 0.5s ease'
                                }}
                            />

                            {/* Ambient Color Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '600px',
                                height: '600px',
                                background: `radial-gradient(circle, ${project.color}10 0%, transparent 70%)`,
                                filter: 'blur(100px)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }}></div>

                            {/* Top Row: Number & Category */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
                                <span style={{
                                    fontSize: '11rem',
                                    fontWeight: 800,
                                    lineHeight: 0.8,
                                    color: 'rgba(255,255,255,0.05)',
                                    fontFamily: 'system-ui'
                                }}>
                                    0{index + 1}
                                </span>
                                <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    fontSize: '0.9rem',
                                    color: 'rgba(255,255,255,0.6)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '100px'
                                }}>
                                    {project.category}
                                </span>
                            </div>

                            {/* Bottom Row: Content */}
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                                <div>
                                    <h3 style={{
                                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                                        fontWeight: 700,
                                        lineHeight: 1,
                                        marginBottom: '1.5rem',
                                        color: '#fff'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.2rem',
                                        color: '#999',
                                        maxWidth: '500px',
                                        lineHeight: 1.6
                                    }}>
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                        {project.tech.map(t => (
                                            <span key={t} style={{ color: '#666', fontSize: '0.9rem' }}>#{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open(project.github, '_blank')}
                                    className="project-btn"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        background: 'transparent',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, background: '#fff', color: '#000', borderColor: '#fff' })}
                                    onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' })}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
