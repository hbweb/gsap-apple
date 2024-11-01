import ChapterNav from './components/ChapterNav'
import GetToKnow from './components/GetToKnow'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
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
      <Highlights />
    </main>
  )
}

export default App
