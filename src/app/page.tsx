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

const skillTiles = [
    { title: 'Angular', type: 'Framework', rotate: '-4deg', tone: 'red', img: '/assets/media/skills/icons8-angularjs-200.png' },
    { title: 'Next.js', type: 'Framework', rotate: '2deg', tone: 'slate', img: '/next.svg' },
    { title: 'Node.js', type: 'Runtime', rotate: '-4deg', tone: 'green', img: '/assets/media/skills/nodejs-200.png' },
    { title: 'TypeScript', type: 'Language', rotate: '3deg', tone: 'blue', img: '/assets/media/skills/typescript-200.png' },
    { title: 'JavaScript', type: 'Language', rotate: '-2deg', tone: 'amber', img: '/assets/media/skills/icons8-javascript-200.png' },
    { title: 'SCSS', type: 'Styling', rotate: '4deg', tone: 'pink', img: '/assets/media/skills/icons8-sass-200.png' },
    { title: 'Tailwind CSS', type: 'Library', rotate: '-3deg', tone: 'blue', img: '/assets/media/skills/icons8-tailwind-css-200.png' },
    { title: 'Responsive UI', type: 'Design', rotate: '3deg', tone: 'dark', img: '/assets/media/globe-white.png' },
];

const caseStudies = [
    {
        title: 'CarWeek',
        subtitle: 'Automotive Marketplace connecting buyers with dealership inventory',
        href: '/work/carweek',
        github: '',
        theme: 'blue',
    },
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
        detail: 'Developed modular UI, API-driven features, and reusable frontend patterns',
    },
    {
        period: '2019 - 2021',
        role: 'Web Designer @ SLT PVT LTD',
        detail: 'Building responsive, polished web interfaces with Angular, React, and modern styling systems',
    },
    {
        period: '2018',
        role: 'Web Designer Intern @ SLT PVT LTD',
        detail: 'Created interactive websites, landing pages, and component-led user experiences',
    },
];

function MiniBrowser({ theme }: { theme: 'emerald' | 'violet' | 'blue' }) {
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

                <div className="tile-row" aria-label="Skills">
                    {skillTiles.map((tile) => (
                        <article
                            className={`work-tile work-tile--${tile.tone}`}
                            key={tile.title}
                            style={{ '--tile-rotate': tile.rotate } as CSSProperties}
                        >
                            <div className="skill-logo-container">
                                <img src={tile.img} alt={tile.title} className="skill-logo-image" />
                            </div>
                            <div className="skill-text-container">
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
                    {caseStudies.map((project) => {
                        const isInternal = project.href.startsWith('/');
                        return (
                            <article className="case-study" key={project.title}>
                                <a 
                                    href={project.href} 
                                    target={isInternal ? undefined : '_blank'} 
                                    rel={isInternal ? undefined : 'noreferrer'} 
                                    aria-label={`Open ${project.title}`}
                                >
                                    <MiniBrowser theme={project.theme as 'emerald' | 'violet' | 'blue'} />
                                </a>
                                <div className="case-meta">
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.subtitle}</p>
                                    </div>
                                    <div className="case-links">
                                        <a 
                                            href={project.href} 
                                            target={isInternal ? undefined : '_blank'} 
                                            rel={isInternal ? undefined : 'noreferrer'}
                                        >
                                            {isInternal ? 'Case Study' : 'Live'}
                                        </a>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer">
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
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
        </main>
    );
}
