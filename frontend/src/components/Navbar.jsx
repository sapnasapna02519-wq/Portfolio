import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-4">
        <a href="#home" className="text-sm font-bold uppercase tracking-wider text-brand-600">
          Sapna Portfolio
        </a>

        <button
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm md:hidden dark:border-slate-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 top-[68px] w-full flex-col gap-2 border-y border-slate-200 bg-white p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-950`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold dark:border-slate-700"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
