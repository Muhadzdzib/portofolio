import { useEffect } from "react";
import Beams from "./Beams";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurOverlay = document.getElementById("home-blur-overlay");
      if (blurOverlay) {
        // Scroll 0 → blur 0px, Scroll 300px → blur 10px
        const blurValue = Math.min(scrollY / 30, 10);
        blurOverlay.style.backdropFilter = `blur(${blurValue}px)`;
        blurOverlay.style.backgroundColor = `rgba(0,0,0,${blurValue / 20})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full bg-black flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Beams */}
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={15}
          beamNumber={12}
          lightColor="#FFA335"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={50}
        />
      </div>

      {/* Overlay Blur */}
      <div
        id="home-blur-overlay"
        className="absolute inset-0 transition-all duration-300"
      ></div>

      {/* Title */}
      <div className="pt-20 px-6 md:px-12 relative z-10">
        <h1 className="text-white font-Amoria tracking-wide text-5xl sm:text-6xl md:text-8xl">
          Portofolio
        </h1>
      </div>

      {/* Tahun */}
      <div className="absolute bottom-8 left-6 md:left-12 text-white font-Antic tracking-widest z-10 text-sm sm:text-base md:text-lg">
        2020 - 2025
      </div>

      {/* Nama */}
      <div className="absolute bottom-8 right-6 md:right-12 text-right z-10 text-sm sm:text-base md:text-lg">
        <p className="text-white font-Antic">GALANG</p>
        <p className="text-[#FFA335] font-Antic">HARDY MUHADZDZIB</p>
      </div>
    </section>
  );
}
