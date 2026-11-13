import React from 'react'

function Top({ postCount, onAddClick }) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='font-medium text-[24px]'>News & Announcements</h2>
        <p>{postCount} posts</p>
      </div>
      <button
        onClick={onAddClick}
        className='flex items-center justify-center gap-2 bg-[#243C7B] w-65 h-10 rounded-[30px] text-white cursor-pointer'
      >
        <div className='w-7 h-7 rounded-full bg-[#3D5DB2] text-center'>
          +
        </div>
        <p>Add News or Announcement</p>
      </button>
    </div>
  )
}

export default Top