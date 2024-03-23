import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Assets/Loader";
import UserHeading from "../Assets/UserHeading";
import { addUser } from "../Store/Slice/UserSlice";
import BigCard from "./BigCard";
import Card from "./Card";
import ColumnCard from "./ColumnCard";
import Grid from "./Grid";
import PaginatedItems from './PaginatedItems';
import Pagination from "./Pagination";

const NewCardContainer = () => {
  const [ApiData, setApiData] = useState("");
//   const [grid, setGrid] = useState(false);
  const Api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

  const { sidebar } = useSelector((state) => state.userDetails);

  const [userCardClick, setUserCardClick] = useState(false);

//   pagination 
  const [currentPage , setCurrentPage] = useState(1);
  const [postsPerPage , setPostsPerPage] = useState(6)
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(Api));
  }, []);

  const CardFunc = () => {
    setUserCardClick(true);
    console.log("CardFunc");
  };

  const { status, userDetail } = useSelector((state) => state.userDetails);
  const { column, singleUser } = useSelector((state) => state.userDetails);

  const { Bio, avatar, createdAt, id, jobTitle, profile } = singleUser;
  const { username, email, firstName, lastName } = { ...profile };



  let newArr = []
  if (userDetail.data == undefined) {
    console.log("userDetail", userDetail.data);
  } else {
    for (let i = 10; i < userDetail.data.length; i++) {
     newArr.push(userDetail.data[i]);
    }
  }



//   pagination 
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts  = posts.slice(indexOfFirstPost , indexOfLastPost);
const currentPosts  = newArr.slice(indexOfFirstPost , indexOfLastPost);

// change page /
const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber);
};

const pageNumbers = [];
const totalPosts = newArr.length;

for (let i = 1; i < Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push([i]);
   }

   const handlePageClick= (number)=> {
    setActivePage(number);
   }

   const [activePage , setActivePage] =useState (1);

   {pageNumbers.map((curEl,idx)=>{
    <li key={idx}> <span onClick={()=>{
        handlePageClick(curEl);
         paginate(curEl);
    }}>{curEl}</span> </li>
   })}

  const cardClick= ()=>{
    console.log("cardClick")
  }
  return (
    <div className="flex flex-col md:justify-center   ">

{status == "loading"  ? ( <Loader />
          ) 
          :
          <>

          <div className="cont flex justify-around" >
          <div className="scroll">
        <div
          onClick={CardFunc}
          className="flex flex-row items-center flex-wrap justify-center gap-7 p-6 w-[100%] md:w-[45rem]  max-h-[100vh] gap-2  overflow-scroll  h-[100%]         ">
          {status == "loading"  ? (
            <Loader />
          ) 
          :
           (
            newArr &&
            newArr.map((curEl, id) => {
          
              return <div>
              <Card  ele={curEl} ids={id}  />
              </div>
              ;
            })
          )}

        </div>
      </div>



      <div className="">
        {userCardClick === true ? (
          <div className="">
  
            <BigCard firstName={firstName} username={username} lastName={lastName} jobTitle={jobTitle} email={email} Bio={Bio} avatar={avatar} />
          </div>
        ) : (
          <div className=" w-[40vw] hidden h-[57vh] bg-[#f7f5f9] text-gray-800 top-[9rem] p-4 md:p-12 gap-6  lg:flex flex-col   right-10  font-[system-ui] font-bold text-[21px] md:text-[52px] text-center align-center justify-center   ">
            No data to show
          </div>
        )}
      </div>
      
          </div>

</>
}
    
    </div>
  );
};

export default NewCardContainer;
