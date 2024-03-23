
import React, { useState } from 'react'
import Logo from "../Image/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsPentagonFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from '../Assets/Search';
import { FaAngleDown } from "react-icons/fa";
import DropDown from '../Assets/DropDown';

const NavBar = () => {

    const [hide , setHide] = useState(false);
    const [hamburger , setHamburger] = useState(false);
    const navBtnClick = ()=>{
        if(hide===false){
            setHide(true)
        }else{
            setHide(false);
        }
    }

    const array1 = ["Explore","Hobbies"];

    const hamburgerFunc = ()=>{
        if(hamburger===false){
            setHamburger(true)
        }else{
            setHamburger(false);
        }
    }


    return (
        <div className="flex  justify-between max-w-[90%] sm:max-w-[96%]   w-full m-auto items-center text-center p-2 cursor-pointer  ">
            <div className="left w-[155px] lg:w-[240.26px] h-[60px] flex justify-center items-center "> <img src={Logo} alt="logo" /> </div>
            
            <Search placeholder="Search Here..." width="[40px]" btn={<CiSearch className="w-[16px] h-[16px] text-white " /> } />




           <div className="phnSize flex justify-center items-center text-center ">
       
           <div className="middle flex md:hidden " >
    <span className="w-[18px] h-[18px] rounded-tr-[8px] rounded-br-[8px] text-[#8064A2] flex text-center items-center justify-center  "> <CiSearch className="w-[26px] h-[26px] " />    </span>
</div>
<div className="right  flex text-center items-center align-center   md:justify-between gap-1 xl:gap-3  ">
    <div className="explore  h-[24px]  items-center gap-1  hidden md:flex   " onClick={navBtnClick} > <span className="icon text-[#8064A2] "><MdExplore /></span> <span className="explore font-[500] text-[10px] xl:text-[14px] flex justify-center items-center gap-1 relative">Explore <FaAngleDown /> 
    
    <div className="absolute top-12 right-[9.6rem]"> {hide===true ? <DropDown /> : null} </div>
     </span> </div>

    <div className="hobbies  h-[24px]  items-center gap-1  hidden md:flex "  > <span className="icon relative   "> <BsPentagonFill className=" text-[#8064A2] " />  <span className="absolute top-0 left-0 text-[10px] text-white  w-[100%] h-[100%] flex justify-center  items-center  "> <FaStar /> </span>   </span> <span className="explore font-[500] text-[10px] xl:text-[14px] flex ustify-center items-center gap-1">Hobbies  <FaAngleDown />  </span> </div>

    <div className="bookmark  w-[24px] h-[24px] text-[#8064A2]  hidden md:flex justify-center items-center "> <FaBookmark /> </div>
    <div className="bell  w-[24px] h-[24px] text-[#8064A2] flex justify-center items-center  "> <FaBell /> </div>
    <div className="cart  w-[24px] h-[24px] text-[#8064A2] hidden   md:flex justify-center items-center "> <FaShoppingCart />  </div>
    <div className="signIn hidden md:block   "> <button >Sign In </button> </div>
</div>

<div className="hamburger w-[24px] h-[24px] flex justify-center items-center md:hidden relative"  onClick={hamburgerFunc} >
        <GiHamburgerMenu /> 
{/* {hamburger===true ? <GiHamburgerMenu /> : null}  */}
        <div className="absolute top-12 right-[0rem] "> {hamburger===true ? <>
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px] text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">Explore</p>
            {/* <hr /> */}
            <p className="text-[#6D747A] bg-[#fff] w-[220px] h-[42px]  text-center align-center flex justify-center items-center border-[1px] hover:bg-[#F7F5F9]">Hobbies</p>
        </> : null} </div>
</div>
           </div>








          
        
        </div>

    )
}

export default NavBar
