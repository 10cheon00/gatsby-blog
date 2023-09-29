import * as React from "react"
import * as ReactDOM from "react-dom"

const TableOfContents = props => {
  const elRef = React.useRef()
  const [headerLinkPairs, setHeaderLinkPairs] = React.useState([])

  React.useEffect(() => {
    const documentEl = ReactDOM.findDOMNode(props.documentRef.current)
    const linkElements = ReactDOM.findDOMNode(elRef.current).querySelectorAll(
      "a"
    )
    const headerElements = Array.from(documentEl.querySelectorAll("h1, h2, h3"))
    setHeaderLinkPairs(headerElements.reduce((acc, cur) => {
      acc.push({
        headerEl: cur,
        linkEl: Array.from(linkElements).find(
          e => e.textContent === cur.textContent
        ),
      })
      return acc
    }, []))

    window.addEventListener("scroll", () => {
      headerLinkPairs.slice(0).reverse().reduce((acc, cur) => {
        const yPos = cur.headerEl.getBoundingClientRect().y;
        if (acc || yPos > 0) {
          cur.linkEl.className = "";
        }
        else {
          cur.linkEl.className = "active";
          acc = true;
        }
        return acc;
      }, false)
    })
  }, [])

  return (
    <div className="table-of-contents-layout">
      <div
        ref={elRef}
        className="table-of-contents"
        dangerouslySetInnerHTML={{ __html: props.html }}
      ></div>
    </div>
  )
}

export default TableOfContents
