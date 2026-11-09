import React from 'react'
import Top from './Top'
import Sidebar from './Sidebar'
import Filter from './Filter'

function HeaderComp() {
    return (
        <div className='flex items-start gap-6'>
            <Sidebar />
            <div className='flex flex-col gap-6 p-5 w-full'>
                <Top />
                <Filter/>
            </div>
        </div>
    )
}

export default HeaderComp