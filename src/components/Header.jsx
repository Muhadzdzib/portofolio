import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ikon burger & close (bisa install: npm i lucide-react)

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scroll ke bawah → sembunyi
      } else {
        setShow(true); // scroll ke atas → tampil
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-Antic backdrop-blur-md bg-white/10 shadow-sm z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-6 md:pr-12 py-4 flex items-center justify-end">
        {/* Nav untuk desktop */}
        <nav className="hidden md:flex space-x-6 font-medium text-white">
          <a href="#home" className="hover:text-[#FFA335]">
            Home
          </a>
          <a href="#profile" className="hover:text-[#FFA335]">
            Profile
          </a>
          <a href="#Projects" className="hover:text-[#FFA335]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#FFA335]">
            Contact
          </a>
        </nav>

        {/* Burger menu untuk mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md text-white px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block hover:text-[#FFA335]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-[#FFA335]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="block hover:text-[#FFA335]"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-[#FFA335]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
