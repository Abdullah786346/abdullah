'use client'
import React from 'react'
import RightSidebar from './rightSidebar'
import LeftSidebar from './leftSidebar'
import Main from './mainContent'
import { useState } from 'react'

const Customization: React.FC = ()=>{
    const [showTemplates, setShowTemplates] = useState(false);
    const handleShowTemplate= function (){
        setShowTemplates(!showTemplates)
    }
    return (
        <div>
               
            <h1 className='flex justify-center border border-1 border-gray-800 h-[10vh] bg-gray-400'>Navbar Goes Here</h1>
            <div className='block flex justify-center lg:hidden '> 
            <button className='rounded-md text-md py-3 px-1 font-bold bg-[#6183F2] text-[#ffffff] mt-[8vh]' onClick={
                ()=>{
            handleShowTemplate()
                }
            }>
                Change Template
            </button>
           </div>
           
        <div className='grid grid-cols-3 lg:grid-cols-4 h-[100vh] mt-2 border border-3 lg:mt-[10vh]'>
         {/**Left Sidebar */}
            <LeftSidebar btnClicked = {showTemplates}/>
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



