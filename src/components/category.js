import { Link } from "gatsby"
import * as React from "react"

const Category = ({ data, subTreeCount = 0 }) => {
  const generateSubCategory = group =>
    group && group.length > 0 ? (
      <Category
        data={group}
        subTreeCount={subTreeCount + 1}
        className="subcategory"
      />
    ) : null

  const indent = "|\u00a0\u00a0\u00a0".repeat(subTreeCount)
  const generateTreePrefix = index =>
    `${indent}${index !== data.length - 1 ? "+-- " : "`-- "}`

  return (
    <ul>
      {data.map(({ group, fieldValue, totalCount }, index) => {
        return (
          <li key={fieldValue} className="category-link">
            <Link to={`/categories/${fieldValue}`}>
              <span>{`${generateTreePrefix(index)}${fieldValue}`}</span>
              &nbsp;<span>({totalCount})</span>
            </Link>
            {generateSubCategory(group)}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
