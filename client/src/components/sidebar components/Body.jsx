import { useState } from 'react'
import { RiHome4Fill } from "react-icons/ri";
import { PiBookOpenTextThin } from "react-icons/pi";
import { BsCloudSun, BsBank } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SidebarBody() {
  // Hansı menyunun açıq olduğunu idarə etmək üçün state (məsələn, standart olaraq 'NAA Website' açıqdır)
  const [openMenu, setOpenMenu] = useState('NAA Website')

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName)
  }

  return (
    <div className="flex flex-col gap-3 px-3 pt-5">

      {/* 1. NAA Website Menu */}
      <div className="flex flex-col">
        <div 
          onClick={() => toggleMenu('NAA Website')}
          className={`w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer transition-colors ${
            openMenu === 'NAA Website' 
              ? 'bg-[#243C7B] text-white' 
              : 'text-[#787486] hover:text-white hover:bg-[#243C7B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <RiHome4Fill size={22} />
            <p className="text-sm font-medium">NAA Website</p>
          </div>
          {openMenu === 'NAA Website' ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>

        {/* Submenu Items (Açılan alt menyular) */}
        {openMenu === 'NAA Website' && (
          <div className="flex flex-col pl-9 pt-2 gap-2 text-sm text-[#787486]">
            <p className="cursor-pointer hover:text-[#243C7B] font-medium text-[#243C7B]">Post</p>
            <p className="cursor-pointer hover:text-[#243C7B]">Media Library</p>
            <p className="cursor-pointer hover:text-[#243C7B]">System Settings</p>
          </div>
        )}
      </div>

      {/* 2. Library Menu */}
      <div className="flex flex-col">
        <div 
          onClick={() => toggleMenu('Library')}
          className={`w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer transition-colors ${
            openMenu === 'Library' 
              ? 'bg-[#243C7B] text-white' 
              : 'text-[#787486] hover:text-white hover:bg-[#243C7B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <PiBookOpenTextThin size={22}/>
            <p className="text-sm font-medium">Library</p>
          </div>
          {openMenu === 'Library' ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>

        {openMenu === 'Library' && (
          <div className="flex flex-col pl-9 pt-2 gap-2 text-sm text-[#787486]">
            <p className="cursor-pointer hover:text-[#243C7B]">Books</p>
            <p className="cursor-pointer hover:text-[#243C7B]">E-Library</p>
          </div>
        )}
      </div>

      {/* 3. Meteorology Menu */}
      <div className="flex flex-col">
        <div 
          onClick={() => toggleMenu('Meteorology')}
          className={`w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer transition-colors ${
            openMenu === 'Meteorology' 
              ? 'bg-[#243C7B] text-white' 
              : 'text-[#787486] hover:text-white hover:bg-[#243C7B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <BsCloudSun size={22}/>
            <p className="text-sm font-medium">Meteorology</p>
          </div>
          {openMenu === 'Meteorology' ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>

        {openMenu === 'Meteorology' && (
          <div className="flex flex-col pl-9 pt-2 gap-2 text-sm text-[#787486]">
            <p className="cursor-pointer hover:text-[#243C7B]">Forecast</p>
            <p className="cursor-pointer hover:text-[#243C7B]">Reports</p>
          </div>
        )}
      </div>

      {/* 4. Museum Menu */}
      <div className="flex flex-col">
        <div 
          onClick={() => toggleMenu('Museum')}
          className={`w-full h-10 flex items-center justify-between px-3 rounded-xl cursor-pointer transition-colors ${
            openMenu === 'Museum' 
              ? 'bg-[#243C7B] text-white' 
              : 'text-[#787486] hover:text-white hover:bg-[#243C7B]'
          }`}
        >
          <div className="flex items-center gap-2">
            <BsBank size={22} />
            <p className="text-sm font-medium">Museum</p>
          </div>
          {openMenu === 'Museum' ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </div>

        {openMenu === 'Museum' && (
          <div className="flex flex-col pl-9 pt-2 gap-2 text-sm text-[#787486]">
            <p className="cursor-pointer hover:text-[#243C7B]">Exhibits</p>
            <p className="cursor-pointer hover:text-[#243C7B]">Visitors</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default SidebarBody