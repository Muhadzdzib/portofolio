import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCard = ({ children, delay = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -100, // muncul dari kiri, bisa ubah jadi y:100 untuk dari bawah
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // mulai animasi ketika 80% viewport
          end: "top 30%",   // selesai saat posisi tertentu
          scrub: true,      // animasi ikut gerakan scroll
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 bg-white rounded-2xl shadow-lg my-6"
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
