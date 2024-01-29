import * as React from "react"

const Category = ({ data }) => {
  const generateSubCategory = group =>
    group && group.length > 0 ? <Category data={group} className="subcategory" /> : null

  return (
    <ul>
      {data.map(({ group, fieldValue, totalCount }) => {
        return (
          <li key={fieldValue} className="category-link">
            <span>{fieldValue}</span>&nbsp;<span>({totalCount})</span>
            {generateSubCategory(group)}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
