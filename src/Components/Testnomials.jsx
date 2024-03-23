import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Heading from '../Assets/Heading';
import { FaCirclePlay } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "../Image/image.png";


const Testnomials = () => {
  return (
    <div className='bg-[#F7F5F9]  max-w-[90%] w-[100%]      my-12 mx-auto flex   '>
      <div className="innerDiv  w-[100%] justify-center      m-auto flex flex-col gap-5  p-4  ">
      <div className="flex text-center items-center gap-3 justify-center md:justify-start">
          <span> <RiDoubleQuotesL className="w-[33px] h-[33px] text-[#fff]  bg-[#8064A2] rounded-full  text]" />  </span>  <Heading heading="Testimonials"/> 
          </div>


          <div className="cont ms:text-[18px] font-[300] text-gray-700 text-[12px] md:text-[18px]     ">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </div> 



            <div className="lower flex m-auto lg:flex-row flex-col-reverse items-center gap-3 ">

                <div className="left  h-[100px]   bg-[#CCC1DA] flex justify-around text-center items-center gap-2 p-[12px] rounded-md  ">
                    <div className="one"> <FaCirclePlay className="w-[40px] h-[40px] rounded-full bg-white"/> </div>

                    <div className="two flex relative text-center items-center   gap-3">   
                    <div className="span w-[12px] h-[12px] rounded-full bg-[#8064A2] absolute left-0"></div> 
                    <div className="span w-[120px] xs:w-[200px] sm:w-[280px] md:w-[300px] lg:w-[438px] h-[2px] rounded-md bg-[#FFFFFF]">  </div> 
                    <div className="span text-[#8064A2] text-[12px] font-400 ">0:00</div> 
                    </div>

                    <div className="three">
                        <img src={Image} alt="im"  className=" w-[50px] h-[50px] rounded-full"/>
                    </div>
                </div>

                <div className="right flex gap-2 md:gap-4  items-center  ">
                    <div className="left   ">  <img src={Image} alt="im"  className="  w-[70px] h-[70px] md:w-[100px] md:h-[100px]  rounded-full"/> </div>
                    <div className="right items-start">
                        <div className="top1 text-[#8064A2] text-[16px] font-[600] ">Shubha Nagarajan</div>
                        <div className="top2 text-[#0096C8] text-[12px] md:text-[14px] font-[400]">Classical Dancer</div>
                    </div>
                </div>

            </div>
    </div>
    </div>
  )
}

export default Testnomials
