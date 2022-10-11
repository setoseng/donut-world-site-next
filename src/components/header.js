import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import logo from '../images/logo-pink-svg.svg'

import "./header.css"

const Header = ({ siteTitle }) => {
  const [headerColor, setHeaderColor] = useState("transparent")
  const [navText ,  setNavText] = useState("white")
  const listenScrollEvent = () => {
      if (window.scrollY > 10) {
        setHeaderColor("white")
        setNavText("rgba(61,61,61,0.69)")
      } else {
        setHeaderColor("transparent")
        setNavText("white")
      }
    }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  return (
    <header>
    <div className="navBar" style={{ backgroundColor: headerColor }}>
      <div className="navBrand">
        <StaticImage
          src='../images/logo-pink-svg.svg'
          alt="Donut World Logo"
          imgStyle={{objectFit:'fill'}}
          quality={100}
          placeholder='tracedSVG'
        />
      </div>
      <div
        className="navLinks"
      >
        <Link
          to="/"
          className="navItem"
          style={{ color: navText }}
        >Home</Link>
        <Link
          to="/about"
          className="navItem"
          style={{ color: navText }}
        >About Us</Link>
        <Link
          to="/menu"
          className="navItem"
          style={{ color: navText }}
        >Menu</Link>
        <Link
          to="/apply"
          className="navItem"
          style={{ color: navText }}
        >Apply</Link>
        <Link
          to="/order"
          className="navItemOrder"
          style={{ color: navText }}
        >Order Online</Link>
      </div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
