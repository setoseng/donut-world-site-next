import React from 'react'

import Paper from '@mui/material/Paper';

import {
  CardContainer,
  StyledCard,
  ItemName,
  ItemDescription,
  ItemPrice,

} from './CenterMenuCard.style'

const CenterMenuCard = ({ menuProps }) => {
  const {menuType, menuItem} = menuProps

  return (
    <div>
      {menuItem.map(item =>
        <StyledCard hoverShadow={10} key={item.name}>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
          <ItemPrice>{item.price}</ItemPrice>
        </StyledCard>
      )}
    </div>
  )
}

export default CenterMenuCard