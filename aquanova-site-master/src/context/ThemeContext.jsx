/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
})

function getInitialTheme() {
  if (typeof window === "undefined") return "light"

  const saved = window.localStorage.getItem("theme")
  if (saved === "light" || saved === "dark") return saved

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    window.localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (event) => {
      const saved = window.localStorage.getItem("theme")
      if (!saved) {
        setTheme(event.matches ? "dark" : "light")
      }
    }

    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  const toggle = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
