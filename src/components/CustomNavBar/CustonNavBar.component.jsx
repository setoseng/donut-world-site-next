import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as customNavBarStyle from "./customNavBar.module.css"

const Header = () => {
  const [customNavText ,  setCustomNavText] = useState("rgb(61 61 61 / 69%)")
  // const scrollTo = useScrollTo()
  // const listenScrollEvent = () => {
  //     if (window.scrollY > 10) {
  //       setHeaderColor("white")
  //       setNavText("rgba(61,61,61,0.69)")
  //     } else {
  //       setHeaderColor("transparent")
  //       setNavText("white")
  //     }
  //   }
  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent)
  // })
  return (
    <div className={customNavBarStyle.navBar}>
      <div className={customNavBarStyle.navBrand}>
        <StaticImage
          src='../../images/logo-pink-svg.svg'
          alt="Donut World Logo"
          imgStyle={{objectFit:'fill'}}
          quality={100}
          placeholder='tracedSVG'
        />
      </div>
      <div>
        <Link
          to="/"
          className={customNavBarStyle.navItem}
          style={{ color: customNavText }}
        >Home</Link>
        <Link
          to="/login"
          className={customNavBarStyle.navItem}
          style={{ color: customNavText }}
        >Log In</Link>
        <Link
          to="/signup"
          className={customNavBarStyle.navItem}
          style={{ color: customNavText }}
        >Sign Up</Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
