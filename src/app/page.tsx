import React from 'react';
import Image from 'next/image';

const skills = [
    { name: 'Angular', icon: '/assets/media/skills/icons8-angularjs-200.png' },
    { name: 'TypeScript', icon: '/assets/media/skills/typescript-200.png' },
    { name: 'JavaScript', icon: '/assets/media/skills/icons8-javascript-200.png' },
    { name: 'SCSS', icon: '/assets/media/skills/icons8-sass-200.png' },
    { name: 'Tailwind CSS', icon: '/assets/media/skills/icons8-tailwind-css-200.png' },
    { name: 'Node.js', icon: '/assets/media/skills/nodejs-200.png' },
    { name: 'HTML5', icon: '/assets/media/skills/icons8-html-5-200.png' },
    { name: 'CSS3', icon: '/assets/media/skills/icons8-css-logo-200.png' },
];

const projects = [
    {
        title: 'Moviebase',
        subtitle: 'Movie Explorer App',
        description: 'A dynamic Movie Explorer web app built with Angular and the TMDb API. Delivers real-time movie data with trending, upcoming and top-rated sections, plus search across thousands of titles.',
        tags: ['Angular', 'TypeScript', 'TMDb API', 'SCSS'],
        github: 'https://github.com/imvikasdeep/moviebase-angular',
        live: 'https://moviebase-angular.netlify.app/',
    },
];

