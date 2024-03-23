import React from 'react';
import { CiSearch } from "react-icons/ci";

const Search = ({placeholder , btn , width}) => {
  return (
    <div>
       <div className="middle hidden md:flex" >
                {/* <input type="Search Here" className="w-[300px] h-[40px] pl-4 border-[1px] bg-[#EBEDF0] hover:bg-[#F8F9FA] text-[12px]  text-[#939CA3]" placeholder={placeholder} /> */}
                <input type="Search Here" className={`w-[194px] h-[40px] lg:w-[300px] lg:h-[40px] pl-4 border-[1px] bg-[#EBEDF0] hover:bg-[#F8F9FA] text-[12px]  text-[#939CA3]`} placeholder={placeholder} />
                <span className={` w-${width} h-[40px] text-white rounded-tr-[8px] rounded-br-[8px] bg-[#8064A2] flex text-center items-center justify-center  `}> {btn}   </span>
            </div>
    </div>
  )
}

export default Search
