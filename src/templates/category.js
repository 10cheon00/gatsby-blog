import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Pagination from "../components/pagination"
import PostList from "../components/post-list"

export default class CategoryPage extends React.Component {
  render() {
    const location = { pathname: "/" }
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const posts = this.props.data.allMarkdownRemark.nodes

    return (
      <Layout location={location} title={siteTitle}>
        <PostList posts={posts} />
        {/* <Pagination
          currentPage={this.props.pageContext.currentPage}
          numPagination={this.props.pageContext.numPagination}
          paginationPageCount={this.props.pageContext.paginationPageCount}
        /> */}
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

export const blogListQuery = graphql`
  query blogListQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          category: [String]
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
