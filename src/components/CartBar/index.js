import React from 'react'
import { Link } from 'gatsby'

import { BsBagDash, BsCart3, BsChevronRight } from "react-icons/bs";



import * as cartBarStyle from './cartBarStyle.module.css'

export default function CartBar() {
  return (
   <div className={cartBarStyle.container}>
    <div className={cartBarStyle.navBar}>
      <div className={cartBarStyle.navBrand}>
        <div className={cartBarStyle.bagButton}>
          <BsBagDash />
        </div>
        <p>Pick Up</p>
        <p>|</p>
        <p>ASAP</p>
        <BsChevronRight />
      </div>
      <div
        className={cartBarStyle.navLink}
      >  
        <button
          className={cartBarStyle.cartButton}
          type="button"
        >
          <BsCart3 />
        </button>
      </div>
    </div>
  </div>
  )
}
