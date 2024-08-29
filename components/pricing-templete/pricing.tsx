// PricingCards.js file
import { useState } from 'react';
import Image from 'next/image';
const PricingCards = () => {
  const cardData1= [
    {
      
      title: "Starter",
      paragraph:"Any three templete are free to use",
      price1: "Free",
     
    }

  ];




  const cardData2= [
 
    {
      image: "https://i.imgur.com/pJNFEHR.png",
      title: "Pro",
      paragraph1:"+Four Templetes are included",
      paragraph2:"+Additional Design Features",
      price2: "20",
     
    }
    
  ];



  const cardData3 = [
  
    {
      image: "https://i.imgur.com/Hg0sUJP.png",
      title: "Business+",
      paragraph1:"For companies that need to",
      paragraph2:"manage work happening",
      paragraph3:"accross multiple teams",
      price3: "100",
      dollarsign:"$",
      
    }
  ];














  return (
    <div className="w-full py-[3rem] h-100 px-8 bg-black  bg-[url('/assets/Pricing-bg.png')] bg-cover bg-no-repeat bg-center bg-black ">
        <h2 className="text-5xl font-xs text-white text-center py-2 mx-auto">
             We offer great <span className='text-blue-400'>price</span> plan <br/>for the application
            </h2>
<div className='mt-4 mb-6 ml-5 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
<Image className=''
        src="/assets/monthlyyearly-bg.png" // Path relative to the 'public' folder
        alt="An example image"
        width={150} // Desired width of the image
        height={100} // Desired height of the image
      />

<Image className=' mt-4 mr-5'
        src="/assets/arrow-bg.png" // Path relative to the 'public' folder
        alt="An example image"
        width={150} // Desired width of the image
        height={100} // Desired height of the image
      />
</div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 bg-gray-200 px-8  ">
        {cardData1.map((card, index) => (
          <div



            key={index}
            className={`w-full  shadow-xl flex flex-col p-4 my-8 px-8   rounded-b-3xl rounded-t-3xl hover:scale-105 duration-300 bg-white`}
          >
           
            <h2 className="text-2xl font-xs text-center py-4">
              {card.title}
            </h2>
            <p className="text-center text-sm font-xs mb-5">{card.paragraph}</p>

            <p className="text-center text-4xl font-bold mt-6 mb-6">{card.price1}</p>

            
            <button
              className={`delay:30 hover:-translate-y-2 bg-white hover:text-black border-2 border-black hover:bg-blue-50 duration-150 w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 `}
            >
             Get Started
            </button>
          </div>
        ))}



        {cardData2.map((card, index) => (
          <div
            key={index}
            className={` 
           w-full shadow-xl flex flex-col p-4 my-8 px-4   rounded-b-3xl rounded-t-3xl hover:scale-105 duration-300 bg-blue-400`}
          >
         
         <h2 className="text-md font-bold text-center text-white rounded-3xl bg-black py-2 px-2">
             Selected
            </h2>
            <h2 className="text-2xl font-xs text-center py-2">
              {card.title}
            </h2>
            <p className="text-center text-sm font-xs mb-2">{card.paragraph1}</p>
            <p className="text-center text-sm font-xs mb-2">{card.paragraph2}</p>

            <p className="text-center text-4xl font-bold mt-1"><span className='text-xs '> $</span>{card.price2}<span className='text-xs '> /month</span></p> 

          
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
             
            <button
              className={` delay:30 hover:-translate-y-2 hover:text-black text-white hover:bg-gray-50 duration-150 w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
             Get Started
            </button>
          </div>
        ))}



{cardData3.map((card, index) => (
          <div
            key={index}
            className={`slide-in-down w-full  shadow-xl flex flex-col p-4 my-8 px-8   rounded-b-3xl rounded-t-3xl hover:scale-105 duration-300 bg-white`}
          >
           
            <h2 className="text-2xl font-xs text-center py-4">
              {card.title}
            </h2>
            <p className="text-center text-sm font-xs mb-1">{card.paragraph1}</p>
            <p className="text-center text-sm font-xs mb-1">{card.paragraph2}</p>
            <p className="text-center text-sm font-xs mb-1">{card.paragraph3}</p>
           

            

            <p className="text-center text-4xl font-bold mt-6 mb-6"><span className='text-xs '> $</span>{card.price3}<span className='text-xs '> /month</span></p> 




            <button
              className={`delay:30 hover:-translate-y-2 delay:30 bg-white hover:text-black hover:bg-blue-50 duration-150 w-[150px] rounded-md font-medium my-4 mx-auto px-6 py-3 border-2 border-black`}
            >
             Get Started
            </button>
          </div>
        ))}

















      </div>
    </div>
  );
};

export default PricingCards;