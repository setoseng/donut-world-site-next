import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useScrollTo } from 'react-use-window-scroll'

import * as headerStyle from "./header.module.css"

const Header = () => {
  const [headerColor, setHeaderColor] = useState("transparent")
  const [navText ,  setNavText] = useState("white")

  const scrollTo = useScrollTo()
  const listenScrollEvent = () => {
    if(typeof window !== 'undefined') return;
      if (window.scrollY > 10) {
        setHeaderColor("white")
        setNavText("rgba(61,61,61,0.69)")
      } else {
        setHeaderColor("transparent")
        setNavText("white")
      }
    }

  useEffect(() => {
    if(typeof window !== 'undefined') return;
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.navBar} style={{ backgroundColor: headerColor }}>
        <div className={headerStyle.navBrand}>
          <StaticImage
            src='../../images/logo-pink-svg.svg'
            alt="Donut World Logo"
            imgStyle={{objectFit:'fill'}}
            quality={100}
            placeholder="dominant"
          />
        </div>
        <div className={headerStyle.navLinks}>
          <Link
            to="/"
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Home</Link>
          <Link
            to="/#about"
            onClick={() => scrollTo({ top: 750, left: 0, behavior: 'smooth' })}
            className={headerStyle.navItem}
            style={{ color: navText }}
          >About Us</Link>
          <Link
            to="/#menu"
            onClick={() => scrollTo({ top: 1550, left: 0, behavior: 'smooth' })}
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Menu</Link>
          <Link
            to="/#contact"
            onClick={() => scrollTo({ top: 10000, left: 0, behavior: 'smooth' })}
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Contact</Link>
          <Link
            to="/ordering"
            className={headerStyle.navItemOrder}
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
