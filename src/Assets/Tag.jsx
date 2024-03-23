import React from 'react';
import { IoIosPeople } from "react-icons/io";

const Tag = ({icon,tag , color , hov}) => {
  return (
    <div>
       <div className="top flex  items-center group-hover:text-white">
            {/* <div className="logoitems-center flex justify-center  text-[#8064A2]" > <IoIosPeople  className=" w-[40px] h-[20px] "/> </div> */}
            <div className={`logoitems-center flex justify-center text-${color} hover:text-${[hov]}  `} > {icon} </div>
            <div className="tag w-[83px]  h-[36px] font-[600] text-[24px]  hover:text-white    "> {tag} </div>
        </div>
    </div>
  )
}

export default Tag
