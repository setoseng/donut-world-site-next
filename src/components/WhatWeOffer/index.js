import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'

import './style.css'


const WhatWeOffer = () => {
  return (
    <div className="offerContainer">
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          placeholder="blurred"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={1 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          src={"../../images/Always-fresh2.jpeg"}
          formats={["auto", "webp", "avif"]}
        />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <h2 className='offerText'>What We Offer</h2>
        <div className="heartContainer">
          <hr className="heartLine" style={{ marginRight: '15px'}}/>
          <p className="heartTextTwo">from our hearts</p>
          <hr className="heartLine" style={{ marginLeft: '15px'}}/>
        </div>
        <div className="imageContainer">
          <div>
            <StaticImage
              src={'../../images/pink-donut.jpg'}
              width={350}
              height={350}
              className="offerImage"
              alt="image of pink donut"
            />
            <div className="statementContainer">
              <h2 className="statementText">
                Always Fresh
              </h2>
              <p className="statementSubText">
                All donuts are made in house daily.
                Never frozen or left-over to bring you the freshest experience.
              </p>
            </div>
          </div>
          <div>
            <StaticImage
              src={'../../images/flour-bag.jpeg'}
              width={350}
              height={350}
              className="offerImage"
              alt="image of flour bag"
            />
            <div className="statementContainer">
              <h2 className="statementText">
                Made from Scratch
              </h2>
              <p className="statementSubText">
                Starting from the base flour to the delicious delicacy of your choosing, 
                our donuts and kolaches are never imported.
              </p>
            </div>
          </div>
          <div>
            <StaticImage
              src={'../../images/flour-egg.jpg'}
              width={350}
              height={350}
              className="offerImage"
              alt="image of egg on flour"
            />
            <div className="statementContainer">
              <h2 className="statementText">
                Quality Ingredients
              </h2>
              <p className="statementSubText">
                Sourced from suppliers top in the industry,
                our ingredients are selected for quality, freshness, and taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer