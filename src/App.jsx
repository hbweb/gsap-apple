import CategoryItems from "./components/CategoryItems";
import ChapterNav from "./components/ChapterNav";
import ExploreLineup from "./components/ExploreLineUp";
import GetToKnow from "./components/GetToKnow";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="">
      <div className="bg-gray-50 w-full">
        <Navbar />
        <CategoryItems />

        <div className="flex-center mt-2 bg-[#f5f5f7] py-2 text-xs px-4">
          Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you
          trade in iPhone 12 or higher
        </div>
      </div>
      <Hero />
      <GetToKnow />
      <ExploreLineup />
    </main>
  );
}

export default App;
