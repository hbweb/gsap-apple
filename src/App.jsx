import ChapterNav from './components/ChapterNav'
import ExploreLineup from './components/ExploreLineUp'
import GetToKnow from './components/GetToKnow'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className=''>
      <div className="bg-gray-50 w-full">
          <Navbar />
          <ChapterNav />
      </div>
      <Hero />
      <GetToKnow />
      <ExploreLineup />
    </main>
  )
}

export default App
