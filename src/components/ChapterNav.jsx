import { chapterLists } from "../constants";

const ChapterNav = () => {
  return (
    <div className="screen-max-width overflow-hidden">
      <section className="py-2 h-24 sm:px-10 px-5 gap-8 flex-center">
        {chapterLists.map((chapter) => (
          <div
            key={chapter.id}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={chapter.icon}
              alt={chapter.title}
              className="w-10 h-10"
            />
            <div className="text-xs">{chapter.title}</div>
            {chapter.newStatus && (
              <div className="text-[#b64400]  text-xs">New</div>
            )}
          </div>
        ))}
      </section>

      <div className="flex-center mt-2 bg-[#f5f5f7] py-2 text-xs px-4">
        Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade
        in iPhone 12 or higher
      </div>
    </div >
  );
};

export default ChapterNav;
