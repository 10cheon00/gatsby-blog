import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"

import stringToRGB from "../helpers/string-to-rgb";

var kebabCase = require("lodash.kebabcase")

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <Seo
      title="all tags"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <div className="tags">
      <h1>Tags</h1>
      <ul className="tags-list">
        {group.map(tag => (
          <li 
            className="tags-list-item" 
            key={tag.fieldValue} 
            style={{
              backgroundColor:`#${stringToRGB(tag.fieldValue)}`
            }}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`
