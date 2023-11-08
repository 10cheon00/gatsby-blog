import * as React from "react"

import Bio from "../components/bio"
import { Link } from "gatsby"
import { ThemeToggler } from "./theme-toggler"
import { FaHouse } from "react-icons/fa6"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       <FaHouse className="home-icon"></FaHouse>
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div>
      <div className="nav-bar">
        <nav className="nav">
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          <ThemeToggler />
        </nav>
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        {/* <Bio /> */}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
