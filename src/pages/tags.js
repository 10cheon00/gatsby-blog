import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"

import Tag from "../components/tag"

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
    <h1>Tags</h1>
    <div className="tags">
      {group.map(tag => (
        <Tag tagName={tag.fieldValue} relatedPostsNumber={tag.totalCount}></Tag>
      ))}
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
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
