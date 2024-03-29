/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import MobileHeader from "./MobileHeader/MobileHeader.component"

import "./layout.css"

const Layout = ({ children }) => {
  const [isDesktop, setDesktop] = useState(false)
  
  const updateMedia = () => {
    setDesktop(
      typeof window !== 'undefined'
      ? window.innerWidth > 959
      : false
      )
  }

  useEffect(() => {
    if(typeof window == 'undefined') return;
    window.addEventListener("resize", updateMedia())
    return () => window.removeEventListener("resize", updateMedia()) 
  }, [isDesktop])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {
        isDesktop ? (
          <Header siteTitle={data.site.siteMetadata?.title || `Donut World`}/>
        ) : (
          <MobileHeader siteTitle={data.site.siteMetadata?.title || `Donut World`}/>
        )

      }
      <div
        style={{
          display: 'grid',
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            textAlign:'center',
          }}
        >
          Donut World © {new Date().getFullYear()}
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
