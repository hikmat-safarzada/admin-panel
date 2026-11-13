import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
function Filter() {
    return (
        <div className='flex items-center border border-white gap-3 w-full rounded-[12px] p-6 shadow-md shadow-gray-200 bg-white'>
            <div className='flex justify-between items-center w-37 h-12 border border-gray-200 rounded-[12px] px-3 py-2 shadow-sm'>
                <p>All Posts</p>
                <IoIosArrowDown size={18} />
            </div>

            <div className='flex justify-between items-center w-37 h-12 border border-gray-200 rounded-[12px] px-3 py-2 shadow-sm'>
                <p>All Status</p>
                <IoIosArrowDown size={18} />
            </div>

            <div className="flex items-center gap-2 border border-gray-200 rounded-[12px] rounded-lg px-3 py-2">
                <CiSearch size={22} className="text-gray-500 shrink-0" />

                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full text-sm outline-none placeholder:text-sm"
                />
            </div>
        </div>
    )
}

export default Filter