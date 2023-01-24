import React, { useState } from 'react'

import {
  MenuItemContainer,
  MenuItemType,
  MenuTextContainer,
  MenuItemText,
  MenuItemBorder,
  MenuItemDescription,
} from './MenuItems.styles'

const MenuItems = ({ menuProps }) => {
  const {menuType, menuItem} = menuProps
  let cleanMenuItemType = menuType.charAt(0).toUpperCase() + menuType.slice(1);

  return (
    <MenuItemContainer>
      <MenuItemType>{cleanMenuItemType}</MenuItemType>
      {menuItem.map(item =>
        <>
          <MenuTextContainer key={item.name}> 
            <MenuItemText>{item.name}</MenuItemText>
            <MenuItemText>{item.price}</MenuItemText>
          </MenuTextContainer>
          <MenuItemBorder/>
          <MenuItemDescription>{item.description}</MenuItemDescription>
        </>
      )}
    </MenuItemContainer>
  )
}

export default MenuItems