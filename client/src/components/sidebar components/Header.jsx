import React from 'react'
import logo from '../../assets/naa_logo_favicon 1.png'

function SidebarHeader() {
  return (
    <div className="flex items-center gap-2 p-5 border-b border-gray-100">
      <img
        src={logo}
        alt="NAA Logo"
        className="w-10 h-10 object-contain"
      />

      <p className="text-[18px] font-medium">
        NAA Control Panel
      </p>
    </div>
  )
}

export default SidebarHeader