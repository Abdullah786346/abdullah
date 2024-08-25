'use client'
import React from "react";
import { useState, ChangeEvent } from "react";

const RightSidebar: React.FC = function(){
    const [color, setColor] = useState('#000000');
    const [fontColor, setFontColor] = useState('#000000');
    const [image, setImage] = useState('');
    const [font, setfont] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [addPage, setAddPage] = useState(false)

    const setColorValue = function (e:ChangeEvent<HTMLInputElement>){
        if (e.target.name === 'color'){
            setColor(e.target.value)
        }
        else if (e.target.name === 'fontColor'){
            setFontColor(e.target.value)
        }
    }
    return(
        <div className='col-span-1 ml-2'>
        <form action="" className='flex flex-col justify-end'>
        <div className='flex flex-col ml-2'>
        <label className='mt-2 font-bold text-lg'>Color</label>
        <div className='flex items-center'>
         <input type="color" name='color' className='rounded-lg w-7' value={color}
         onChange={(e)=>{
             setColorValue(e);
         }}/>
         <input type="text" name='color' className='bg-[#F1ECEC] rounded-md ml-2 w-[40%] mt-0'
         onChange={(e)=>{
             setColorValue(e);
         }}
         value={color}/>
         </div>
         <label className='mt-2 font-bold text-lg'>Font</label>
         <div>
         <select name="font" id="" className='border border-1 w-[50%] bg-[#F1ECEC]'
         onChange={(e)=>{
             setfont(e.target.value)
         }}
         >
             <option value="bold" >Bold</option>
             <option value="light">Light</option>
         </select>
         <input type="number" className='ml-3 w-[20%] bg-[#F1ECEC]' placeholder='24'
         onChange={(e)=>{
             setFontSize(e.target.value)
         }}
         />
         </div>
         <label className='mt-2 font-bold text-lg'>Font Color</label>
         <div className='flex items-center'>
         <input type="color" name='fontColor' className='rounded-lg w-7'
         onChange={(e)=>{
             setColorValue(e);
         }}
         value={fontColor}/>
         <input type="text" name='fontColor' className='bg-[#F1ECEC] rounded-md ml-2 w-[40%] mt-0'
         onChange={(e)=>{
             setColorValue(e);
         }}
         value={fontColor}/>
         </div>
         <label className='mt-2 font-bold text-lg'>Image</label>
         <input type="file"
         onChange={(e)=>{
             setImage(e.target.value)
         }}
         />

         <label className='mt-2 font-bold text-lg'>For more features</label>
         <input type="submit" className='ml-[10%] w-[80%] rounded-sm bg-[#6183F2] text-[#FFFFFF] shadow-lg shadow-gray-300' value='Paid Version'/>
         <div className='mt-2 text-lg font-bold'>
         <input type="checkbox"
         onChange={()=>{
             setAddPage((prev)=>{
                 return !prev;
             })
         }}
         /><span> Select to add this page</span>
         </div>
         </div>
         <div>
         <input type="submit"  className='ml-[25%] w-[50%] rounded-sm bg-[#6183F2] text-[#FFFFFF] shadow-lg shadow-gray-300' value='Done'/>
         </div>
        </form>
     </div>
    )
}

export default RightSidebar;