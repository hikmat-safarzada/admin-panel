import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'

function DeletePost({ onClose, onConfirm, item }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-[450px] bg-white rounded-xl p-6 flex flex-col items-center gap-4 shadow-xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mt-2">
          <FaTrash className="text-red-500 text-xl" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">
          Delete Post
        </h2>

        <p className="text-gray-500 text-sm text-center px-4 leading-relaxed">
          Are you sure you want to delete the post - <span className="font-bold italic text-gray-700">{item?.title}</span>?
        </p>

        <div className="flex gap-3 mt-3 w-full">
          <button
            onClick={onClose}
            className="w-1/2 border border-gray-200 rounded-lg py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            No
          </button>

          <button
            onClick={onConfirm}
            className="w-1/2 bg-red-500 text-white rounded-lg py-3 text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Yes
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeletePost