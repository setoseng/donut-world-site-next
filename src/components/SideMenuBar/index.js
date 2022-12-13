import React from 'react'

import * as sideMenuBar from "./sideMenuBar.module.css"


function SideMenuBar() {
  return (
    <div className={sideMenuBar.container}>
      <div>
        <h1 className={sideMenuBar.menuTypeText}>Menu Type 1</h1>
        <p>A list of menu items</p>
        <p>A list of menu items</p>
        <p>A list of menu items</p>
        <p>A list of menu items</p>
        <p>A list of menu items</p>
      </div>
    </div>
  )
}

export default SideMenuBar