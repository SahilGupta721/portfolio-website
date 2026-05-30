import Link from "next/link";
import { event } from "../lib/analytics";

export default function Navbar() {
  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      event({
        action: "nav_click",
        category: "Navbar",
        label: `Scrolled to ${id} section`,
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip bg-transparent">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="mx-auto my-2 flex w-full min-w-0 max-w-[1280px] items-center justify-between gap-4 rounded-full border border-gray-200 bg-white/90 px-4 py-[0.85rem] shadow-sm backdrop-blur-[12px]">
          <Link className="flex min-w-0 shrink items-center gap-3 no-underline" href="/">
            <svg
              className="h-7 w-7 text-[#e07b5b] transition-transform duration-300 hover:scale-110"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path d="M24 4H42V30.6667H24V44H6V17.3333H24V4Z"></path>
            </svg>
            <span className="truncate text-[1.1rem] font-bold leading-none tracking-[-0.02em] text-gray-900">
              Sahil Gupta
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center md:flex">
            <div className="flex gap-6 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className="cursor-pointer text-[0.9rem] font-semibold text-gray-700 no-underline transition-colors duration-200 ease-in-out hover:text-[#e07b5b]"
                  onClick={() => handleScroll(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
