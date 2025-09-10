import {
  SiGmail,
  SiWhatsapp,
  SiInstagram,
  SiGithub,
  SiFacebook,
  SiDiscord,
  SiLinkedin,
} from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-black text-center px-6"
    >
      <h2 className="text-6xl font-bold mb-6 font-Amoria text-white">
        Reach Me Here
      </h2>
      <div className="flex space-x-5 text-[#FFA02E]">
        <a
          href="mailto:galangmuhadzdzib@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 text-3xl"
        >
          <SiGmail />
        </a>
         <a
          href="https://www.linkedin.com/in/galang-hardy-muhadzdzib-ab5039319/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-3xl"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/galanghardy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 text-3xl"
        >
          <SiInstagram />
        </a>
        <a
          href="https://www.facebook.com/muhadzdzib.2025/?locale=id_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-3xl"
        >
          <SiFacebook />
        </a>
        <a
          href="https://github.com/Muhadzdzib"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-3xl"
        >
          <SiGithub />
        </a>
        <a
          href="https://discord.gg/570884908822691852"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 text-3xl"
        >
          <SiDiscord />
        </a>
        <a
          href="https://wa.me/6283897321220"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 text-3xl"
        >
          <SiWhatsapp />
        </a>
      </div>
    </section>
  );
}
