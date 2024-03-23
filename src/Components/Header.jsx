import React, { useState } from 'react'
import Login from '../Assets/Login';
import Para from '../Assets/Para';
import SignUp from '../Assets/SignUp';
import Img3 from "../Image/img3.png";

const Header = () => {

  const  [login, setLogin] = useState(true);
  const [color , setColor] = useState(true);
  const [underLine , setUnderLine] = useState(true);

  const SignFunc = ()=>{
      if(login == true){
        setLogin(false);
        setColor(false);
        setUnderLine(false);
      }
  }
  const LoginFunc = ()=>{
    if(login == false){
      setLogin(true);
    }
  }

    // text-[#8064a2]    text-[#0096c8]
    let text1 = "Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…";
    let text2 = "If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.";


  return (
    <div className=" bg-[#F7F5F9] pt-20 corsor-pointer ">
    <div className="max-w-[90%]  m-auto flex md:justify-between flex-wrap sm:flex items-center justify-center">

          <div className="left w-[100vw] sm:w-[704px] font-[600] text-[19px]  text-left sm:text-[40px] m-auto">
           <div className="heading md:flex text-center  md:text-left">
           <span>Explore your </span>
            <span className=" text-[#0096c8] md:ml-2 ">hobby </span>
            <span className="md:ml-2 ">or </span>
            <span className="text-[#8064a2] md:ml-2 "> passion</span>
           </div>


          <div className="text text-left">
            <Para para={text1}  />
            <span className="hidden md:block"><Para para={text2} className=""  /></span>
          </div>

          <div className="img hidden sm:block">
            <img src={Img3} alt="img" />
          </div>

          </div>




      <div className="right cursor-pointer w-[282px] sm:w-[410px] mb-4 mx-auto">

        <div className="logins flex my-4 gap-4  sm:justify-flex-start">
          <div className="signup text-[20px] font-[600] text-[#939CA3] " onClick={SignFunc}> Sign In</div>
          <div className="login text-[20px] font-[600] text-[#8064A2]" onClick={LoginFunc}> Join In</div>
        </div>
         {login === true ?  <Login /> : <SignUp />}
      </div>

      <div className="img sm:hidden">
            <img src={Img3} alt="img" />
          </div>
      </div>

    </div>
  )
}

export default Header
