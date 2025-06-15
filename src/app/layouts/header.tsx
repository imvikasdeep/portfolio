import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='z-10 p-4 shadow w-full'>
            <div className="xl:max-w-8/10 flex justify-between items-center mx-auto">
                <Link href='/' className='mb-0 text-white font-semi-bold text-xl tracking-wide'>VIKASDEEP CHAUDHARY</Link>
                <a className='inline-block border-violet-700 border hover:bg-blue-500/20 text-violet-700 duration-300 py-2 px-5 rounded-xl' href="mailto:vikasdeep3098@gmail.com">Get in touch</a>
            </div>
        </header>
    )
}

export default Header