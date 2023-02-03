import React, { createContext, useState } from 'react'

const defaultSelectedItem = {
  name: '',
  description: '',
  price: '',
}

const resetSelection = () => {
  return defaultSelectedItem;
}

const setSelection = (itemToSelect) => {
  return itemToSelect;
}

export const ModalContext = createContext({
  mondalInfo: {},
  setItemSelection: () => {},
  resetItemSelection: () => {},
})

export const ModalProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem)

  const setItemSelection = (itemToSelect) => {
    console.log('this fired', itemToSelect);
    setSelectedItem(setSelection(itemToSelect))
  }

  const resetItemSelection = () => {
    setSelectedItem(resetSelection(defaultSelectedItem));
  }
  
  const value = {
    selectedItem,
    setItemSelection,
    resetItemSelection,
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}



