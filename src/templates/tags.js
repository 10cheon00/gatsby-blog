import React from "react"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import stringToRGB from "../helpers/string-to-rgb"
import Tag from "../components/tag"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with `

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={tagHeader} />
      <h1>
        {tagHeader}
        <Tag tagName={tag} enableLink={false}></Tag>
      </h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>
                {title} | {date}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
