import { Outlet } from "react-router-dom"

import coffeeLogo from '/public/coffee-maker.png'

import './Navigation.style.css'

function Navigation() {
  return (
    <>
    <div className="navigation-container">
      <div className="logo-container">
        <img src={coffeeLogo} className="logo" />
        <span>Coffee Banner Generator</span>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation