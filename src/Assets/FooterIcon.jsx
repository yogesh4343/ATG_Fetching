import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import FooterIcon from '../Assets/FooterIcon';

const FooterIcons = () => {
    return(
         <div>
            <div className="div flex  gap-[20px] flex-wrap justify-center">
            <FaFacebook className="w-[22px] h-[22px] text-gray-500" />
            <FaTwitter className="w-[22px] h-[22px] text-gray-500" />
            <BsInstagram className="w-[22px] h-[22px] text-gray-500" />
            <FaTelegramPlane className="w-[22px] h-[22px] text-gray-500" />
            <FaPinterest className="w-[22px] h-[22px] text-gray-500" />
            <FaYoutube className="w-[22px] h-[22px] text-gray-500" />
            <IoMdMail className="w-[22px] h-[22px] text-gray-500" />
            <FaGooglePlusG className="w-[22px] h-[22px] text-gray-500" />
            </div>
         </div>
)}

export default FooterIcons