const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Delivered' },
    { value: '10+', label: 'Technologies' },
    { value: '∞', label: 'Cups of Coffee' },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className='relative min-h-screen flex flex-col justify-center overflow-hidden pt-24'>
                <div className='absolute inset-0 bg-grid opacity-60 pointer-events-none' />
                <div className='absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-[var(--gradient-1)]/20 blur-3xl animate-float pointer-events-none' />
                <div className='absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[var(--gradient-3)]/15 blur-3xl animate-float pointer-events-none' style={{ animationDelay: '2s' }} />

                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto relative z-10'>
                    <div className='animate-fade-up'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8'>
                            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                            <span className='text-sm text-[var(--foreground-muted)]'>Available for new projects</span>
                        </div>
                        <h1 className='tracking-wider text-5xl md:text-7xl xl:text-8xl leading-tight font-bold'>
                            <span className='gradient-text'>FRONTEND</span>
                            <span className='block mt-3 text-[var(--foreground)]'>
                                <span className='text-[var(--primary-accent)]'>&#60;</span>DEVELOPER<span className='text-[var(--primary-accent)]'>&#47;&#62;</span>
                            </span>
                        </h1>
                        <div className='mt-10 max-w-[640px]'>
                            <p className='text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed'>
                                Hello, I&apos;m <span className='montserrat-700 text-[var(--primary-accent)]'>VIKASDEEP CHAUDHARY</span>, a web developer dedicated to designing and developing beautiful, responsive, and user-centric websites.
                            </p>
                        </div>
                        <div className='mt-10 flex flex-wrap gap-4'>
                            <a href="mailto:vikasdeep3098@gmail.com" className='btn-primary px-7 py-3 rounded-md font-bold text-sm inline-flex items-center gap-2'>
                                Let&apos;s Talk
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                            <a href="#portfolio" className='btn-outline px-7 py-3 rounded-md font-bold text-sm inline-flex items-center gap-2'>
                                View Work
                            </a>
                        </div>
                    </div>

                    <div className='flex mt-14 flex-wrap gap-3'>
                        {skills.slice(0, 6).map((skill) => (
                            <div key={skill.name} className='skill-pill px-5 py-2.5 rounded-full flex items-center text-[var(--primary-accent)]'>
                                <Image className='shrink-0' height={22} width={22} src={skill.icon} alt={skill.name} />
                                <span className='ml-3 text-sm font-medium'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className='py-16 relative'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {stats.map((s) => (
                            <div key={s.label} className='glass-card rounded-2xl p-6 text-center transition duration-300'>
                                <div className='text-4xl md:text-5xl font-bold gradient-text mb-2'>{s.value}</div>
                                <div className='text-sm text-[var(--foreground-muted)] uppercase tracking-wider'>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className='py-20 relative'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto'>
                    <h2 className='section-title text-[var(--primary-accent)] text-3xl md:text-4xl mb-10 font-bold'>About me</h2>
                    <div className='grid md:grid-cols-3 gap-8 items-start'>
                        <div className='md:col-span-2 space-y-5 text-[var(--foreground-muted)] text-lg leading-relaxed'>
                            <p>
                                Hi! I&apos;m a passionate Frontend Developer who loves crafting beautiful and user-friendly websites. I enjoy turning ideas into interactive and visually appealing experiences on the web.
                            </p>
                            <p>
                                I&apos;m skilled in <span className='text-[var(--primary-accent)] font-semibold'>Angular</span>, <span className='text-[var(--primary-accent)] font-semibold'>JavaScript</span>, and <span className='text-[var(--primary-accent)] font-semibold'>SCSS</span>, and I&apos;ve also explored <span className='text-[var(--primary-accent)] font-semibold'>Tailwind CSS</span> and <span className='text-[var(--primary-accent)] font-semibold'>Next.js</span> to expand my frontend toolkit. Whether it&apos;s building dynamic web apps or designing sleek UIs, I&apos;m always excited to bring creativity and clean code together.
                            </p>
                            <p className='text-[var(--foreground)] font-semibold'>
                                Let&apos;s build something awesome!
                            </p>
                        </div>
                        <div className='glass-card rounded-2xl p-6'>
                            <h3 className='text-[var(--primary-accent)] font-bold mb-4 text-lg'>Quick Info</h3>
                            <ul className='space-y-3 text-sm'>
                                <li className='flex justify-between'>
                                    <span className='text-[var(--foreground-muted)]'>Role</span>
                                    <span className='font-semibold'>Frontend Dev</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span className='text-[var(--foreground-muted)]'>Focus</span>
                                    <span className='font-semibold'>Angular / React</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span className='text-[var(--foreground-muted)]'>Location</span>
                                    <span className='font-semibold'>Remote</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span className='text-[var(--foreground-muted)]'>Status</span>
                                    <span className='font-semibold text-green-400'>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className='py-20 relative'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto'>
                    <h2 className='section-title text-[var(--primary-accent)] text-3xl md:text-4xl mb-10 font-bold'>Skills & Tools</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        {skills.map((skill) => (
                            <div key={skill.name} className='glass-card rounded-xl p-5 flex flex-col items-center gap-3 transition duration-300'>
                                <div className='w-14 h-14 rounded-lg bg-[var(--primary-accent-soft)] flex items-center justify-center'>
                                    <Image width={36} height={36} src={skill.icon} alt={skill.name} />
                                </div>
                                <span className='text-sm font-semibold text-center'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section id="portfolio" className='py-20 relative'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto'>
                    <h2 className='section-title text-[var(--primary-accent)] text-3xl md:text-4xl mb-10 font-bold'>Portfolio</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((p) => (
                            <div key={p.title} className="group glass-card p-8 rounded-2xl transition duration-300 relative overflow-hidden">
                                <div className='absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--primary-accent)]/10 blur-3xl group-hover:bg-[var(--primary-accent)]/20 transition-all duration-500' />
                                <div className="flex items-start justify-between relative">
                                    <div className='mr-4'>
                                        <div className='text-xs uppercase tracking-widest text-[var(--primary-accent)] mb-2'>Featured Project</div>
                                        <h3 className='text-2xl font-bold mb-1'>{p.title}</h3>
                                        <p className='text-sm text-[var(--foreground-muted)]'>{p.subtitle}</p>
                                    </div>
                                    <div className='shrink-0 flex gap-3'>
                                        <a href={p.github} target='_blank' className='p-2 rounded-lg hover:bg-[var(--primary-accent-soft)] text-[var(--foreground-muted)] hover:text-[var(--primary-accent)] transition duration-300' aria-label="GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                        </a>
                                        <a href={p.live} target='_blank' className='p-2 rounded-lg hover:bg-[var(--primary-accent-soft)] text-[var(--foreground-muted)] hover:text-[var(--primary-accent)] transition duration-300' aria-label="Live site">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className='mt-5 pt-5 border-t border-[var(--border)] relative'>
                                    <p className='text-[var(--foreground-muted)] leading-relaxed'>{p.description}</p>
                                </div>
                                <div className='mt-5 flex flex-wrap gap-2 relative'>
                                    {p.tags.map((tag) => (
                                        <span key={tag} className='text-xs px-3 py-1 rounded-full bg-[var(--primary-accent-soft)] text-[var(--primary-accent)] font-medium'>{tag}</span>
                                    ))}
                                </div>
                                <div className="mt-6 relative">
                                    <a href={p.live} target='_blank' className='inline-flex items-center gap-2 text-[var(--primary-accent)] font-semibold text-sm group/link'>
                                        View Project
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='group-hover/link:translate-x-1 transition-transform'><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Coming soon placeholder */}
                        <div className='glass-card p-8 rounded-2xl border-dashed flex flex-col items-center justify-center text-center min-h-[280px]'>
                            <div className='w-14 h-14 rounded-full bg-[var(--primary-accent-soft)] flex items-center justify-center mb-4'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            </div>
                            <h3 className='text-xl font-bold mb-2'>More Coming Soon</h3>
                            <p className='text-sm text-[var(--foreground-muted)]'>New projects are on the way. Stay tuned!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-20 relative'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto'>
                    <div className='glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[var(--gradient-1)]/10 via-transparent to-[var(--gradient-3)]/10' />
                        <div className='relative'>
                            <h2 className='text-3xl md:text-5xl font-bold mb-4'>Let&apos;s work <span className='gradient-text'>together</span></h2>
                            <p className='text-[var(--foreground-muted)] text-lg mb-8 max-w-xl mx-auto'>Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something great.</p>
                            <a href="mailto:vikasdeep3098@gmail.com" className='btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold'>
                                Say Hello
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='py-10 border-t border-[var(--border)]'>
                <div className='lg:max-w-[890px] xl:max-w-[1100px] w-full px-6 mx-auto text-center text-sm text-[var(--foreground-muted)]'>
                    Made with <span className='text-red-400'>❤</span>, built with <span className='font-semibold text-[var(--foreground)]'>Next.js</span>, <span className='font-semibold text-[var(--foreground)]'>Tailwind</span> and deployed on <span className='font-semibold text-[var(--foreground)]'>Netlify</span>
                </div>
            </footer>
        </>
    );
}
