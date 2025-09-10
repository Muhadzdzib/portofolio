import profilePic from "../assets/img/Galang.jpg";
import LogoLoop from "./LogoLoop";
import TextType from "./TextType";

import {
  SiFigma,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiChakraui,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiAdobephotoshop,
  SiNeo4J,
} from "react-icons/si";

const techLogos = [
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiChakraui />, title: "Chakra UI", href: "https://chakra-ui.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },

  {
    node: <SiNeo4J />,
    title: "Neo4j",
    href: "https://www.Neo4j.com/products/photoshop.html",
  },
  {
    node: <SiAdobephotoshop />,
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
  },
];

export default function About() {
  return (
    <section
      id="profile"
      className="min-h-screen w-full bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24"
    >
      {/* Kiri - Text + Logo */}
      <div className="w-full md:w-1/2 min-h-[600px] flex flex-col justify-center text-white">
        {/* Atas: Text */}
        <div>
          <TextType
            text={["Hello ...", "Hallo ...", "Assalamualaikum ..."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="font-Amoria text-4xl sm:text-5xl md:text-7xl text-[#FFA335]"
          />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-Antic leading-relaxed text-gray-300">
            <span className="text-[#FFA335] font-Antic">Galang</span>, seorang
            fresh graduated yang tertarik pada banyak hal khususnya pengembangan
            website.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-5">
            <div className="border  rounded-lg px-4 py-1">
              <p className="m-0 opacity-80 font-['Antic']">S.Kom</p>
            </div>

            <div className="border  rounded-lg px-4 py-1">
              <p className="m-0 opacity-80 font-['Antic']">UI/UX</p>
            </div>

            <div className="border  rounded-lg px-4 py-1">
              <p className="m-0 opacity-80 font-['Antic']">Frontend</p>
            </div>

            <div className="border  rounded-lg px-4 py-1">
              <p className="m-0 opacity-80 font-['Antic']">Graphic Designer</p>
            </div>
          </div>
        </div>

        {/* Bawah: Expertise + Logo Loop */}
        <div className="mt-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-Amoria mb-6">
            Expertise
          </h3>
          <div
            className="relative overflow-hidden pt-4"
            style={{ height: "75px" }}
          >
            <LogoLoop
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={45}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>

      {/* Kanan - Foto */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-12 md:mt-0 relative">
        {/* Foto */}
        <img
          src={profilePic}
          alt="Galang"
          className="relative z-10 w-64 sm:w-72 md:w-96 h-auto object-cover border-3 border-[#FFA335] grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}
