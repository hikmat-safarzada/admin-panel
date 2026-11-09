import React from 'react'

function Top() {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='font-bold'>News & Announcements</h2>
            <p>210 posts</p>
        </div>
        <div className='flex items-center justify-center gap-2 bg-[#243C7B] w-65 h-10 rounded-[30px]
        text-white' >
            <div className='w-7 h-7 rounded-full bg-[#3D5DB2] text-center'>+</div>
            <p>Add News or Announcement</p>
        </div>
    </div>
  )
}

export default Top