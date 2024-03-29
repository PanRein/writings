/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div>
      {author?.name && (
        <>
          <p>
            Written by <strong>{author.name}</strong> {author?.summary || null}
          </p>
          <p>
          follow me @<a href={`https://www.linkedin.com/in/panachai-reinthavorn/`}>
            linkedin
          </a>
        </p>
        </>
      )}
      
    </div>
  )
}

export default Bio
