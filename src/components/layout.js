import * as React from "react"

import TableOfContents from "../components/table-of-contents"
import TopBar from "./top-bar"
import SideBar from "./side-bar"

const Layout = ({ location, title, tableOfContents, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const openSideBar = () => {
    document.body.classList.add("side-bar-toggled")
  }

  const closeSideBar = () => {
    document.body.classList.remove("side-bar-toggled")
  }

  React.useEffect(closeSideBar)

  return (
    <div>
      <TopBar openSideBar={openSideBar} title={title} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <div className="side-bar-background" onClick={closeSideBar}></div>
        <main>
          <SideBar tableOfContents={tableOfContents}>
            {tableOfContents ? (
              <TableOfContents tableOfContents={tableOfContents} />
            ) : null}
          </SideBar>
          <section>{children}</section>
        </main>
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
