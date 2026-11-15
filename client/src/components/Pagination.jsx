
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ currentPage, totalPages, setCurrentPage, postsPerPage, setPostsPerPage }) {

    return (
        <div className="flex items-center justify-center w-full mt-6">

            <div className="flex items-center gap-2">

                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center disabled:opacity-30"
                >
                    <IoIosArrowBack size={22} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-11 h-11 rounded-full ${currentPage === index + 1
                                ? 'bg-[#243C7B] text-white'
                                : 'text-gray-800 hover:bg-gray-100'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="w-10 h-10 flex items-center justify-center disabled:opacity-30"
                >
                    <IoIosArrowForward size={22} />
                </button>

            </div>


            <div className="relative">
                <select
                    value={postsPerPage}
                    onChange={(e) => {
                        setPostsPerPage(Number(e.target.value))
                        setCurrentPage(1)
                    }}
                    className="appearance-none cursor-pointer border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 outline-none bg-white text-sm font-medium text-gray-700 shadow-sm hover:border-[#243C7B] focus:border-[#243C7B] focus:ring-2 focus:ring-[#243C7B]/10 transition-all"
                >
                    <option value={10}>10 / Page</option>
                    <option value={20}>20 / Page</option>
                    <option value={50}>50 / Page</option>
                </select>

                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </span>
            </div>


        </div>
    )
}

export default Pagination
