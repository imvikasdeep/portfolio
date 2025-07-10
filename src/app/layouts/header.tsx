import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <header className='fixed z-10 px-4 w-full backdrop-blur'>
                <div className="xl:max-w-[1400px] w-full flex justify-between items-center mx-auto">
                    <Link href='/' className='mb-0 text-white font-semi-bold text-xl tracking-wide '>
                        <svg xmlns="http://www.w3.org/2000/svg" className='group' width="67" height="90" viewBox="0 0 67 65" fill="none">
                            <path d="M33.5 0L62.5118 16.25V48.75L33.5 65L4.48815 48.75V16.25L33.5 0Z" fill="#58A6FF" />
                            <path className='duration-300 transform group-hover:translate-[-3px]' d="M61.0117 17.1279V47.8711L33.5 63.2803L5.98828 47.8711V17.1279L33.5 1.71875L61.0117 17.1279Z" fill="#0a192f" stroke="#58A6FF" strokeWidth="3" />
                            <path className='duration-300 transform group-hover:translate-[-3px]' d="M23.0476 41L15.7996 24.2H19.9996L26.3356 39.08H23.8636L30.2956 24.2H34.1596L26.8876 41H23.0476ZM43.4148 41.288C42.1188 41.288 40.9108 41.08 39.7908 40.664C38.6868 40.232 37.7268 39.624 36.9108 38.84C36.0948 38.056 35.4548 37.136 34.9908 36.08C34.5428 35.024 34.3188 33.864 34.3188 32.6C34.3188 31.336 34.5428 30.176 34.9908 29.12C35.4548 28.064 36.0948 27.144 36.9108 26.36C37.7428 25.576 38.7108 24.976 39.8148 24.56C40.9188 24.128 42.1268 23.912 43.4388 23.912C44.8948 23.912 46.2068 24.168 47.3748 24.68C48.5588 25.176 49.5508 25.912 50.3508 26.888L47.8548 29.192C47.2788 28.536 46.6388 28.048 45.9348 27.728C45.2308 27.392 44.4628 27.224 43.6308 27.224C42.8468 27.224 42.1268 27.352 41.4708 27.608C40.8148 27.864 40.2468 28.232 39.7668 28.712C39.2868 29.192 38.9108 29.76 38.6388 30.416C38.3828 31.072 38.2548 31.8 38.2548 32.6C38.2548 33.4 38.3828 34.128 38.6388 34.784C38.9108 35.44 39.2868 36.008 39.7668 36.488C40.2468 36.968 40.8148 37.336 41.4708 37.592C42.1268 37.848 42.8468 37.976 43.6308 37.976C44.4628 37.976 45.2308 37.816 45.9348 37.496C46.6388 37.16 47.2788 36.656 47.8548 35.984L50.3508 38.288C49.5508 39.264 48.5588 40.008 47.3748 40.52C46.2068 41.032 44.8868 41.288 43.4148 41.288Z" fill="#58A6FF" />
                        </svg>
                    </Link>
                    <a className='inline-block text-sm border-[var(--primary-accent)] border-2 font-bold text-[var(--primary-accent)] hover:boder-blue-500/30 duration-300 py-3 px-5 rounded-md hover:shadow-[3px_3px_0_0_var(--primary-accent)] transform hover:translate-[-5px]' href="mailto:vikasdeep3098@gmail.com">Get in touch</a>
                </div>
            </header>
            <div className='z-10 fixed xl:left-22 lg:left-10 bottom-0 side_panels hidden lg:block'>
                <ul className='flex flex-col gap-3 justify-center'>
                    <li>
                        <a className='p-1 inline-block group hover:transform hover:translate-y-[-2px] transition duration-300' href="https://github.com/imvikasdeep" target='_blank'>
                            <svg className='transition duration-300 group-hover:stroke-[var(--primary-accent)]' height='20' width='20' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className='p-1 inline-block group hover:transform hover:translate-y-[-2px] transition duration-300' href="https://x.com/Im_vikasdeep" target='_blank'>
                            <svg className='transition duration-300 group-hover:stroke-[var(--primary-accent)]' height='20' width='20' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a className='p-1 inline-block group hover:transform hover:translate-y-[-2px] transition duration-300' href="https://www.linkedin.com/in/imvikasdeep/" target='_blank'>
                            <svg className='transition duration-300 group-hover:stroke-[var(--primary-accent)]' height='20' width='20' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </li>
                    <li>
                        <a className='p-1 inline-block group hover:transform hover:translate-y-[-2px] transition duration-300' href="https://codepen.io/im_vikasdeep" target='_blank'>
                            <svg className='transition duration-300 group-hover:stroke-[var(--primary-accent)]' height='20' width='20' xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='z-10 flex-col fixed xl:right-22 lg:right-10 bottom-0 side_panels hidden lg:flex'>
                <a className='writing-vertical inline-block text-[var(--primary-accent)]' href="mailto:vikasdeep3098@gmail.com" target='_blank'>vikasdeep3098@gmail.com</a>
            </div>
        </>
    )
}

export default Header