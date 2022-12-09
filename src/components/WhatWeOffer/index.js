import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer';

import { StaticImage } from 'gatsby-plugin-image'

import './style.css'


const WhatWeOffer = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })

  const getContainerName = (name) => {
    let containerName = ""
    inView ? containerName =  `${name}Container` : containerName = ""
    return containerName;
  }
  
  return (
    <div className="offerContainer" ref={ref}>
      <StaticImage
        className="heroOfferImage"
        layout="fullWidth"
        placeholder="dominantColor"
        aspectRatio={2/1}
        quality={90}
        alt=""
        src={"../../images/Always-fresh2.jpeg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className="offerSubContainer">
        <h2 className='offerText'>What We Offer</h2>
        <div className="heartContainer">
          <hr className="heartLine" style={{ justifySelf: "end" }}/>
          <p className="heartTextTwo">from our hearts</p>
          <hr className="heartLine" style={{ justifySelf: "start" }}/>
        </div>
        <div className="imageContainer">
          <div className={getContainerName("fresh")}>
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
          <div className={getContainerName("scratch")}>
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
          <div className={getContainerName("quality")}>
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