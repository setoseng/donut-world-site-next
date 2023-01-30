import React from 'react'

import {
  MenuTextContainer,
  MenuItemText,
  MenuTextPrice,
  MenuItemBorder,
  MenuItemDescription,
} from './SideMenuItem.style'

const SideMenuItem = ({ menuProps }) => {
  const {menuType, menuItem} = menuProps
  let cleanMenuItemType = menuType.charAt(0).toUpperCase() + menuType.slice(1);


  return (
    <div>
      {cleanMenuItemType}
    </div>
  )
}

export default SideMenuItem