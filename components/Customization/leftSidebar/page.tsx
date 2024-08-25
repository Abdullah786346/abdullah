import React from "react";

const LeftSidebar: React.FC = function(){
    return(

    <div className='col-span-1 flex flex-col justify-around'>
                <h3 className='text-lg font-bold'>Change Template</h3>
                <div className='w-full h-[15vh] border border-2 border-gray-600'>
                    Template-1
                </div>
                <div className='w-full h-[15vh] border border-2 border-gray-600'>
                    Template-2
                </div>
                <div className='w-full h-[15vh] border border-2 border-gray-600'>
                    Template-3
                </div>
                <div className='w-full h-[15vh] border border-2 border-gray-600'>
                    Template-4
                </div>
            </div>
    )
}

export default LeftSidebar;