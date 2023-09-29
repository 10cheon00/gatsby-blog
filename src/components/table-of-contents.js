import * as React from "react"

class TableOfContents extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.updateTableOfContents)
  }

  updateTableOfContents() {
    const headers = document.querySelectorAll(`
      section[itemProp="articleBody"] h1,
      section[itemProp="articleBody"] h2,
      section[itemProp="articleBody"] h3
    `)
    const links = document.querySelectorAll(`div.table-of-contents a`)
    const halfOfWindowHeight = window.innerHeight / 2;
    const currentHeader = Array.from(headers)
      .reverse()
      .find(e => {
        const pos = e.getBoundingClientRect()
        return pos.y < halfOfWindowHeight
      })

    links.forEach(e => {
      if (e.textContent === currentHeader?.textContent) {
        e.className = "active"
      } else {
        e.className = ""
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateTableOfContents)
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
