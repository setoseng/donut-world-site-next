import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import CustomNavBar from '../components//CustomNavBar/CustonNavBar.component'
import CartBar from '../components/CartBar'
import OrderMenu from '../components/OrderMenu'

import * as orderingStyle from '../styles/ordering.module.css'

export default function ordering() {
  return (
    <div>
      <CustomNavBar />
      <div className={orderingStyle.container}>
        <StaticImage
          className={orderingStyle.heroImage}
          layout="fullWidth"
          placeholder="blurred"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={2 / 1}
          quality={80}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src={"../images/donut-menu-2.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <div className={orderingStyle.heroTextContainer}>
          <h1>Our Menu</h1>
          <div className={orderingStyle.horizontalLine}></div>
          <p>Pick-Up or Delivery</p>
        </div>
        <CartBar />
        <OrderMenu />
      </div>
    </div>
  )
}
