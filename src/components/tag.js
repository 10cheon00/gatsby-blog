import React from "react"
import { Link } from "gatsby"

import stringToRGB from "../helpers/string-to-rgb"

var kebabCase = require("lodash.kebabcase")

const Tag = ({
  tagName,
  relatedPostsNumber = undefined,
  enableLink = true,
}) => {
  const relatedPostsNumberString =
    relatedPostsNumber !== undefined ? `(${relatedPostsNumber})` : ``
    
  let element = `${tagName} ${relatedPostsNumberString}`;
  if (enableLink) {
    element = (
      <Link to={`/tags/${kebabCase(tagName)}/`}>
        {tagName} {relatedPostsNumberString}
      </Link>
    )
  }
  
  return (
    <span
      class="tag"
      style={{
        backgroundColor: `#${stringToRGB(tagName)}`,
      }}
    >
      {element}
    </span>
  )
}

export default Tag
