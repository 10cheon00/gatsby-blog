import * as React from "react"
import { ThemeToggler as DarkModeThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMoon, FaSun } from "react-icons/fa6"


class ThemeToggler extends React.Component {
  render() {
    const changeUtteranceTheme = () => {
      const utterancesEl = document.querySelector(".utterances-frame")
      if (utterancesEl) {
        const theme = document.body.classList.contains("dark")
          ? "github-dark"
          : "github-light"
        const message = {
          type: "set-theme",
          theme: theme,
        }
        utterancesEl.contentWindow.postMessage(message, "https://utteranc.es")
      }
    }
    return (
      <DarkModeThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-toggler">
            <FaSun></FaSun>
            <input
              type="checkbox"
              onChange={e => {
                toggleTheme(e.target.checked ? "dark" : "light")
                changeUtteranceTheme()
              }}
              checked={theme === "dark"}
            />{" "}
            <FaMoon></FaMoon>
          </label>
        )}
      </DarkModeThemeToggler>
    )
  }
}

export { ThemeToggler }
