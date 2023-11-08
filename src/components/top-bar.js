/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { ThemeToggler } from "./theme-toggler"
import { FaGithub } from "react-icons/fa6"

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
      <Link className="home-link" to="/">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-icon.png"
          width={35}
          height={35}
          quality={95}
          alt="Profile picture"
        />
        <h1 className="main-heading">{title}</h1>
      </Link>
      <div className="top-bar-links">
        <Link to="/tags">
          <h1>Tags</h1>
        </Link>
        <Link to="/tags">
          <h1>Tags</h1>
        </Link>
        {/* add custom links */}
      </div>
      <div className="top-bar-right">
        <a className="bio-icons" href={`${social?.github || ``}`}>
          <FaGithub size="1.5rem"></FaGithub>
        </a>
        <ThemeToggler class="theme-toggler"/>
      </div>
    </div>
  )
}

export default TopBar
