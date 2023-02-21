import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link as GatsbyLink } from 'gatsby'
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
} from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2/Grid2'

import { ModalProvider } from '../contexts/modal.context'

import CustomAppBar from '../components/CustomAppBar/CustomAppBar.component'
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
        <Container>
          <CustomAppBar props={{ backgroundColor : 'white' }}>
            <Link
              to="/"
              component={GatsbyLink}
              sx={{
                textDecoration: 'none',
                color: 'rgb(61 61 61 / 69%)',
              }}
            >
              Home
            </Link>
            {/* <Link
              to="/login"
              component={GatsbyLink}
              sx={{
                textDecoration: 'none',
                color: 'rgb(61 61 61 / 69%)',
              }}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              component={GatsbyLink}
              sx={{
                textDecoration: 'none',
                color: 'rgb(61 61 61 / 69%)',
              }}
            >
              Sign Up
            </Link> */}
          </CustomAppBar>
        </Container>
        <OrderContainer>
          <StaticImage
            style={{
              height: '40vh',
            }}
            layout="fullWidth"
            placeholder="blurred"
            quality={100}
            alt=""
            src={"../images/order-donut.png"}
            formats={["auto", "webp", "avif"]}
          />
          {/* <HeroTextContainer>
            <Typography
              sx={{
                color: 'white',
                textDecoration: 'italic'
              }}
              variant="h2"
            >
              Our Menu
            </Typography>
            <HorizontalLine />
          </HeroTextContainer> */}
          <CartBar />
          <Container sx={{ display: 'flex'}}>
            <Grid container>
              <Grid xs={3} md={3} lg={3}>
                <SideMenu/>
              </Grid>
              <Grid xs={6} md={6} lg={6}>
                <CenterMenu />
              </Grid>
              <Grid xs={3} md={3} lg={3}>
              </Grid>
            </Grid>
            
          </Container>
        </OrderContainer>
      </ModalProvider>
    </>
  )
}
