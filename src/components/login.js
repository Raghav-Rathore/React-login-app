import { useRef,useState } from "react"
import { useNavigate } from "react-router-dom";
import urls from "../Service/Apiurl";
import webservice from "../Service/webservice";
import { UseDispatch, useDispatch } from "react-redux";
import{changeinfo} from '../ReduxConfig/userslice';

export default function Login(){

    let  [msg,setmeg]=useState("")
const navi=useNavigate();
    var emileBox=useRef()
    var passBox=useRef()
const dispach=useDispatch();
    var log= async(event)=>{
        event.preventDefault()
         var ob={
            
            email:emileBox.current.value,
            password:passBox.current.value,
         }

         const responce=await webservice.postapicall(urls.UserLogin,ob)
         console.log(responce);
         console.log({msg:responce.data.message})
         if (responce.data.status){
            
        dispach(changeinfo({islogin:true,name:responce.data.data.name,token:responce.data.data.token}))
            navi('/home')
    }else{
            setmeg(responce.data.message);
         }
         event.target.reset()
        }
    return <>
    <div className=" container">
        <form onSubmit={log}>
        <h1>
        <u>    Login Form </u>  
            </h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <input type="text" ref={emileBox} className="form-control" placeholder="Enter email"></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <input type="text"ref={passBox} className="form-control" placeholder="Enter password"></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <button  className="btn btn-primary" type="submit">Login</button>
                    &nbsp;&nbsp; <span  style={{color:'red'}}>{msg}</span>
                </div>
            </div>
        </form>
    </div>
    </>
}