import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(
    () => {
      if (!navRef.current) return;

      gsap.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      const logo = navRef.current.querySelector("[data-nav-logo]");
      const links = navRef.current.querySelectorAll("[data-nav-link]");

      gsap.from([logo, ...links], {
        y: 12,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.2,
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0" data-nav-logo>
            <a href="/" className="group flex items-center space-x-2">
              <img
                src="/components/Hero/logo.png"
                alt="logo"
                className="w-24 sm:w-32 md:w-44"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-black/30 backdrop-blur-lg border-t border-white/10">
          <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Desktop Nav Link Component
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      data-nav-link
      className="relative px-4 py-2 text-white/90 font-medium text-sm tracking-wide hover:text-white transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-white/90 font-medium text-base hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
    >
      {children}
    </a>
  );
}
