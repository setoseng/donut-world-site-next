import React, { useState } from 'react'

import {
  MenuItemContainer,
  MenuItemType,
  MenuTextContainer,
  MenuItemText,
  MenuItemBorder,
  MenuItemDescription,
  MenuTextPrice,
} from './MenuItems.styles'

const MenuItems = ({ menuProps }) => {
  const {menuType, menuItem} = menuProps
  let cleanMenuItemType = menuType.charAt(0).toUpperCase() + menuType.slice(1);

  return (
    <MenuItemContainer key={menuType}>
      <MenuItemType>{cleanMenuItemType}</MenuItemType>
      {menuItem.map(item =>
        <div  key={item.name}>
          <MenuTextContainer key={item.name}> 
            <MenuItemText>{item.name}</MenuItemText>
            <MenuTextPrice>{item.price}</MenuTextPrice>
          </MenuTextContainer>
          <MenuItemBorder/>
          <MenuItemDescription>{item.description}</MenuItemDescription>
        </div>
      )}
    </MenuItemContainer>
  )
}

export default MenuItems