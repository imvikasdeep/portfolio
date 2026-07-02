import type { CSSProperties } from 'react';

const skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'SCSS',
    // 'Tailwind CSS',
    'Next.js',
    'Node.js',
    'Responsive UI',
];

const featuredTiles = [
    { title: 'Moviebase', type: 'Angular app', rotate: '-4deg', tone: 'green' },
    { title: 'Design System', type: 'Components', rotate: '3deg', tone: 'blue' },
    { title: 'Portfolio', type: 'Next.js', rotate: '-2deg', tone: 'violet' },
    { title: 'Web UI', type: 'Frontend', rotate: '4deg', tone: 'amber' },
    { title: 'Dashboard', type: 'Prototype', rotate: '-3deg', tone: 'slate' },
];

const caseStudies = [
    {
        title: 'Moviebase',
        subtitle: 'Movie discovery app with search, trending, upcoming, and top-rated flows',
        href: 'https://moviebase-angular.netlify.app/',
        github: 'https://github.com/imvikasdeep/moviebase-angular',
        theme: 'emerald',
    },
    {
        title: 'Personal Portfolio',
        subtitle: 'A focused portfolio system built with Next.js, Tailwind CSS, and refined interactions',
        href: 'mailto:vikasdeep3098@gmail.com',
        github: 'https://github.com/imvikasdeep',
        theme: 'violet',
    },
];

const experience = [
    {
        period: '2021 - now ',
        role: 'Frontend Developer @ SLT PVT LTD',
        detail: 'Building responsive, polished web interfaces with Angular, React, and modern styling systems',
    },
    {
        period: '2019 - 2021',
        role: 'Web Designer @ SLT PVT LTD',
        detail: 'Developed modular UI, API-driven features, and reusable frontend patterns',
    },
    {
        period: '2018',
        role: 'Web Designer Intern @ SLT PVT LTD',
        detail: 'Created interactive websites, landing pages, and component-led user experiences',
    },
];

function MiniBrowser({ theme }: { theme: 'emerald' | 'violet' }) {
    return (
        <div className={`case-visual case-visual--${theme}`}>
            <div className="browser-frame">
                <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="mock-page">
                    <aside className="mock-sidebar">
                        <span />
                        <span />
                        <span />
                        <span />
                    </aside>
                    <main className="mock-content">
                        <div className="mock-hero">
                            <div>
                                <span className="mock-kicker" />
                                <span className="mock-title" />
                            </div>
                            <span className="mock-button" />
                        </div>
                        <div className="mock-grid">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="mock-list">
                            <span />
                            <span />
                            <span />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <main className="portfolio-shell">
            <section id="home" className="hero-section">
                <div className="hero-copy">
                    <p className="availability">Available for frontend roles and freelance work</p>
                    <h1>
                        I&apos;m Vikasdeep, a Frontend Developer crafting clean, scalable web interfaces.
                    </h1>
                </div>

                <div className="tile-row" aria-label="Selected visual work">
                    {featuredTiles.map((tile) => (
                        <article
                            className={`work-tile work-tile--${tile.tone}`}
                            key={tile.title}
                            style={{ '--tile-rotate': tile.rotate } as CSSProperties}
                        >
                            <div className="tile-screen" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <div>
                                <strong>{tile.title}</strong>
                                <span>{tile.type}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="work" className="section-block">
                <h2>Case studies</h2>
                <div className="case-list">
                    {caseStudies.map((project) => (
                        <article className="case-study" key={project.title}>
                            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                                <MiniBrowser theme={project.theme as 'emerald' | 'violet'} />
                            </a>
                            <div className="case-meta">
                                <div>
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                </div>
                                <div className="case-links">
                                    <a href={project.href} target="_blank" rel="noreferrer">Live</a>
                                    <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="about" className="section-block about-section">
                <h2>About</h2>
                <div className="about-grid">
                    <p>
                        I enjoy turning product ideas into sharp, responsive interfaces. My strongest day-to-day tools are Angular,
                        TypeScript, JavaScript, SCSS, Tailwind CSS, and Next.js.
                    </p>
                    <div className="skill-cloud" aria-label="Skills">
                        {skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-block experience-section">
                <h2>Experience</h2>
                <div className="timeline">
                    {experience.map((item) => (
                        <article key={`${item.period}-${item.role}`}>
                            <time>{item.period}</time>
                            <div>
                                <h3>{item.role}</h3>
                                <p>{item.detail}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="site-footer">
                <span className="footer-credit">
                    built with
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M20.8 4.6c-1.9-1.8-4.9-1.7-6.7.2L12 7l-2.1-2.2C8.1 2.9 5.1 2.8 3.2 4.6 1.1 6.6 1 10 3 12.1l9 8.9 9-8.9c2-2.1 1.9-5.5-.2-7.5Z" />
                    </svg>
                    by vikasdeep
                </span>
                <nav aria-label="Social links">
                    <a href="mailto:vikasdeep3098@gmail.com" aria-label="Email">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/imvikasdeep/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        LinkedIn
                    </a>
                    <a href="https://github.com/imvikasdeep" target="_blank" rel="noreferrer" aria-label="GitHub">
                        Github
                    </a>
                    <a href="https://codepen.io/im_vikasdeep" target="_blank" rel="noreferrer" aria-label="GitHub">
                        Codepen
                    </a>
                </nav>
            </footer>
        </main>
    );
}
