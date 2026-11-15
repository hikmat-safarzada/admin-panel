import { CiSearch } from "react-icons/ci";
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Filter({ category, setCategory, status, setStatus, search, setSearch }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isStatusOpen, setIsStatusOpen] = useState(false)

    const handleSelect = (value) => {
        setCategory(value)
        setIsOpen(false)
    }

    const handleStatus = (value) => {
        setStatus(value)
        setIsStatusOpen(false)
    }
    return (
        <div className='flex items-center border border-white gap-3 w-full rounded-[12px] p-6 shadow-md shadow-gray-200 bg-white'>
            <div className="relative w-37">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-37 h-12 border border-gray-200 rounded-[12px] px-3 py-2 shadow-sm cursor-pointer bg-white"
                >
                    <p>{category}</p>

                    {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
                </button>

                {isOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-md z-10">

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect('All Posts')}>
                            All Posts
                        </p>

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect('News')}>
                            News
                        </p>

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect('Announcement')}>
                            Announcement
                        </p>

                    </div>
                )}

            </div>

            <div className="relative w-37">

                <button
                    onClick={() => setIsStatusOpen(!isOpen)}
                    className="flex justify-between items-center w-37 h-12 border border-gray-200 rounded-[12px] px-3 py-2 shadow-sm cursor-pointer bg-white"
                >
                    <p>{status}</p>

                    {isStatusOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
                </button>

                {isStatusOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-md z-10">

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleStatus('All Status')}>
                            All Status
                        </p>

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleStatus('Active')}>
                            Active
                        </p>

                        <p className="p-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleStatus('Inactive')}>
                            Inactive
                        </p>

                    </div>
                )}

            </div>


            <div className="flex items-center gap-2 border border-gray-200 rounded-[12px] rounded-lg px-3 py-2">
                <CiSearch size={22} className="text-gray-500 shrink-0" />

                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full text-sm outline-none placeholder:text-sm"
                    onChange={(e)=> setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Filter