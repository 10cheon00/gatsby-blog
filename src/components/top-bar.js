/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { FaGithub, FaHouse } from "react-icons/fa6"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { ThemeToggler } from "./theme-toggler"

const TopBar = ({ title }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="top-bar">
      <StaticImage
        className="top-bar-icon"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/top-bar-icon.png"
        width={125}
        height={125}
        quality={95}
        alt="Profile picture"
      />
      <Link className="home-link" to="/">
        <h1 className="main-heading">{title}</h1>
        <FaHouse size="30" className="main-heading-icon" />
      </Link>
      <div className="divider"></div>
      <div className="top-bar-links">
        <Link to="/tags">
          <h1>Tags</h1>
        </Link>
        {/* add custom links */}
      </div>
      <div className="top-bar-right">
        <a className="bio-icons" href={`${social?.github || ``}`}>
          <FaGithub size="1.5rem"></FaGithub>
        </a>
        <ThemeToggler className="theme-toggler" />
      </div>
    </div>
  )
}

export default TopBar
