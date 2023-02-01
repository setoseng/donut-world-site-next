import React from 'react'

import { Divider, Card, Container, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import {
  CardContainer,
  StyledCard,
  MenuType,
  MenuTypeContainer,
  ItemName,
  ItemDescription,
  ItemPrice,

} from './CenterMenuCard.style'

const CenterMenuCard = ({ menuProps }) => {
  const {menuType, menuItem} = menuProps

  return (
    <Container spacing={1}>
      <Grid xs={4} md={4}>
        <MenuTypeContainer>
          <MenuType>{menuType}</MenuType>
        </MenuTypeContainer>
      
      {menuItem.map(item =>
        <Card
          sx={{
            ':hover': {
              boxShadow: 20, // theme.shadows[20]
            },
            width: '40rem',
            margin: '1rem 0',
            padding: '1rem',
            textAlign: 'left',
          }}
          key={item.name}>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
          <ItemPrice>${item.price}</ItemPrice>
        </Card>
      )}
      </Grid>
      <Grid xs={6}></Grid>
    </Container>
  )
}

export default CenterMenuCard