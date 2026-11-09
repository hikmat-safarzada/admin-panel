import React from 'react'
import settingsIcon from '../../assets/setting-2.png'
import profile from '../../assets/profile.jpg'

function SidebarFooter() {
    return (
        <div className="flex flex-col gap-2 px-3 pb-4 pt-5 mt-auto border-t border-gray-100">
            <div className="w-full h-10 flex items-center gap-2 px-3 border border-gray-100 rounded-xl cursor-pointer">
                <img src={settingsIcon} alt="" className="w-4 h-4" />
                <p className="text-sm text-gray-500">
                    Settings
                </p>
            </div>
            <div className="w-full h-13 flex items-center gap-2 px-3 bg-[#243C7B] rounded-xl text-white">
                <img
                    src={profile} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
                <div>
                    <p className="text-sm">
                        Khayal Ahmadli
                    </p>
                    <p className="text-xs text-gray-300">
                        khahmadli
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SidebarFooter