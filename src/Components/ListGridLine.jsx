import React from 'react';
import { FaListAlt } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const ListGridLine = () => {
  return (
    <div className="flex gap-5 py-6 px-6 lg:px-20 justify-end ">
        <div className="list text-[20px] md:text-[30px]"> <FaListAlt /> </div>
        <div className="grid text-[20px] md:text-[30px] "> <IoGrid /> </div>
    </div>
  )
}

export default ListGridLine
