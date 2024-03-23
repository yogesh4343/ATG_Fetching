import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Pagination = () => {

    const { status, userDetail } = useSelector((state) => state.userDetails);



    const itemPerPage = 5;


    // const {data} = userDetail;
    // console.log(data);

    // const data =  userDetail.data
    // console.log("data: " , userDetail.data);


    // const data = [
    //     {name:"Harr" , id:1},
    //     {name:"Har" , id:2},
    //     {name:"Hr" , id:3},
    //     {name:"Hr" , id:3},
    //     {name:"Hr" , id:3},
    //     {name:"Hr" , id:3},
    //     {name:"Hr" , id:3},
    //     {name:"Hr" , id:3},
    //     {name:"Harr" , id:4},
    // ]

    const numberOfPage = Math.ceil(userDetail.data.length / itemPerPage);

    const pageIndex = Array.from({length : numberOfPage} , (_,idx)=> idx+1)

    const [currentPage , setCurrentPage] = useState(0);
    const rows = userDetail.data.slice(currentPage * itemPerPage , currentPage + 1 * itemPerPage);

    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }


  return (

   <div className="flex">

{rows.map((row)=>{
    return (
        <div>

            <div className="row">
                <div className="name">{row.name}</div>
                {pageIndex.slice(Math.max(0, currentPage - 2) , Math.min(numberOfPage , currentPage + 3 )).map((
                    page => <button key={page} onClick={()=> handlePageChange(page - 1 )} className={page === currentPage + 1 ? "active" : ""}> {page} </button>
                ))}
                <div className="name">{row.age}</div>
            </div>
        </div>
    )
    }
)}

<div>
    <button disabled={currentPage < 1}  onClick={()=> handlePageChange(currentPage - 1)}>prev</button>
    <button disabled={currentPage >= numberOfPage - 1}  onClick={()=> handlePageChange(currentPage + 1)} >next</button>
</div>

   </div>
   
  )
}

export default Pagination
