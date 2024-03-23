import React from 'react';


const FormBtn = ({img , text}) => {
  return (
    <div className=" w-[100%] md:w-[410px] h-[40px]  rounded-md border-[1px] border-[#8064A2] flex text-center items-center px-4 gap-[12px] md:gap-24  ">
        <div className="logo"><img className="w-[16px] h-[16px]" src={img} alt="Google" /></div>
        <div className="cont text-[14px] font-[600] text-[#08090A] rounded-md"> {text} </div>
    </div>
  )
}

export default FormBtn
