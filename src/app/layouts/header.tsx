import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='z-10 p-4 shadow fixed w-full flex justify-between items-center'>
            <Link href='/' className='mb-0'>VIKASDEEP CHAUDHARY</Link>
            <button className='bg-teal-100 py-2 px-4 rounded' type='button'>Get in touch</button>
        </header>
    )
}

export default Header