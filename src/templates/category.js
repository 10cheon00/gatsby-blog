import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"
import PostList from "../components/post-list"

export default class CategoryPage extends React.Component {
  render() {
    const location = { pathname: "/" }
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const posts = this.props.data.allMarkdownRemark.nodes

    return (
      <Layout location={location} title={siteTitle}>
        <h1>
          Posts
        </h1>
        <PostList posts={posts} />
      </Layout>
    )
  }
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const categoryPageQuery = graphql`
  query categoryPageQuery($category: String!, $subCategory: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          category: {
            name: { 
              eq: $category 
            }
            category: { name: { eq: $subCategory } }
          }
        }
      }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
`
