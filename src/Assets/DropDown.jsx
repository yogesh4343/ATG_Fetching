import React from 'react'

const DropDown = () => {
  return (
    <div>
       <div className="clickOpen absolute ">
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px] text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">People - Community</p>
            {/* <hr /> */}
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px]  text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">Places - Venues</p>
            {/* <hr /> */}
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px]  text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">Programs - Events</p>
            {/* <hr /> */}
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px]  text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">Products - Store</p>
            {/* <hr /> */}
            <p className="text-[#6D747A]  bg-[#fff]  w-[220px] h-[42px]  text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]" >Blogs</p>
           </div>
    </div>
  )
}

export default DropDown
