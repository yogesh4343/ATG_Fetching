import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});


const userSlice = createSlice({
    name:"user",
    initialState:{
        status: STATUS.ERROR,
        userDetail:{},
        column:"",
        singleUser:{},
        sidebar:"",
    },
    reducers:{
        

        getStatus(state,action){
            state.status = action.payload
        },
        getUserDetail(state, action){
            // state.userDetail = action.payload
            state.userDetail = action.payload
            // state.userDetail.push(action.payload)
        },
        getColumn(state,action){
            state.column = action.payload
        },
        getContent(state,action){
            state.singleUser = action.payload;
        },
        getSidebar(state,action){
            state.sidebar = action.payload;
        }
       
    }
})

export default userSlice.reducer;

export const {getStatus  , getUserDetail  , getColumn , getContent , getSidebar  } = userSlice.actions



export function addUser(Api){
    return async function addUserThunk(dispatch , getState) {
        dispatch(getStatus(STATUS.LOADING))
        try{
            const {data} = await axios.get(Api)
            dispatch(
                getStatus(STATUS.IDLE),
            )

            dispatch(
                getUserDetail({data        }),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}



// export function toggleSideColumn(data , idx , userDetail){
export function toggleSideColumn(data , idx , userDetail){
    // console.log("key" , id , userDetail)

    return async function toggleSideColumnThunk(dispatch , getState) {
        dispatch(getStatus(STATUS.LOADING))
        try{
            // const {data} = await axios.get(Api)

            const flt = userDetail.data.filter((curEl,id)=>{
                // console.log(curEl)
                return  curEl.id === idx;
            })

            console.log("flt" , flt[0]);

          
            dispatch(
                getStatus(STATUS.IDLE),
            )

            dispatch(
                getColumn(data),
            )
            dispatch(
                getContent(flt[0]),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}



export function addColumn(showSidebar){
        console.log("showSidebar" , showSidebar);
    return async function addColumnThunk(dispatch , getState) {
        dispatch(getStatus(STATUS.LOADING))
        try{

            dispatch(
                getStatus(STATUS.IDLE),
            )

            dispatch(
                getSidebar(showSidebar),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}
