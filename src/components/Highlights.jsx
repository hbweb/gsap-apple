import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  useGSAP(() => {
    gsap.to(".section-heading", { opacity: 1, y: 0, duration: 1 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-gray-50"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading">Get the highlights</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p>What the film</p>
          </div>
        </div>

        <div className="">Content</div>
      </div>
    </section>
  );
};

export default Highlights;
