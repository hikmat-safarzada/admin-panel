import React from 'react'
import { RiHome4Fill } from "react-icons/ri";
import { PiBookOpenTextThin } from "react-icons/pi";
import { BsCloudSun, BsBank } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
function SidebarBody() {
  return (
    <div className="flex flex-col gap-4 px-3 pt-5">

      <div className="w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer text-[#787486] hover:text-white hover:bg-[#243C7B]">
        <div className="flex items-center gap-2">
          <RiHome4Fill size={22} />
          <p className="text-sm">NAA Website</p>
        </div>
        <IoIosArrowDown size={18} />
      </div>

      <div className="w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer text-[#787486] hover:text-white hover:bg-[#243C7B]">
        <div className="flex items-center gap-2">
          <PiBookOpenTextThin size={22}/>
          <p className="text-sm">Library</p>
        </div>
        <IoIosArrowDown size={18} />
      </div>

      <div className="w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer text-[#787486] hover:text-white hover:bg-[#243C7B]">
        <div className="flex items-center gap-2">
          <BsCloudSun size={22}/>
          <p className="text-sm">Meteorology</p>
        </div>
        <IoIosArrowDown size={18} />
      </div>

      <div className="w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer text-[#787486] hover:text-white hover:bg-[#243C7B]">
        <div className="flex items-center gap-2">
          <BsBank size={22} />
          <p className="text-sm">Museum</p>
        </div>
        <IoIosArrowDown size={18} />
      </div>

    </div>
  )
}

export default SidebarBody