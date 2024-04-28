import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
const store=configureStore({

    reducer:{
        loginUser:userReducer
    }
})
store.subscribe(()=>{
    var str=JSON.stringify(store.getState().loginUser)
    localStorage.setItem('data',str)
})
export default store;