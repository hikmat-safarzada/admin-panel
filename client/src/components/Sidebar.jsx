import React from 'react'
import SidebarHeader from './sidebar components/Header'
import SidebarBody from './sidebar components/Body'
import SidebarFooter from './sidebar components/Footer'

function Sidebar() {
  return (
    <aside className='w-85 h-screen flex flex-col bg-white border border-gray-200 shadow-sm p-6'>
        <SidebarHeader/>
        <SidebarBody/>
        <SidebarFooter/>
    </aside>
  )
}

export default Sidebar