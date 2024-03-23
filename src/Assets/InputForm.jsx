import React from 'react';
import { FaEye } from "react-icons/fa";

const InputForm = ({placeholder , eye}) => {
// let eye = true;

  return (
    <div className=' h-[40px]  relative '>
        <input type="text" placeholder={placeholder} className='text-[#939CA3]  w-[100%] h-[40px] bg-white pl-4 rounded-md border-[1px] border-[#EBEDF0] text-[12px]' />
       

       {eye === true ?  <span className="eye absolute right-0 top-3 flex items-center align-center text-center mr-4"> <FaEye /> </span> : null}
    </div>
  )
}

export default InputForm
