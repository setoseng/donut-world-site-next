import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Container } from '@mui/material'


import { ModalProvider } from '../contexts/modal.context'

import CustomNavBar from '../components//CustomNavBar/CustonNavBar.component'
import CartBar from '../components/CartBar/CartBar.component'
import SideMenu from '../components/SideMenu/SideMenu.component'
import CenterMenu from '../components/CenterMenu/CenterMenu.component'

import {
  OrderContainer,
  HeroTextContainer,
  HeroText,
  HeroSubText,
  HorizontalLine,
  Body,
}from '../styles/ordering.style.jsx'

export default function ordering() {
  return (
    <>
      <ModalProvider>
        <CustomNavBar />
        <OrderContainer>
          <StaticImage
            style={{
              display: 'grid',
              height: '100vh',
              gridArea: '1/1',
              width: 'auto',
            }}
            layout="fullWidth"
            placeholder="blurred"
            aspectRatio={2 / 1}
            quality={80}
            alt=""
            src={"../images/feels.png"}
            formats={["auto", "webp", "avif"]}
          />
          <HeroTextContainer>
            <HeroText>Our Menu</HeroText>
            <HorizontalLine />
            <HeroSubText>Pick-Up or Delivery</HeroSubText>
          </HeroTextContainer>
          <CartBar />
          <Container>
            {/* <SideMenu /> */}
            <CenterMenu />
          </Container>
        </OrderContainer>
      </ModalProvider>
    </>
  )
}
