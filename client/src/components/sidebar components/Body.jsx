import React from 'react'
import homeIcon from '../../assets/home-2.png'

const menuItems = [
  'NAA Website',
  'Library',
  'Meteorology',
  'Museum'
]

function SidebarBody() {
  return (
    <div className="flex flex-col gap-1 px-3 pt-5">

      {menuItems.map((item, index) => (
        <div
          key={item}
          className='w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer hover:text-white hover:bg-[#243C7B]'
        >
          <div className="flex items-center gap-2">
            <img
              src={homeIcon}
              alt=""
              className="w-4 h-4"
            />

            <p className="text-sm">
              {item}
            </p>
          </div>

          <span>⌄</span>
        </div>
      ))}

    </div>
  )
}

export default SidebarBody