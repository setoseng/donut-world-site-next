import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as heroStyle from './heroStyle.module.css'


const HeroContent = () => {

  return (
  <div className={heroStyle.heroContainer}>
    <StaticImage
      className={heroStyle.heroImage}
      
      loading="eager"
      placeholder="dominantColor"
      // You can optionally force an aspect ratio for the generated image
      aspectRatio={1 / 1}
      quality={80}
      // This is a presentational image, so the alt should be an empty string
      alt=""
      src={"../../images/donut-hero.jpg"}
      formats={["auto", "webp", "avif"]}
    />
    <div className={heroStyle.heroText}>
      {/* <StaticImage
        className="iconDrop"
        width={25}
        height={25}
        placeholder="blurred"
        // You can optionally force an aspect ratio for the generated image
        quality={80}
        alt="image of a donut bouncing"
        src={"../../images/icon-donut.png"}
        formats={["auto", "webp", "avif"]}
      /> */}
      <p className={heroStyle.premiumText}>Premium</p>
      <p className={heroStyle.qualityText}>QUALITY</p>
      <p className={heroStyle.donutText}>Donuts</p>
      <p className={heroStyle.kolacheText}>&Kolaches</p>
    </div>
  </div>
  )
}

export default HeroContent