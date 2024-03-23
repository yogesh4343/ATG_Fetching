import React from 'react'

const BigCard = ({ firstName, lastName, username, jobTitle, email, Bio, avatar }) => {
  return (
    <div>
      <div className="div2">
        <div className="w-[40vw] hidden  text-left bg-[#f7f5f9] text-gray-500 top-[9rem] p-12 gap-6  lg:flex flex-col  font-[system-ui]   ">
          <img className="w-44 h-44 " src={avatar} alt="img" />

          <div className="name flex  gap-2   text-[20px] ">
            <span className="text-black  text-[20px] ">Full Name : </span>
            <div className="first text-gray-500">{firstName}</div>
            <div className="last text-gray-500 ">{lastName}</div>
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
            <span className="text-black  text-[20px] ">Email : </span>{" "}
            {email}{" "}
          </div>

          <div className="bio   text-[20px] ">
            {" "}
            <span className="text-black  text-[20px] "> Bio : </span>{" "}
            {Bio}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard
