import React from 'react'
import { Link } from 'gatsby'

import { BsBagDash, BsCart3, BsChevronRight } from "react-icons/bs";



import * as cartBarStyle from './cartBarStyle.module.css'

export default function CartBar() {
  return (
   <div className={cartBarStyle.container}>
    <div className={cartBarStyle.navBar}>
      <div className={cartBarStyle.navBrand}>
        <BsBagDash />
        <p>Pick Up</p>
        <p>|</p>
        <p>ASAP</p>
        <BsChevronRight />
      </div>
      <div
        className={cartBarStyle.navLink}
      >
        <BsCart3 />
        <Link
          to="/"
          className={cartBarStyle.cartButton}
        >Home</Link>
      </div>
    </div>
  </div>
  )
}
