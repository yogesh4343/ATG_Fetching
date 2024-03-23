import React from 'react';
import FooterCont from '../Assets/FooterCont';
import FooterIcons from '../Assets/FooterIcon';
import FooterTextHeading from '../Assets/FooterTextHeading';
import Search from '../Assets/Search';
import Button from '../Assets/Buttons/Button';
import Img1 from "../Image/img1.png";
import Img2 from "../Image/img2.png";
import { IoIosArrowUp } from "react-icons/io";
import NavBar from './NavBar';


const Footer = () => {
    const array1 = ["About Us", "Our Services", "Work with Us", "FAQ", "Contact Us"];
    const array2 = ["Sign Up", "Add a Listing", "Claim Listing", "Post a Query", "Add a Blog Post", "Other Queries"];
    const array3 = ["Listings", "Blog Posts", "Shop / Store", "Community"];
    // const array4 = ["<FaFacebook />" , "<FaTwitter/ >" , "BsInstagram" , "FaPinterest" , "FaYoutube" , "FaTelegramPlane" , "FaGooglePlusG" , "IoMdMail" ];


    const arrowFunc = ()=>{
        window.scrollTo({top: 0, behaviour:"smooth"});
    }

    return (
        <>

            <div className="max-w-[100%] bg-[#F7FDFF] pt-12 h-[100%] ">
                <div className="upperFooter w-[90%] m-auto  ">
                    <span className=" text-[24px] md:text-[36px] font-[500]">Your </span>
                    <span className="text-[24px]  text-[#8064a2] md:text-[36px] font-[500] " >Hobby,</span>
                    <span className=" text-[24px]  md:text-[36px] font-[500]"> Your</span>
                    <span className="text-[24px]  text-[#0096c8] md:text-[36px] font-[500] "> Community...</span>

                    <div className="mt-4 flex justify-between " >
                        <div className={`w-[112px] h-[40px] rounded-lg border-[1px] flex justify-center items-center bg-[#8064A2] text-white`}>
                            <span className='  font-[600]    '>  Get Started </span>
                           
                        </div>
                        <span onClick={arrowFunc} className="w-[40px] h-[40px] border-[1px] bg-[#fff] rounded-full  text-center flex justify-center items-center"> <IoIosArrowUp className="text-[#939CA3]"/> </span>
                    </div>
                </div>

                <div className="upperLower flex justify-center  gap-4 sm:gap-5 mt-5">
                    <img className=" w-[120.56px] h-[76px] xs:w-[200.56px] xs:h-[106px] sm:w-[250.56px] sm:h-[156px] lg:w-[531px] lg:h-[280px]" src={Img2} alt="img1" />
                    <img className=" w-[120.56px] h-[76px] xs:w-[200.56px] xs:h-[106px] sm:w-[250.56px] sm:h-[156px]  lg:w-[634px] lg:h-[302px]" src={Img1} alt="img1" />
                </div>
            </div>


            <div className="m-auto max-w-[90%] w-[100%] flex justify-between py-20 px-2  gap-4 flex-col md:flex-row flex-wrap ">

                <div className="one">
                    <FooterTextHeading text="Hobbycue" />
                    <FooterCont array={array1} />
                </div>

                <div className="two">
                    <FooterTextHeading text="How Do I" />
                    <FooterCont array={array2} />
                </div>

                <div className="three">
                    <FooterTextHeading text="Quick Links" />
                    <FooterCont array={array1} />
                </div>

                <div className="four">
                    <FooterTextHeading text="Social Media " />
                    <FooterIcons />

                    <div className="fourSecond mt-8">
                        <FooterTextHeading text="Invite Friends" />
                        {/* <Search placeholder="Email Id" btn="Invite" width="[56px]" /> */}
                        <div className="middle flex" >
                <input type="Search Here" className={`w-[100%] h-[40px] pl-4 border-[1px] bg-[#EBEDF0] hover:bg-[#F8F9FA] text-[12px]  text-[#939CA3]`} placeholder="Email ID" />
                <span className={` w-[60px] h-[40px] text-white rounded-tr-[8px] rounded-br-[8px] bg-[#8064A2] flex text-center items-center justify-center  `}> Invite   </span>
            </div>
                    </div>
                </div>


            </div>


            <div className="singleLineFooter m-auto max-w-[100%] h-[78px] w-[100%] flex justify-center bg-[#F7F5F9]  text-center items-center align-center">
                <span className="text-[12px] md:text-[15px] font-[500] text-[#08090A]">© Purple Cues Private Limited</span>
            </div>
        </>
    )
}

export default Footer
