import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Projects", to: "Projects" },
    { name: "Experience", to: "experience" }, // keep lowercase to match section id
    { name: "Contact", to: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      {/* Glass bar */}
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 mt-3 rounded-2xl border border-white/30 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Brand */}
            <div className="select-none">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent">
                Aayushi
              </span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden items-center gap-8 md:flex">
              {menuItems.map((item) => (
                <li key={item.to} className="relative">
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    spy={true}
                    activeClass="text-emerald-700"
                    className="cursor-pointer px-1 text-[15px] font-semibold text-gray-800 transition-colors hover:text-emerald-700"
                  >
                    {item.name}
                  </Link>
                  {/* animated underline */}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300 group-hover:w-full md:group">
                    {/* empty; styling via group */}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/5 bg-white/60 p-2 backdrop-blur-md"
            >
              {isOpen ? (
                // close icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile drawer */}
          {isOpen && (
            <div className="md:hidden overflow-hidden">
              <ul className="space-y-1 px-4 pb-4">
                {menuItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-90}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-gray-800 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
