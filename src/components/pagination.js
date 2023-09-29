import * as React from "react"

const Pagination = ({ currentPage, numPagination, paginationPageCount }) => {
  const previousPaginationLastPage =
    Math.floor((currentPage - 1) / numPagination) * numPagination
  const nextPaginationFirstPage =
    Math.floor((currentPage - 1) / numPagination + 1) * numPagination + 1

  let previousPagination, nextPagination
  if (currentPage > numPagination) {
    previousPagination = (
      <a
        className="pagination-link pagination-previous"
        href={`/${previousPaginationLastPage}`}
      >
        {"<<"}
      </a>
    )
  }
  if (nextPaginationFirstPage <= paginationPageCount) {
    nextPagination = (
      <a
        className="pagination-link pagination-next"
        href={`/${nextPaginationFirstPage}`}
      >
        {">>"}
      </a>
    )
  }

  const paginationList = Array(paginationPageCount)
    .fill()
    .map((_, i) => i + 1)
    .slice(previousPaginationLastPage, nextPaginationFirstPage - 1)

  return (
    <div className="pagination">
      {previousPagination}
      {paginationList.map(index => {
        return (
          <a
            className={`pagination-link${
              index === currentPage ? " pagination-current-link" : ""
            }`}
            href={`/${index !== 1 ? `${index}` : ``}`}
            key={index}
          >
            {index}
          </a>
        )
      })}
      {nextPagination}
    </div>
  )
}

export default Pagination
