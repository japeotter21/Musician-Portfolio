import Image from 'next/image'
import Spotify from './Components/Spotify'
import Navbar from './Components/Navbar'
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-radial from-slate-500 to-neutral-800">
      <Navbar page="home" />
      <div className='pt-12 lg:px-24 px-4 w-full flex flex-col items-center pb-24'>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between w-full md:w-1/2 mb-8'>
          <p className='text-stone-200 line-clamp-6 mt-4 md:mt-0 z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Image src="/sigh.png" height={240} width={240} className='rounded-md saturate-50 brightness-90'/>
        </div>
        <Spotify />
      </div>
    </main>
  )
}
