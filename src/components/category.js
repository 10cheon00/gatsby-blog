import * as React from "react"

const Category = ({ data }) => {
  return (
    <ul>
      {data.map(({ group, fieldValue, totalCount }) => {
        console.dir(group)
        return (
          <li key={fieldValue} className="category-link">
            <span>{fieldValue}</span>&nbsp;<span>({totalCount})</span>
            {group ? <Category data={group} className="subcategory" /> : null}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
