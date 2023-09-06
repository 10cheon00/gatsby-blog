import * as React from "react"
import { ThemeToggler as DarkModeThemeToggler} from "gatsby-plugin-dark-mode"

class ThemeToggler extends React.Component {
  render() {
    return (
      <DarkModeThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-toggler">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span>Dark mode</span>
          </label>
        )}
      </DarkModeThemeToggler>
    )
  }
}

export { ThemeToggler }
