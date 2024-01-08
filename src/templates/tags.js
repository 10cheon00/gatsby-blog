import React from "react"
import { Link, graphql } from "gatsby"
import { FaTags } from "react-icons/fa6"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/post-list"
import Tag from "../components/tag"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark
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
      <PostList posts={nodes} />
      <Link to="/tags"><FaTags />All tags</Link>
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
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`
