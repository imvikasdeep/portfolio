import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

function Header() {
    return (
        <header className='z-10 py-8 px-4 shadow w-full'>
            <div className="xl:max-w-8/10 flex justify-between items-center mx-auto">
                <Link href='/' className='mb-0 text-white font-semi-bold text-xl tracking-wide '>
                    <svg className='group' xmlns="http://www.w3.org/2000/svg" width="67" height="90" viewBox="0 0 67 65" fill="none">
                        <path d="M33.5 0L62.5118 16.25V48.75L33.5 65L4.48815 48.75V16.25L33.5 0Z" fill="url(#paint0_linear_5_9)" />
                        <path className='duration-300 transform group-hover:translate-[-3px]' d="M61.0117 17.1279V47.8711L33.5 63.2803L5.98828 47.8711V17.1279L33.5 1.71875L61.0117 17.1279Z" fill="#04061F" stroke="url(#paint1_linear_5_9)" strokeWidth="3" />
                        <path className='duration-300 transform group-hover:translate-[-3px]' d="M23.0476 41L15.7996 24.2H19.9996L26.3356 39.08H23.8636L30.2956 24.2H34.1596L26.8876 41H23.0476ZM43.4148 41.288C42.1188 41.288 40.9108 41.08 39.7908 40.664C38.6868 40.232 37.7268 39.624 36.9108 38.84C36.0948 38.056 35.4548 37.136 34.9908 36.08C34.5428 35.024 34.3188 33.864 34.3188 32.6C34.3188 31.336 34.5428 30.176 34.9908 29.12C35.4548 28.064 36.0948 27.144 36.9108 26.36C37.7428 25.576 38.7108 24.976 39.8148 24.56C40.9188 24.128 42.1268 23.912 43.4388 23.912C44.8948 23.912 46.2068 24.168 47.3748 24.68C48.5588 25.176 49.5508 25.912 50.3508 26.888L47.8548 29.192C47.2788 28.536 46.6388 28.048 45.9348 27.728C45.2308 27.392 44.4628 27.224 43.6308 27.224C42.8468 27.224 42.1268 27.352 41.4708 27.608C40.8148 27.864 40.2468 28.232 39.7668 28.712C39.2868 29.192 38.9108 29.76 38.6388 30.416C38.3828 31.072 38.2548 31.8 38.2548 32.6C38.2548 33.4 38.3828 34.128 38.6388 34.784C38.9108 35.44 39.2868 36.008 39.7668 36.488C40.2468 36.968 40.8148 37.336 41.4708 37.592C42.1268 37.848 42.8468 37.976 43.6308 37.976C44.4628 37.976 45.2308 37.816 45.9348 37.496C46.6388 37.16 47.2788 36.656 47.8548 35.984L50.3508 38.288C49.5508 39.264 48.5588 40.008 47.3748 40.52C46.2068 41.032 44.8868 41.288 43.4148 41.288Z" fill="url(#paint2_linear_5_9)" />
                        <defs>
                            <linearGradient id="paint0_linear_5_9" x1="0" y1="32.5" x2="67" y2="32.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF4FA4" />
                                <stop offset="1" stopColor="#8B3EFF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5_9" x1="0" y1="32.5" x2="67" y2="32.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF4FA4" />
                                <stop offset="1" stopColor="#8B3EFF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_5_9" x1="16" y1="32.5" x2="51" y2="32.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF4FA4" />
                                <stop offset="0.456731" stopColor="#DB4AC0" />
                                <stop offset="1" stopColor="#8B3EFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
                <a className='inline-block text-sm border-pink-400 border text-pink-400 hover:boder-blue-500/30 duration-300 py-3 px-5 rounded-md hover:shadow-[3px_3px_0_0] hover:shadow-pink-400 transform hover:translate-[-5px]' href="mailto:vikasdeep3098@gmail.com">Get in touch</a>
            </div>
        </header>
    )
}

export default Header