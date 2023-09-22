import React from 'react'
import { VscThreeBars } from 'react-icons/vsc'
import { SiInstagram, SiYoutube, SiTiktok, SiPatreon } from 'react-icons/si'
import Link from 'next/link'

export default function Navbar({page}) {
    return (
        <div className='w-full text-stone-200 px-4 lg:px-24 py-4 shadow-md shadow-slate-400'>
            <div className='md:w-3/4 grid grid-cols-3 items-center mx-auto'>
                <button className='cursor-pointer hover:text-amber-300 transition duration-500 rounded-full hover:scale-105 mr-auto ml-0 block'>
                    <VscThreeBars size={28} />
                </button>
                <div className='invisible lg:visible'>
                    <h1 className='font-light text-2xl tracking-wide text-center'>Tatsuyoshi</h1>
                    <div className='flex items-center justify-center text-sm gap-3 mt-2'>
                        {page === 'home' ? <p className='text-gray-500'>Home</p> : <Link href="/" className='hover:text-amber-300 transition duration-500'>Home</Link>}
                        <div>
                            <div className='h-1/2 w-[30px] border-b-[1px] border-gray-400'></div>
                            <div className='h-1/2 w-[30px]'></div>
                        </div>
                        {page === 'store' ? <p className='text-gray-500'>Store</p> : <Link href="/store" className='hover:text-amber-300 transition duration-500'>Store</Link>}
                        <div>
                            <div className='h-1/2 w-[30px] border-b-[1px] border-gray-400'></div>
                            <div className='h-1/2 w-[30px]'></div>
                        </div>
                        {page === 'about' ? <p className='text-gray-500'>About</p> : <Link href="/about" className='hover:text-amber-300 transition duration-500'>About</Link>}
                    </div>
                </div>
                <div className='flex gap-4 ml-auto block mr-0'>
                    <Link href="https://www.youtube.com/channel/UCKzFivbVW4htLbnCP234VsQ" target='blank' className='rounded-full hover:text-amber-300 transition duration-500 hover:scale-105'><SiYoutube size={20} /></Link>
                    <Link href="https://www.tiktok.com/@tatsuyoshiguitar" target='blank' className='rounded-full hover:text-amber-300 transition duration-500 hover:scale-105'><SiTiktok size={20} /></Link>
                    {/* <Link href="" target='blank' className='rounded-full hover:text-amber-300 transition duration-500 hover:scale-105'><SiInstagram size={20} /></Link> */}
                    <Link href="https://www.patreon.com/tatsuyoshi" target='blank' className='rounded-full hover:text-amber-300 transition duration-500 hover:scale-105'><SiPatreon size={20} /></Link>
                </div>
            </div>
        </div>
    )
}