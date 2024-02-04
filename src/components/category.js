import { Link } from "gatsby"
import * as React from "react"

const Category = ({
  name,
  count,
  prefix,
  path,
  children,
}) => {
  /*
  \u00a0
  *
  +-- *
  |   +--
  |   `--
  +-- *
  |   `-- *
  |       +--
  |       `--
  `-- *
      +-- *
      |   `--
      `-- *
  
  */

  return (
    <li key={name} className="category-link" data-content={prefix}>
      <Link to={path}>
        <span>{name}</span>
        &nbsp;<span>({count})</span>
      </Link>
      {children}
    </li>
  )
}

export default Category
