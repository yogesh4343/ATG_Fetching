import React, { useState } from "react";
import UserHeading from "../Assets/UserHeading";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
const ColumnCard = ({ content, sidebar }) => {
  const { Bio, avatar, createdAt, id, jobTitle, profile } = content;
  const { username, email, firstName, lastName } = { ...profile };

  const [hidden, setHidden] = useState(sidebar);
  const CrossFunc = () => {
    if (hidden === true) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return hidden == true ? (
    <div className="div relative">
      <div className="w-[40vw] h-[97vh] bg-[#979597] text-white top-[2rem] p-12 gap-6  flex flex-col right-0 fixed     ">
        <span className="text-black font-extrabold">
          {" "}
          <UserHeading font="[48px]" name="User Details" text="left" />{" "}
        </span>

        <div className="id ">Id : {id}</div>
        <img className="w-44 h-44 " src={avatar} alt="img" />

        <div className="name flex  gap-2   text-[20px] ">
          <span className="text-black  text-[20px] ">Full Name : </span>
          <div className="first text-white">{firstName}</div>
          <div className="last text-white ">{lastName}</div>
        </div>

        <div className="userName   text-[20px] ">
          <span className="text-black  text-[20px] ">UserName : </span>{" "}
          {username}
        </div>
        <div className="userName   text-[20px] ">
          <span className="text-black  text-[20px] ">Job Title : </span>{" "}
          {jobTitle}
        </div>
        <div className="userName   text-[20px] ">
          <span className="text-black  text-[20px] ">Email : </span> {email}{" "}
        </div>

        <div className="bio   text-[20px] ">
          {" "}
          <span className="text-black  text-[20px] "> Bio : </span> {Bio}
        </div>

        <div
          className="cross w-[4rem]   h-[4rem] bg-black text-white flex justify-center items-center  text-2xl  absolute top-0 right-0 mx-4 cursor-pointer rounded-full  "
          onClick={CrossFunc}
        >
          {" "}
          <ImCross />{" "}
        </div>
      </div>
    </div>
  ) : null;
};

export default ColumnCard;
