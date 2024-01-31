import * as React from "react"

import TableOfContents from "../components/table-of-contents"
import TopBar from "./top-bar"
import SideBar from "./side-bar"

const Layout = ({ location, title, tableOfContents, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <TopBar title={title} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
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
