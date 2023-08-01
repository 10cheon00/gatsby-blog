import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"

import stringToRGB from "../helpers/string-to-rgb"
import kebabCase from "lodash.kebabcase"

export default class PaginationPage extends React.Component {
  render() {
    const location = { pathname: "/" }
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const posts = this.props.data.allMarkdownRemark.nodes

    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                        <small className="post-date">
                          {post.frontmatter.date}
                        </small>
                      </Link>
                    </h2>
                    <div className="tags">
                      <ul>
                        {post.frontmatter.tags
                          ? post.frontmatter.tags.map(tag => (
                              <li
                                key={kebabCase(tag)}
                                style={{
                                  backgroundColor: `#${stringToRGB(tag)}`,
                                }}
                              >
                                <Link to={`/tags/${kebabCase(tag)}`}>
                                  {kebabCase(tag)}
                                </Link>
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </header>
                  {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
                </article>
              </li>
            )
          })}
        </ol>
        <Pagination 
          currentPage={this.props.pageContext.currentPage}
          numPagination={this.props.pageContext.numPagination}
          paginationPageCount={this.props.pageContext.paginationPageCount}
          />
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
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
