import { Card, Carousel } from "./apple-cards-carousel";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function GetToKnow() {

  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1 });
  });
  
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
    />
  ));

  return (
    <div className="my-28">
      <div className="screen-max-width">
        <div className="w-full">
          <h1 className="hero-title py-2 px-4 md:pt-10">Get to know iPhone</h1>
        </div>
      </div>
      <div className="w-full h-full pt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/assets/images/gettoknow/1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/assets/images/gettoknow/2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/assets/images/gettoknow/3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/images/gettoknow/4.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/assets/images/gettoknow/5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/assets/images/gettoknow/6.jpg",
    content: <DummyContent />,
  },
  {
    category: "Peace of Mind",
    title: "Helpful safety features. Just in case.",
    src: "/assets/images/gettoknow/7.jpg",
    content: <DummyContent />,
  },
];

export default GetToKnow;
