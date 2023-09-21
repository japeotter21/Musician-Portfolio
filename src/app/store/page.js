import Navbar from '../Components/Navbar'
import StoreItem from '../Components/StoreItem'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-radial from-slate-500 to-neutral-800">
      <Navbar page="store" />
      <StoreItem />
    </main>
  )
}
