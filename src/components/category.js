import { Link } from "gatsby"
import * as React from "react"

const Category = ({ data, depth = 0, superCategoryName = null }) => {
  const generateSubCategory = (group, superCategoryName) =>
    group && group.length > 0 ? (
      <Category
        data={group}
        depth={depth + 1}
        superCategoryName={superCategoryName}
        className="subcategory"
      />
    ) : null
  const indent = "|\u00a0\u00a0\u00a0".repeat(depth)
  const generateTreePrefix = index =>
    `${indent}${index !== data.length - 1 ? "+-- " : "`-- "}`

  return (
    <ul>
      {data.map(({ group, fieldValue, totalCount }, index) => {
        return (
          <li
            key={fieldValue}
            className="category-link"
            data-content={generateTreePrefix(index)}
          >
            <Link
              to={
                superCategoryName == null
                  ? `/categories/${fieldValue}`
                  : `/categories/${superCategoryName}/${fieldValue}`
              }
            >
              <span>{fieldValue}</span>
              &nbsp;<span>({totalCount})</span>
            </Link>
            {generateSubCategory(group, fieldValue)}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
