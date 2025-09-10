import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularGallery from "./CircularGallery";

import {
  SiHtml5,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiLeaflet,
  SiNeo4J,
  SiPhp,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Card dengan animasi muncul dari kiri saat scroll
const AnimatedCard = ({ children, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -100, // muncul dari kiri
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // mulai ketika card 85% masuk viewport
          end: "top 40%",
          scrub: true, // animasi ikut scroll
        },
      }
    );
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="bg-none rounded-lg p-5 hover:shadow-lg transition font-Antic"
    >
      {children}
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="Projects"
      className="bg-black min-h-screen px-6 md:px-12 py-12 md:py-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 font-Amoria">
        Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <AnimatedCard>
          <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-[#FFA02E]">
            Ruteball
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 font-semibold">
            Sistem rekomendasi rute transportasi umum di Kota Balikpapan
            menggunakan algoritma Dijkstra.
          </p>
          <div className="flex flex-wrap justify-between items-center border-t border-white/30 pt-3 gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-[#FFA02E] text-white rounded-md text-xs md:text-sm flex items-center">
                Web Development
              </span>
              <span className="px-2 py-1 border border-[#E65100] text-[#E65100] rounded-md text-xs md:text-sm flex items-center">
                <SiHtml5 />
              </span>
              <span className="px-2 py-1 border border-[#80DEEA] text-[#80DEEA] rounded-md text-xs md:text-sm flex items-center">
                <SiReact />
              </span>
              <span className="px-2 py-1 border border-[#08BBD9] text-[#08BBD9] rounded-md text-xs md:text-sm flex items-center">
                <SiTailwindcss />
              </span>
              <span className="px-2 py-1 border border-[#85C54D] text-[#85C54D] rounded-md text-xs md:text-sm flex items-center">
                <SiLeaflet />
              </span>
              <span className="px-2 py-1 border border-[#7B7FB5] text-[#7B7FB5] rounded-md text-xs md:text-sm flex items-center">
                <SiPhp />
              </span>
              <span className="px-2 py-1 border border-[#4CAF50] text-[#4CAF50] rounded-md text-xs md:text-sm flex items-center">
                <SiNodedotjs />
              </span>
              <span className="px-2 py-1 border border-[#0A8FFF] text-[#0A8FFF] rounded-md text-xs md:text-sm flex items-center">
                <SiNeo4J />
              </span>
            </div>
            <a
              href="#"
              className="bg-[#FFA02E] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-md hover:bg-white hover:text-[#FFA02E] transition"
            >
              Live Demo
            </a>
          </div>
        </AnimatedCard>

        {/* Card 2 */}
        <AnimatedCard delay={0.1}>
          <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-[#FFA02E]">
            Lancang Kuning
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 font-semibold">
            Website sederhana dari kelompok modul nusantara "Lancang Kuning"
            dari Program Pertukaran Mahasiswa Merdeka Batch IV Inbound
            Universitas Islam Riau.
          </p>
          <div className="flex flex-wrap justify-between items-center border-t border-white/30 pt-3 gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-[#FFA02E] text-white rounded-md text-xs md:text-sm flex items-center">
                Web Development
              </span>
              <span className="px-2 py-1 border border-[#E65100] text-[#E65100] rounded-md text-xs md:text-sm flex items-center">
                <SiHtml5 />
              </span>
              <span className="px-2 py-1 border border-[#80DEEA] text-[#80DEEA] rounded-md text-xs md:text-sm flex items-center">
                <SiReact />
              </span>
              <span className="px-2 py-1 border border-[#4CAF50] text-[#4CAF50] rounded-md text-xs md:text-sm flex items-center">
                <SiNodedotjs />
              </span>
              <span className="px-2 py-1 border border-[#3ECF8E] text-[#3ECF8E] rounded-md text-xs md:text-sm flex items-center gap-1">
                <img
                  src="/src/assets/icons/Supa.png"
                  alt="source"
                  className="w-3 h-3"
                />
              </span>
            </div>
            <a
              href="https://muhadzdzib.github.io/Lancang-Kuning/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFA02E] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-md hover:bg-white hover:text-[#FFA02E] transition"
            >
              Live Demo
            </a>
          </div>
        </AnimatedCard>

        {/* Card 3 */}
        <AnimatedCard delay={0.2}>
          <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-[#FFA02E]">
            Kost Aisha
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 font-semibold">
            Website sederhana untuk kost Aisha.
          </p>
          <div className="flex flex-wrap justify-between items-center border-t border-white/30 pt-3 gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-[#FFA02E] text-white rounded-md text-xs md:text-sm flex items-center">
                Web Development
              </span>
              <span className="px-2 py-1 border border-[#E65100] text-[#E65100] rounded-md text-xs md:text-sm flex items-center">
                <SiHtml5 />
              </span>
              <span className="px-2 py-1 border border-[#80DEEA] text-[#80DEEA] rounded-md text-xs md:text-sm flex items-center">
                <SiReact />
              </span>
              <span className="px-2 py-1 border border-[#4CAF50] text-[#4CAF50] rounded-md text-xs md:text-sm flex items-center">
                <SiNodedotjs />
              </span>
              <span className="px-2 py-1 border border-[#3ECF8E] text-[#3ECF8E] rounded-md text-xs md:text-sm flex items-center gap-1">
                <img
                  src="/src/assets/icons/Supa.png"
                  alt="source"
                  className="w-3 h-3"
                />
              </span>
            </div>
            <a
              href="#"
              className="bg-[#FFA02E] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-md hover:bg-white hover:text-[#FFA02E] transition"
            >
              Live Demo
            </a>
          </div>
        </AnimatedCard>

        {/* Card 4 */}
        <AnimatedCard delay={0.3}>
          <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-[#FFA02E]">
            Website X
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            labore!.
          </p>
          <div className="flex flex-wrap justify-between items-center border-t border-white/30 pt-3 gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 border border-[#FFA02E] text-white rounded-md text-xs md:text-sm flex items-center">
                Web Development
              </span>
              <span className="px-2 py-1 border border-[#E65100] text-[#E65100] rounded-md text-xs md:text-sm flex items-center">
                <SiHtml5 />
              </span>
              <span className="px-2 py-1 border border-[#80DEEA] text-[#80DEEA] rounded-md text-xs md:text-sm flex items-center">
                <SiReact />
              </span>
              <span className="px-2 py-1 border border-[#4CAF50] text-[#4CAF50] rounded-md text-xs md:text-sm flex items-center">
                <SiNodedotjs />
              </span>
              <span className="px-2 py-1 border border-[#3ECF8E] text-[#3ECF8E] rounded-md text-xs md:text-sm flex items-center gap-1">
                <img
                  src="/src/assets/icons/Supa.png"
                  alt="source"
                  className="w-3 h-3"
                />
              </span>
            </div>
            <a
              href="#"
              className="bg-[#FFA02E] text-white text-xs md:text-sm font-extrabold px-3 py-1 rounded-md hover:bg-white hover:text-[#FFA02E] transition"
            >
              Live Demo
            </a>
          </div>
        </AnimatedCard>
      </div>

      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-Amoria text-right">
          Poster Design
        </h2>
        <div className="relative h-[600px] w-full">
          <CircularGallery bend={0} borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>
    </section>
  );
}
