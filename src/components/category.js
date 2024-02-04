import { Link } from "gatsby"
import * as React from "react"

const Category = ({
  name,
  count,
  prefix,
  path,
  children,
}) => {
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
