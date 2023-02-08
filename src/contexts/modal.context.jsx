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
  itemCount: 0,
})

export const ModalProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem)
  const [open, setOpen] = useState(false)
  const [itemCount, setItemCount] = useState(1)


  const setItemSelection = (itemToSelect) => {
    setSelectedItem(setSelection(itemToSelect))
  }

  const resetItemSelection = () => {
    setSelectedItem(resetSelection(defaultSelectedItem));
  }
  
  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setItemCount(1)
  }

  const handleCountIncrease = () => setItemCount(itemCount + 1)

  const handleCountDecrease = () => {
    console.log('this ran')
    if(itemCount <= 1) return;
    setItemCount(itemCount - 1)
  }


  const value = {
    selectedItem,
    setItemSelection,
    resetItemSelection,
    handleOpen,
    handleClose,
    open,
    itemCount,
    handleCountIncrease,
    handleCountDecrease,
  }

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}



