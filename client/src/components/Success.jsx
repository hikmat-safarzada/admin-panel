import { IoClose } from 'react-icons/io5'

function Success({category, onClose, operation}) {
    return (
        <div className="relative w-full max-w-[500px] bg-white rounded-2xl flex flex-col items-center justify-center gap-3 shadow-2xl p-8">
            {/* Sağ yuxarı küncdəki X düyməsi */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
                <IoClose size={22} />
            </button>

            {/* Yaşıl ikon dairəsi */}
            <div className="w-24 h-24 rounded-full bg-[#E8FBF0] flex items-center justify-center mb-1">
                <div className="w-16 h-16 rounded-full bg-[#00C853] flex items-center justify-center text-white">
                    <span className="text-3xl font-bold">✓</span>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-2">
                {operation === 'Add' ? 'Added Successfully!' : 'Updated Successfully'}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
                {operation === 'Update' ? `Your ${category} updated successfully!` : `Your ${category} added successfully!`}
            </p>

            <button
                onClick={onClose}
                className="bg-[#243C7B] hover:bg-[#1a2d5e] text-white w-full py-3 rounded-xl text-sm font-medium transition-colors"
            >
                Ok
            </button>
        </div>
    )
}

export default Success