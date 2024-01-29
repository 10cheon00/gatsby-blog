import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Category from "./category"
import Bio from "./bio"

const SideBar = ({children}) => {
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
