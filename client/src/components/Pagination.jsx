
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
                        className={`w-11 h-11 rounded-full ${
                            currentPage === index + 1
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

            <select
                value={postsPerPage}
                onChange={(e) => {
                    setPostsPerPage(Number(e.target.value))
                    setCurrentPage(1)
                }}
                className="border border-gray-200 rounded-full px-4 py-2 outline-none bg-white"
            >
                <option value={10}>10 / Page</option>
                <option value={20}>20 / Page</option>
                <option value={50}>50 / Page</option>
            </select>

        </div>
    )
}

export default Pagination
