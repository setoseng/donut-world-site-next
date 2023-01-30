import React, { useEffect, useState, useContext } from 'react'

import { MenuContext } from '../../contexts/menu.context.jsx'

import CenterMenuCard from '../CenterMenuCard/CenterMenuCard.jsx';

const CenterMenu = () => {
  const [ menuState, setMenuState ] = useState(null);
  const { menuData } = useContext(MenuContext);

  useEffect(() => {
    setMenuState(menuData);
  }, [menuData])

  return (
    <div>
      {
        menuState != null
        ?
        Object.entries(menuState).map((menu) => {
          const menuType = menu[0]
          const menuItem = menu[1]
          return(
          <CenterMenuCard key={menuType} menuProps={{menuType, menuItem}}/>)
        })
        :
        ''
      }
    </div>
  )
}

export default CenterMenu