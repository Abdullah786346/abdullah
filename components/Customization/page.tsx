'use client'
import React from 'react'
import RightSidebar from './rightSidebar'
import LeftSidebar from './leftSidebar'
import Main from './mainContent'
import { useState } from 'react'

const Customization: React.FC = ()=>{
    const [show, setShow] = useState(false);

    return (
        <div>
           
            <h1 className='flex justify-center border border-1 border-gray-800 h-[10vh] bg-gray-400'>Navbar Goes Here</h1>
            <button className='rounded-md block lg:hidden text-md font-bold bg-[#6183F2] text-[#ffffff]'>
                Change Template
            </button>
         
        <div className='grid grid-cols-3 lg:grid-cols-4 h-[100vh] mt-[10vh] border border-3'>
         {/**Left Sidebar */}
            <LeftSidebar />
            {
                /**
                 Middle Content
                 */
            }
            <Main/>
            
            {/**Right Sidebar */}
            <RightSidebar/>
        </div>
        </div>
    )
}

export default Customization



