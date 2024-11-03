import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo16, smallHeroVideo16 } from "../utils";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo16 : heroVideo16
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo16);
    } else {
      setVideoSrc(heroVideo16);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".section-heading", { opacity: 1, y: 0, duration: 1 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
    gsap.to(".hero-video", {
      scrollTrigger: {
        trigger: ".hero-video",
        start: "-80px 250px",
        end: "top",
        scrub: 1,
        ease: "power3.inOut",
        toggleActions: "restart pause reserve none",
      },
      borderRadius: "40px",
      width: "90%",
      duration: 1,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <section className="w-full pt-20">
      <div className="screen-max-width">
        <div className="mb-16 w-full md:flex items-end justify-between">
          <h1 className="section-heading">iPhone 16 Pro</h1>
          <div className="flex flex-wrap items-end gap-5 hero-tagline">
            <p>Designed to be loved.</p>
          </div>
        </div>
      </div>

      <div className="w-full flex-center flex-col">
        <div className="w-full xl:w-10/12 flex justify-center">
          <video
            className="pointer-events-none w-full hero-video rounded-b-[10px]"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source
              src={videoSrc}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div> */}
    </section>
  );
};

export default Hero;
