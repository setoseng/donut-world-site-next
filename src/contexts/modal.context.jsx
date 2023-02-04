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
  handleOpen: () => {},
  handleClose: () => {},
  isOpen: false,
})

export const ModalProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem)
  const [open, setOpen] = useState(false)


  const setItemSelection = (itemToSelect) => {
    setSelectedItem(setSelection(itemToSelect))
  }

  const resetItemSelection = () => {
    setSelectedItem(resetSelection(defaultSelectedItem));
  }
  
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const value = {
    selectedItem,
    setItemSelection,
    resetItemSelection,
    handleOpen,
    handleClose,
    open,
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}



