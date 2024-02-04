/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)

const { getUrl } = require("./gatsby-urls.js")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            category {
              name
              category {
                name
              }
            }
            tags
          }
          tableOfContents
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  let tags = new Set()

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })

      if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach(tag => {
          tags.add(tag)
        })
      }
    })
  }

  const tagTemplate = path.resolve("src/templates/tags.js")
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

  // create pagination pages.

  const postsPerPage = 10
  const paginationPageCount = Math.ceil(posts.length / postsPerPage)
  const numPagination = 5

  Array.from({ length: paginationPageCount }).forEach((_, i) => {
    // create paginated page.
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/pagination.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPagination,
        paginationPageCount,
      },
    })
  })

  // create category pages.

  const categoryPostsPerPage = 10
  const categoryPaginationPageCount = Math.ceil(posts.length / postsPerPage)

  const categoryData = await graphql(`
    query CategoryQuery {
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
  const allCategory = categoryData.data.allMarkdownRemark.group

  allCategory.forEach(category => {
    console.log(getUrl("category", category.fieldValue))
    createPage({
      path: getUrl("category", category.fieldValue),
      component: path.resolve("./src/templates/category.js"),
      context: {
        category: category.fieldValue,
      },
    })

    const allSubCategory = category.group
    allSubCategory.forEach(subCategory => {
      createPage({
        path: getUrl("category", category.fieldValue, subCategory.fieldValue),
        path: `/categories/${category.fieldValue}/${subCategory.fieldValue}`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          category: category.fieldValue,
          subCategory: subCategory.fieldValue
        },
      })
    })
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      github: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      category: Category
    }

    type Category {
      name: String
      category: Category
    }

    type Fields {
      slug: String
    }
  `)
}
