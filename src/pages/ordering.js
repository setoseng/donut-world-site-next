import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import CustomNavBar from '../components//CustomNavBar/CustonNavBar.component'
import CartBar from '../components/CartBar/CartBar.component'
import SideMenu from '../components/SideMenu/SideMenu.component'
import CenterMenu from '../components/CenterMenu/CenterMenu.component'

import {
  Container,
  HeroTextContainer,
  HeroText,
  HeroSubText,
  HorizontalLine,
  Body,
}from '../styles/ordering.style.jsx'

export default function ordering() {
  return (
    <>
      <CustomNavBar />
      <Container>
        <StaticImage
          style={{
            display: 'grid',
            height: '40vh',
            gridArea: '1/1',
            width: 'auto',
          }}
          layout="fullWidth"
          placeholder="blurred"
          aspectRatio={2 / 1}
          quality={80}
          alt=""
          src={"../images/donut-menu-2.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <HeroTextContainer>
          <HeroText>Our Menu</HeroText>
          <HorizontalLine />
          <HeroSubText>Pick-Up or Delivery</HeroSubText>
        </HeroTextContainer>
        <CartBar />
        <Body>
          <SideMenu />
          <CenterMenu />
        </Body>
      </Container>
    </>
  )
}
