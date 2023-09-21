import Image from 'next/image'
import Navbar from '../Components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-radial from-slate-500 to-neutral-800">
      <Navbar page="about" />
      <div className='px-24 pt-12 w-full flex flex-col items-center'>
      </div>
    </main>
  )
}
