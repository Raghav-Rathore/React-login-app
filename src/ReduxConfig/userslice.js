import { createSlice } from "@reduxjs/toolkit";

function inistate(){
    var ob={islogin:false,name:undefined,token:undefined}
    var data=localStorage.getItem('data')
    // console.log(data)

    if (data!=null){
        data=JSON.parse(data)
        console.log(data.value)
        ob=data.value
    }
    return ob
}


const Slice=createSlice({
    name:'user',
    initialState:{
        value:inistate()},
    reducers:{
        changeinfo:(state,action)=>{
            state.value=action.payload
        }
    }
})
export default Slice.reducer
export const {changeinfo}=Slice.actions