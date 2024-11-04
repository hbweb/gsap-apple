import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExploreLineup = () => {
  useGSAP(() => {
    gsap.to(".section-heading", { opacity: 1, y: 0, duration: 1 });
  }, []);
  return (
    <section
      id="exploreLineup"
      className="w-screen overflow-hidden h-full common-padding bg-gray-50"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading">Explore the lineup</h1>
          <div className="flex flex-wrap items-end gap-5">
            <a href="#" className="text-blue hover:underline">Compare all models ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreLineup;
