"use client"
import { useState } from 'react';
import { FaUserCircle,FaIdBadge ,FaUser,FaEnvelope,FaLock,FaLockOpen} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
export default function Signinform() {

  const [formData, setFormData] = useState({

    firstname:'',
    lastname:'',
    username: '',
    email: '',
    password: '',
    repassword:'',
    agreeToTerms: false,
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  console.log('Form Data:', formData);
};






 return(
  <div>
<div className="h-[100vh] w-full flex justify-center items-center   bg-[url('/assets/signin-bg.png')] bg-cover bg-no-repeat bg-center bg-black ">
    




  <aside className=' w-full  max-w-md  '>



<form action=""  onSubmit={handleSubmit} className="signup-form p-6 " >
<h1 className="text-left text-blue-800 font-bold text-3xl  m-0 mb-8">Sign In</h1>







  <div className='flex flex-col items-center '>      
    
   






      






            <div className='bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border-2 border-white  '> 
            <label htmlFor="username"></label>
        <FaUser className="text-white-500"  color='blue' m-2 />
        <input  
                       type="text"
                       name="username"
                       id="username"
                       placeholder="Enter Username"
                       value={formData.username}
                       onChange={handleChange}
                       required
                        
        className='py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl '/>
            </div>








      






            <div className='bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border-2 border-white  '> 
            <label htmlFor="password"></label>
        <FaLock className="text-white-500"  color='blue' m-2 />
        <input  
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        
        className='py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl '/>
            </div>













         </div>




 






           





            









<div className='w-64 mb-3 flex'>

<label htmlFor="agreeToTerms" className='flex items-center text-xs text-white'><input type="radio"    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required     className="mr-5 "/>Remember Me</label>
</div>





       



        
            
            <button type="submit" className='bg-blue-800 text-white font-medium py-2 px-8 hover:text-black rounded-3xl  mt-2 mb-6'> Login </button>
         
            <br/>
        <p  className='text-white flex text-xs cursor-pointer text-center flex mt-5'>Or,Login with   

        
    
        <a href="https://www.facebook.com">
      <Image src='/assets/Google.png' alt="Google Icon" width={10} height={10} className='ml-16' /></a>
      <a href="https://www.google.com"><Image src='/assets/FB.png' alt="Facebook Icon" width={15} height={10} className='ml-2'/></a>
   
  
</p>
  <p  className='text-white text-xs cursor-pointer mt-5'>Don't have an account?<a href="/signup-templete"><span className='text-blue-800 px-3 ' >Create One</span></a></p>

 

</form>


</aside>
</div>

    </div>
 );
       

};
