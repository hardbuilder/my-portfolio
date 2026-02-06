import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/hardbuilder', icon: '→' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/omtakale', icon: '→' },
    ]

    return (
        <footer style={{
            padding: '5rem 5%',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '5rem'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '3rem',
                marginBottom: '3rem'
            }}>
                {/* Contact Section */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1rem',
                        fontWeight: 700
                    }}>
                        LET'S CONNECT
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        marginBottom: '1.5rem',
                        maxWidth: '400px'
                    }}>
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </p>
                    <a
                        href="mailto:omtakale@gmail.com"
                        style={{
                            fontSize: '1.3rem',
                            color: '#fff',
                            textDecoration: 'none',
                            borderBottom: '2px solid rgba(255,255,255,0.3)',
                            paddingBottom: '0.25rem',
                            transition: 'border-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.borderColor = '#fff'}
                        onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                    >
                        omtakale@gmail.com
                    </a>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h3 style={{
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem'
                    }}>
                        FOLLOW ME
                    </h3>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'transform 0.3s ease, color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateX(5px)'
                                e.target.style.color = 'var(--text-muted)'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateX(0)'
                                e.target.style.color = '#fff'
                            }}
                        >
                            {link.name} <span style={{ fontSize: '0.9rem' }}>{link.icon}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
            }}>
                <p>© {currentYear} Om Takale. All rights reserved (just kidding its Open Source)</p>
                <p>Designed & Developed by Om Takale</p>
            </div>
        </footer>
    )
}
