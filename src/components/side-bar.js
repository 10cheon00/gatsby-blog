import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaHouse, FaXmark } from "react-icons/fa6"

import Category from "./category"
import Bio from "./bio"

import { resolveUrl } from "../../gatsby-urls"

const SideBar = ({ children }) => {
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

  const categories = data.allMarkdownRemark.group

  const getPrefix = (categoryIndex, subCategoryIndex) => {
    if (subCategoryIndex == null) {
      return `${
        categoryIndex < categories.length - 1 ? "+--\u00a0" : "`--\u00a0"
      }`
    }
    return `${
      categoryIndex < categories.length - 1
        ? "|\u00a0\u00a0\u00a0"
        : "\u00a0\u00a0\u00a0\u00a0"
    }${
      subCategoryIndex < categories[categoryIndex].group.length - 1
        ? "+--\u00a0"
        : "`--\u00a0"
    }`
  }

  return (
    <aside className="side-bar">
      <div className="side-bar-icons">
        <Link to="/" className="side-bar-home">
          <FaHouse size="30" />
        </Link>
        <FaXmark size="30" className="side-bar-xmark" />
      </div>
      <Bio />
      <div className="categories">
        <p className="categories-header">All Categories</p>
        <ul>
          {categories.map((category, categoryIndex) => {
            const subCategories = category.group

            return (
              <Category
                key={category.fieldValue}
                name={category.fieldValue}
                count={category.totalCount}
                prefix={getPrefix(categoryIndex)}
                path={resolveUrl("category", category.fieldValue)}
              >
                {subCategories == null
                  ? null
                  : subCategories.map((subCategory, subCategoryIndex) => {
                      return (
                        <Category
                          key={subCategory.fieldValue}
                          name={subCategory.fieldValue}
                          count={subCategory.totalCount}
                          prefix={getPrefix(categoryIndex, subCategoryIndex)}
                          path={resolveUrl(
                            "category",
                            category.fieldValue,
                            subCategory.fieldValue
                          )}
                        />
                      )
                    })}
              </Category>
            )
          })}
        </ul>
      </div>
      {children}
    </aside>
  )
}

export default SideBar
