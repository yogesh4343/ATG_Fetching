import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Assets/Loader";
import UserHeading from "../Assets/UserHeading";
import { addColumn, toggleSideColumn } from "../Store/Slice/UserSlice";
import ColumnCard from "./ColumnCard";

const Card = ({ele ,ids , id , firstName , lastName , username , jobTitle , email , Bio , avatar}) => {
    let idx  = ele.id;

    const [showSidebar, setShowSidebar] = useState(false);
    const { userDetail}  = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    const sideBar = ()=>{
        showSidebar == true ? setShowSidebar(false) : setShowSidebar(true);
        dispatch(toggleSideColumn(showSidebar , idx , userDetail ));;
        dispatch(addColumn(showSidebar ));;
    };
    
  return (
       <div   onClick={sideBar}  className=" relative max-w-[90%] w-[23rem] md:w-[44rem] bg-gray-200 p-4 m-2 mx-auto rounded-xl flex items-center gap-7 md:gap-16 cursor-pointer text-center flex-col md:flex-row  " >
      <img
        className=" w-16 h-15 md:w-28 md:h-28 rounded-full"
        src={ele.avatar}
        alt="Img"
      />

      <div className="cont gap-6">
        <div className="name flex gap-5">
        
          <UserHeading  font="[28px]" name={ele.profile.firstName}  text="left"  />
          <UserHeading  font="[28px]" name={ele.profile.lastName}  text="left"  />
        
        </div>
        
       <div className="title flex gap-1 sm:gap-3 md:gap-4 items-center">
       <span className=" text-[12px] md:text-[20px] font-bold flex gap-2 items-center align-center " ><span>Title : </span>  <div> <UserHeading  font="[18px]" name={ele.jobTitle} text="Jon Title"  /></div> </span>
      
       </div>

       <div className="hiddenCont flex text-[12px] lg:hidden flex-col text-left">
        <div className="name">UserName : {ele.profile.username}</div>
           <div className="name">Email : {ele.profile.email}</div>
             <div className="name">Bio : {ele.Bio}</div> 
       </div>

      </div>

     



      {/* .id  */}

      <div className="id w-10 h-10 bg-black rounded-full text-white text-center flex justify-center items-center absolute -top-4 -left-3  ">{ids + 1}</div>

</div>



  );
};

export default Card;
