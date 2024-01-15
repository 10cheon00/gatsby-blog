import * as React from "react"

class TableOfContents extends React.Component {
  componentDidMount() {
    window.addEventListener(`scroll`, this.updateTableOfContents)
  }

  updateTableOfContents() {
    const headers = document.querySelectorAll(`
      section[itemProp="articleBody"] h1,
      section[itemProp="articleBody"] h2,
      section[itemProp="articleBody"] h3
    `)
    const links = document.querySelectorAll(`div.table-of-contents a`)
    const topBarHeight = parseInt(
      getComputedStyle(document.querySelector(`.top-bar`)).height
    )

    const currentHeader = Array.from(headers).find(e => {
      const pos = e.getBoundingClientRect()
      return pos.y > topBarHeight
    })

    links.forEach(link => {
      const decodedId = decodeURI(new URL(link.href).hash).slice(1)
      if (
        link.textContent === currentHeader?.textContent &&
        decodedId === currentHeader.id
      ) {
        link.className = `active`
      } else {
        link.className = ``
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.updateTableOfContents)
  }

  render() {
    return (
      <div className="table-of-contents-layout">
        <div
          className="table-of-contents"
          dangerouslySetInnerHTML={{ __html: this.props.tableOfContents }}
        ></div>
      </div>
    )
  }
}

export default TableOfContents
