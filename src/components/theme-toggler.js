import * as React from "react"
import { ThemeToggler as DarkModeThemeToggler} from "gatsby-plugin-dark-mode"

class ThemeToggler extends React.Component {
  render() {
    return (
      <DarkModeThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </DarkModeThemeToggler>
    )
  }
}

export { ThemeToggler }
