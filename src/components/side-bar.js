import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Category from "./category"

const SideBar = () => {
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
    <div className="side-bar">
      Categories
      <Category data={group}/>
    </div>
  )
}

export default SideBar
