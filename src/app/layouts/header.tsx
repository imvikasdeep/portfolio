import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='z-10 p-4 shadow w-full'>
            <div className="xl:max-w-8/10 flex justify-between items-center mx-auto">
                <Link href='/' className='mb-0 text-white font-semi-bold text-xl tracking-wide'>VIKASDEEP CHAUDHARY</Link>
                <a className='shadow-[0_0_20px_0] shadow-cyan-500/50 inline-block bg-blue-800/40 border-blue-400/20 border hover:bg-blue-400/10 text-white duration-300 py-2 px-5 rounded-xl' href="mailto:vikasdeep3098@gmail.com">Get in touch</a>
            </div>
        </header>
    )
}

export default Header