import React, { createContext, useState, useEffect } from 'react'

// import MENU_DATA from '../data/menuData';
// import { addCollectionAndDocuments } from '../utils/firebase.utils';
import { getMenuDataAndDocuments } from '../utils/firebase.utils'

export const MenuContext = createContext({
  menuDataMap: {},
})

export const MenuProvider = ({children}) => {
  const [menuData, setMenuData] = useState({});
  useEffect(() => {
    const getMenu = async () => {
      const menuMap = await getMenuDataAndDocuments();
      setMenuData(menuMap);
    }
    getMenu();
  }, [])
  // Do Not Use Again. 
  // Temporary useEffect to Call Util Fuction to add JSON data to FireBase
  // useEffect(() => {
  //   addCollectionAndDocuments('menuData', MENU_DATA)
  // }, [])

  const value = { menuData, setMenuData };
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )  
}
