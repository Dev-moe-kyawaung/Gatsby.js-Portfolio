import React, { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    )
  }, [dark])

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle

