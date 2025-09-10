import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#profile", label: "Profile" },
  { href: "#Projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-6 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-500 ${
        show
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
      style={{ width: "clamp(250px, 60vw, 600px)" }}
    >
      <div className="flex items-center justify-center px-6 py-2 rounded-full font-Antic shadow-xl bg-white/20 backdrop-blur-lg border border-white/30">
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 rounded-full transition-colors duration-300 hover:bg-[#FFA335]/20 hover:text-[#FFA335]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-lg shadow-lg px-6 py-4 flex flex-col gap-4 text-white animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FFA335] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
// Tambahkan animasi fadeIn di tailwind.config jika ingin lebih smooth
