import React, { useRef, useState } from "react";
import { chapterLists } from "../constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const CategoryItems = () => {
  const [moving, setMoving] = useState(false);
  const categoryRef = useRef(null);

  const handleScroll = (direction) => {
    setMoving(true);

    if (categoryRef.current) {
      const { scrollLeft, clientWidth } = categoryRef.current;

      console.log(scrollLeft, clientWidth);

      const scrollDirection =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;

      categoryRef.current.scrollTo({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex justify-center group watch my-4">
      {moving && (
        <FiChevronLeft
          className="absolute cursor-pointer left-0 opacity-0 group-hover:opacity-100  top-[50%] translate-y-[-50%] text-lg h-full z-20 border-r  w-6 bg-gray-50"
          onClick={() => handleScroll("left")}
        />
      )}

      <div
        className="flex items-center gap-4 px-4 overflow-y-scroll scrollbar-hide"
        ref={categoryRef}
      >
        {chapterLists?.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer w-[80px] h-[90px]`}
            >
              <img
                src={data.icon}
                alt={data.title}
                className="w-10 h-10"
              />
              <div className="text-xs">{data.title}</div>
              {data.newStatus && (
                <div className="text-[#b64400]  text-xs">New</div>
              )}
            </div>
          );
        })}
      </div>

      <FiChevronRight
        className="absolute cursor-pointer right-0 top-[50%] opacity-0 group-hover:opacity-100  translate-y-[-50%] text-lg h-full z-20 border-l w-6 bg-gray-50"
        onClick={() => handleScroll("right")}
      />
    </div>
  );
};

export default CategoryItems;
