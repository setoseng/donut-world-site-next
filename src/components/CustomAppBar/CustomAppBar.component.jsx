import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Link,
 } from "@mui/material"

const CustomAppBar = ({ children, props}) => {
  let defaultColor = '' 
  if(props && props.backgroundColor) {
    const { backgroundColor } = props
    defaultColor = backgroundColor
  } else {
    defaultColor = 'white'
  }

  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: defaultColor,
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar sx={{ mx: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            component={GatsbyLink}
            sx={{
              textDecoration: 'none',
              color: 'rgb(61 61 61 / 69%)',
            }}
          >
            <StaticImage
              width={47}
              height={55}
              src='../../images/logo-pink-svg.svg'
              alt="Donut World Logo"
              imgStyle={{objectFit:'fill'}}
              quality={100}
              placeholder='tracedSVG'
          />
          </Link>
          
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: 2,
          }}
        >
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar
