import * as React from "react"
import { Link } from "gatsby"

import Tag from "./tag"

export default class PostList extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props);
    this.posts = props.posts
  }

  render() {
    return (
      <ol style={{ listStyle: `none`, padding: `0` }}>
        {this.posts.map(post => {
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
                    {post.frontmatter.tags
                      ? post.frontmatter.tags.map(tag => (
                          <Tag key={tag} tagName={tag}></Tag>
                        ))
                      : null}
                  </div>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    )
  }
}
