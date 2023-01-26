import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useScrollTo } from 'react-use-window-scroll'

import * as headerStyle from "./mobileHeader.module.css"

const Header = () => {
  const isBrowser = typeof window !== "undefined"
  const [headerColor, setHeaderColor] = useState("transparent")
  const [navText ,  setNavText] = useState("#d1466c")
  const [hamburgerLine ,  setHamburger] = useState("white")
  const menuToggleRef = useRef(null);

  const scrollTo = useScrollTo()
  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setHeaderColor("white")
      setHamburger("rgba(61,61,61,0.69)")
    } else {
      setHeaderColor("transparent")
      setHamburger("white")
    }
  }

  useEffect(() => {
    if(!isBrowser) return;
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <header className={headerStyle.navbar} style={{ backgroundColor: headerColor }}>
      <div className={`${headerStyle.container} ${headerStyle.navContainer}`}>
        <div className={headerStyle.navBrand}>
          <StaticImage
            src='../../images/logo-pink-svg.svg'
            alt="Donut World Logo"
            imgStyle={{objectFit:'fill'}}
            quality={100}
            placeholder="dominant"
          />
        </div>
        <input className={headerStyle.checkbox} type="checkbox" ref={menuToggleRef}/>
        <div className={headerStyle.hamburgerLines}>
          <span
            className={`${headerStyle.lineOne} ${headerStyle.line}`}
            style={{ backgroundColor: hamburgerLine }}
          ></span>
          <span
            className={`${headerStyle.lineTwo} ${headerStyle.line}`}
            style={{ backgroundColor: hamburgerLine }}
          ></span>
          <span
            className={`${headerStyle.lineThree} ${headerStyle.line}`}
            style={{ backgroundColor: hamburgerLine }}
          ></span>
        </div>  
        <div className={headerStyle.navLinks}>
          <Link
            to="/#home"
            onClick={
              () => {
                scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                menuToggleRef.current.checked = false
              }
            }
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Home</Link>
          <Link
            to="/#about"
            onClick={
              () => {
                scrollTo({ top: 750, left: 0, behavior: 'smooth' })
                menuToggleRef.current.checked = false
              }
            }
            className={headerStyle.navItem}
            style={{ color: navText }}
          >About Us</Link>
          <Link
            to="/#menu"
            onClick={
              () => {
                scrollTo({ top: 2650, left: 0, behavior: 'smooth' })
                menuToggleRef.current.checked = false
              }
            }
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Menu</Link>
          <Link
            to="/#contact"
            onClick={
              () => {
                scrollTo({ top: 10000, left: 0, behavior: 'smooth' })
                menuToggleRef.current.checked = false
              }
            }
            className={headerStyle.navItem}
            style={{ color: navText }}
          >Contact</Link>
          <Link
            to="/construction"
            className={headerStyle.navItem}
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
