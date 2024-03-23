import React from 'react'
import FormBtn from './Buttons/FormBtn'
import Google from "../Image/google.webp";
import Facebook from "../Image/facebook.webp";
import InputForm from './InputForm';
import LoginBtn from './Buttons/LoginBtn';
import { FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className="gap-3 flex flex-col cursor-pointer m-auto ">
       <FormBtn img={Google} text="Continue with Google " />
       <FormBtn img={Facebook} text="Continue with Facebook " />

       <div className="div flex items-center justify-between">
       <hr className='w-[100px] h-[2px] bg-[#CED4DA]'/>
        <p className="text-[10px] font-[600]">Or connect with</p>
       <hr className='w-[100px] h-[2px] bg-[#CED4DA]'/>
       </div>

<InputForm placeholder="Email" eye={false} />
<div className="pass">
<InputForm placeholder="Password" eye={true} />
{/* <span className="text-[10px] font-[600] text-[#939CA3] flex justify-end mt-2 mr-2">Password strength</span> */}
</div>


<div className="tick flex justify-between">
    <div className=""> <input type="checkbox"  /> <span className="text-[12px] font-[400]" >Remember me</span> </div>
    <div className="p text-[12px] font-[400] flex items-center gap-2 ">
<FaLock /> Forgot password?
</div>
</div>

<LoginBtn />

    </div>
  )
}

export default Login
