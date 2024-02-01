import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaHouse, FaXmark } from "react-icons/fa6"

import Category from "./category"
import Bio from "./bio"

const SideBar = ({closeSideBar ,children}) => {
  const data = useStaticQuery(graphql`
    query SideBarQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: { name: SELECT } } }) {
          group(
            field: { frontmatter: { category: { category: { name: SELECT } } } }
          ) {
            fieldValue
            totalCount
          }
          fieldValue
          totalCount
        }
      }
    }
  `)

  const group = data.allMarkdownRemark.group

  return (
    <aside className="side-bar">
      <div className="side-bar-icons">
        <Link to="/" className="side-bar-home" onClick={closeSideBar}>
          <FaHouse size="30"/>
        </Link>
        <FaXmark size="30" className="side-bar-xmark" onClick={closeSideBar}/>
      </div>
      <Bio />
      <div className="categories">
        <p className="categories-header">All Categories</p>
        <Category data={group}/>
      </div>
      {children}
    </aside>
  )
}

export default SideBar
