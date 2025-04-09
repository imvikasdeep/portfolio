import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className='hero-bg self-center py-20 relative flex flex-col items-center'>
                <div className='xl:max-w-5/10 px-5 mx-auto text-center'>
                    <div>
                        <h1 className='tracking-wider text-5xl md:text-7xl bg-gradient-to-r from-pink-600 to-violet-700 inline-block text-transparent bg-clip-text'>
                            FRONTEND
                            <span className='block mt-3'>
                                <span className='text-white'>&#60;</span>DEVELOPER<span className='text-white'>&#47;&#62;</span>
                            </span>
                        </h1>
                        <div className='mt-10'>
                            <p className='text-lg'>
                                Hello, I&apos;m <span className='montserrat-700 bg-gradient-to-r from-pink-600 to-violet-400 inline-block text-transparent bg-clip-text'>VIKASDEEP CHAUDHARY</span>, a web developer dedicated to designing and developing beautiful, responsive, and user-centric websites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-15 px-5 text-s flex-wrap gap-4'>
                    <div className='flex-grow-1 bg-blue-200/10 border-blue-500/20 border px-5 py-2 rounded-4xl flex items-center text-blue-400 hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                        <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-angularjs-200.png" alt="angular" />
                        <span className='ml-3'>Angular</span>
                    </div>
                    <div className='flex-grow-1 bg-blue-200/10 border-blue-500/20 border px-5 py-2 rounded-4xl flex items-center text-blue-400 hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                        <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/favicon.ico" alt="Next.js" />
                        <span className='ml-3'>Next.js</span>
                    </div>
                    <div className='flex-grow-1 bg-blue-200/10 border-blue-500/20 border px-5 py-2 rounded-4xl flex items-center text-blue-400 hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                        <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-javascript-200.png" alt="JavaScript" />
                        <span className='ml-3'>JavaScript</span>
                    </div>
                    <div className='flex-grow-1 bg-blue-200/10 border-blue-500/20 border px-5 py-2 rounded-4xl flex items-center text-blue-400 hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                        <Image className='shrink-0' height={30} width={20} src="/assets/media/skills/icons8-tailwind-css-200.png" alt="Tailwind CSS" />
                        <span className='ml-3'>Tailwind CSS</span>
                    </div>
                    <div className='flex-grow-1 bg-blue-200/10 border-blue-500/20 border px-5 py-2 rounded-4xl flex items-center text-blue-400 hover:bg-blue-500/20 hover:boder-blue-500/30 duration-300'>
                        <Image className='shrink-0' height={30} width={30} src="/assets/media/skills/icons8-sass-200.png" alt="SCSS" />
                        <span className='ml-3'>SCSS</span>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <div className='xl:max-w-8/10 px-5 mx-auto text-lg'>
                    <h2 className='text-pink-600 text-3xl mb-5'>About me</h2>
                    <p className='mb-4'>Hi! I&apos;m a passionate Frontend Developer who loves crafting beautiful and user-friendly websites. I enjoy turning ideas into interactive and visually appealing experiences on the web.
                    </p>
                    <p className='mb-4'>I&apos;m skilled in Angular, JavaScript, and SCSS, and I&apos;ve also explored Tailwind CSS and Next.js to expand my frontend toolkit. Whether it&apos;s building dynamic web apps or designing sleek UIs, I&apos;m always excited to bring creativity and clean code together.</p>
                    <p className='mb-4'>Let&apos;s build something awesome!</p>
                </div>
            </div>

            <div className='py-10'>
                <div className='xl:max-w-8/10 px-5 mx-auto'>
                    <h2 className='text-pink-600 text-3xl mb-8'>Portfolio</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="group border-blue-500/20 border p-8 pb-6 rounded-2xl bg-blue-900/10 hover:bg-blue-800/10 hover:boder-blue-500/30 duration-300">
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
                            <div className='mt-5 leading-normal pt-5 border-t-2 border-blue-500/20'>
                                <p>Developed a dynamic Movie Explorer web application using Angular and the TMDb (The Movie Database) API, designed to deliver real-time movie data to users in a clean, responsive UI. The app showcases trending movies, upcoming releases, top-rated films, and allows users to search and explore thousands of titles with detailed information.</p>
                            </div>
                            <div className="text-right mt-2 opacity-0 group-hover:opacity-100 duration-300">
                                <a href="https://moviebase-angular.netlify.app/" target='_blank' className='text-blue-400'>View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='py-10'>
                <div className='xl:max-w-8/10 px-5 mx-auto'>

                    <ul className='flex gap-5 justify-center'>
                        <li>
                            <a href="https://github.com/imvikasdeep" target='_blank'>
                                <Image width={25} height={25} src="/assets/media/github-white.png" alt="github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/imvikasdeep/" target='_blank'>
                                <Image width={25} height={25} src="/assets/media/linkedin-white.png" alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/Im_vikasdeep" target='_blank'>
                                <Image width={25} height={25} src="/assets/media/x-com-white.png" alt="x-com" />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/im_vikasdeep" target='_blank'>
                                <Image width={25} height={25} src="/assets/media/codepen-white.png" alt="codepen" />
                            </a>
                        </li>
                    </ul>

                    <div className="mt-8 h-px mx-auto bg-radial from-blue-400 to-70% to-#04061f"></div>
                    <div className='mt-5 text-center'>Made with <span className='text-red-400'>❤</span> with Next.js</div>

                </div>
            </div>

        </>
    )
}