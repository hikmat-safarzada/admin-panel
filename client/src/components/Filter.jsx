import React from 'react'
import { CiSearch } from "react-icons/ci";

function Filter() {
    return (
        <div className='flex items-center border-1 gap-3 w-full rounded-[12px] p-6'>
            <div className='flex justify-between items-center w-37 h-12 border-1 rounded-[12px] px-3 py-2'>
                <p>All Posts</p>
                <p>⌄</p>
            </div>
            <div className='flex justify-between items-center w-37 h-12 border-1 rounded-[12px] px-3 py-2'>
                <p>All Status</p>
                <p>⌄</p>
            </div>
            <div className='w-54 h-12 border-1 rounded-[12px] flex items-center py-2.5 pl-3 gap-2'>
                <CiSearch />
                <input className='' type="search" placeholder='Search'/>
            </div>
        </div>
    )
}

export default Filter