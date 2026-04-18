import { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext"

import LogoBranca from "../assets/logo branca2.png"
import LogoPreta from "../assets/logo site2.png"

const navItems = [
  { to: "/instrucoes", label: "Instruções" },
  { to: "/componentes", label: "Componentes" },
  { to: "/referencias", label: "Referências" },
  { to: "/jogo", label: "Jogo" },
  { to: "/quemsomos", label: "Quem somos" },
]

function navClass({ isActive }) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition",
    isActive
      ? "bg-[#0A2A83] text-white shadow-md dark:bg-white dark:text-[#071028]"
      : "text-[#0A1A2F]/75 hover:bg-[#0A1A2F]/5 hover:text-[#0A1A2F] dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white",
  ].join(" ")
}

export function Header() {
  const { theme, toggle } = useContext(ThemeContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#050816]/75">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0A1A2F]/10 bg-white text-[#0A1A2F] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={22} />
        </button>

        <Link to="/" className="flex items-center gap-3">
          <img src={LogoPreta} alt="AquaNova" className="h-11 w-auto dark:hidden" />
          <img src={LogoBranca} alt="AquaNova" className="hidden h-11 w-auto dark:block" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[#0A1A2F]/10 bg-white px-4 text-sm font-medium text-[#0A1A2F] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white"
          aria-label="Alternar tema"
        >
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          <span className="hidden sm:inline">{theme === "dark" ? "Escuro" : "Claro"}</span>
        </button>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
            aria-label="Fechar menu"
          />

          <aside className="absolute left-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-white p-6 shadow-2xl dark:bg-[#050816]">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3">
                <img src={LogoPreta} alt="AquaNova" className="h-10 w-auto dark:hidden" />
                <img src={LogoBranca} alt="AquaNova" className="hidden h-10 w-auto dark:block" />
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0A1A2F]/10 bg-white text-[#0A1A2F] dark:border-white/10 dark:bg-white/5 dark:text-white"
                onClick={() => setSidebarOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl px-4 py-3 text-base font-medium transition",
                      isActive
                        ? "bg-[#0A2A83] text-white dark:bg-white dark:text-[#071028]"
                        : "text-[#0A1A2F]/80 hover:bg-[#0A1A2F]/5 hover:text-[#0A1A2F] dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white",
                    ].join(" ")
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={toggle}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0A2A83] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 dark:bg-white dark:text-[#071028]"
              >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                {theme === "dark" ? "Tema claro" : "Tema escuro"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
