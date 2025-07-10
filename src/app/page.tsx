import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <>

            <div className='hero-bg min-h-screen self-center relative flex flex-col justify-center'>
                <div className='lg:max-w-[890px] xl:max-w-[1000px] w-full px-5 mx-auto'>
                    <div>
                        <h1 className='tracking-wider text-5xl md:text-7xl bg-gradient-to-r from-pink-500 to-purple-700 inline-block text-transparent bg-clip-text'>
                            FRONTEND
                            <span className='block mt-3'>
                                <span className='text-white'>&#60;</span>DEVELOPER<span className='text-white'>&#47;&#62;</span>
                            </span>
                        </h1>
                        <div className='mt-10 lg:max-w-[890px] xl:max-w-[600px]'>
                            <p className='text-lg'>
                                Hello, I&apos;m <span className='montserrat-700 inline-block text-[var(--primary-accent)] bg-clip-text'>VIKASDEEP CHAUDHARY</span>, a web developer dedicated to designing and developing beautiful, responsive, and user-centric websites.
                            </p>
                        </div>
                    </div>
                    <div className='flex mt-10 text-s flex-wrap gap-4'>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-angularjs-200.png" alt="angular" />
                            <span className='ml-3'>Angular</span>
                        </div>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/typescript-200.png" alt="typescript" />
                            <span className='ml-3'>Typescript</span>
                        </div>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-javascript-200.png" alt="JavaScript" />
                            <span className='ml-3'>JavaScript</span>
                        </div>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={30} src="/assets/media/skills/icons8-sass-200.png" alt="SCSS" />
                            <span className='ml-3'>SCSS</span>
                        </div>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-tailwind-css-200.png" alt="Tailwind CSS" />
                            <span className='ml-3'>Tailwind CSS</span>
                        </div>
                        <div className='flex-grow-1 bg-blue-200/10  px-5 py-2 rounded-4xl flex items-center text-[var(--primary-accent)] hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                            <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/nodejs-200.png" alt="Node.js" />
                            <span className='ml-3'>Node.js</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='lg:max-w-[890px] xl:max-w-[1000px] w-full px-5 mx-auto'>
                    <h2 className='text-[var(--primary-accent)] text-3xl mb-5'>About me</h2>
                    <p className='mb-4'>Hi! I&apos;m a passionate Frontend Developer who loves crafting beautiful and user-friendly websites. I enjoy turning ideas into interactive and visually appealing experiences on the web.
                        I&apos;m skilled in Angular, JavaScript, and SCSS, and I&apos;ve also explored Tailwind CSS and Next.js to expand my frontend toolkit. Whether it&apos;s building dynamic web apps or designing sleek UIs, I&apos;m always excited to bring creativity and clean code together.</p>
                    <p className='mb-4'>Let&apos;s build something awesome!</p>
                </div>
            </div>

            <div className='py-10'>
                <div className='lg:max-w-[890px] xl:max-w-[1000px] w-full px-5 mx-auto'>
                    <h2 className='text-[var(--primary-accent)] text-3xl mb-8'>Portfolio</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="group  p-8 pb-6 rounded-md bg-blue-600/10 hover:bg-blue-600/10 hover:boder-blue-500/30 duration-300">
                            <div className="flex items-start justify-between">
                                {/* <Image className='shrink-0' width={120} height={40} src="https://moviebase-angular.netlify.app/assets/images/logo.png" alt="logo" /> */}
                                <div className='mr-4'>
                                    <h3>Moviebase</h3>
                                    <p className='text-s'>Movie Explorer App</p>
                                </div>
                                <div className='shrink-0 flex gap-2'>
                                    <a href="https://github.com/imvikasdeep/moviebase-angular" target='_blank'>
                                        <Image className='opacity-70 hover:opacity-100 duration-300' width={22} height={22} src="/assets/media/github-white.png" alt="github" />
                                    </a>
                                    <a href="https://moviebase-angular.netlify.app/" target='_blank'>
                                        <Image className='opacity-70 hover:opacity-100 duration-300' width={22} height={22} src="/assets/media/globe-white.png" alt="globe" />
                                    </a>
                                </div>
                            </div>
                            <div className='mt-5 pt-5 border-t-2 border-blue-500/20'>
                                <p>Developed a dynamic Movie Explorer web application using Angular and the TMDb (The Movie Database) API, designed to deliver real-time movie data to users in a clean, responsive UI. The app showcases trending movies, upcoming releases, top-rated films, and allows users to search and explore thousands of titles with detailed information.</p>
                            </div>
                            <div className="text-right mt-2 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="https://moviebase-angular.netlify.app/" target='_blank' className='text-[var(--primary-accent)]'>View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='py-10'>
                <div className='lg:max-w-[890px] xl:max-w-[1000px] w-full px-5 mx-auto'>
                    <div className="mt-8 h-px mx-auto bg-radial from-[var(--primary-accent)] to-70% to-#04061f"></div>
                    <div className='mt-10 text-center'>
                        Made with <span className='text-red-400'>❤</span>, built with <span className='font-semibold'>Next.js</span>, <span className='font-semibold'>Tailwind</span> and deployed on <span className='font-semibold'>Netlify</span>
                    </div>
                </div>
            </div>

        </>
    )
}