import React from "react";

const LeftSidebar: React.FC = function(){
{/**Though this will cause trouble in react due to having repeated keys but its just a manifestation of how to fech templates */}
    const numberOfTemplates = 8;
    const templates = Array(numberOfTemplates).fill(0).map((_, index)=>{
        const templateId = `template-${index}`;
        return(
            <div key={templateId} className='w-full h-[15vh] border border-2 border-gray-600 my-10'>
                    Template-{index}
                </div>
        )
    })

    return(
    <div className='hidden lg:block col-span-1 overflow-scroll'>
                <h3 className='text-lg font-bold my-3 sticky top-0 bg-[#ffffff]'>Change Template</h3>
               
                {templates}
               
            </div>
    )
}

export default LeftSidebar;