import { Outlet } from "react-router-dom"

import coffeeLogo from '/coffee-maker.png'

function Navigation() {
  return (
    <>
    <div className="w-full bg-darkGray text-2xl h-[77px] flex items-center px-12">
      <div className="flex items-center">
        <img src={coffeeLogo} className="w-[50px]" />
        <span>Coffee Banner Generator</span>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation