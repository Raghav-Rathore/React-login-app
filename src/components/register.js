import { useRef, useState } from "react"
import api from "../Service/Apiurl";
import webservice from "../Service/webservice";
export default function Register (){
    var [msg,setmsg]=useState("")
    var nameBox=useRef()
    var phoneBox=useRef()
    var emileBox=useRef()
    var passBox=useRef()
    var genderBox=useRef()
    
    var register= async(event)=>{
        event.preventDefault()
         var ob={
            name:nameBox.current.value,
            phone:phoneBox.current.value,
            email:emileBox.current.value,
            password:passBox.current.value,
            gender:genderBox.current.value
         }
            console.log(ob);
         const responce=await webservice.postapicall(api.UserRegistration,ob)
         
         console.log(responce.data);
        }



    return <>
    <div className=" container">
        <form onSubmit={register}>
            <h1>
            <u>     Register Form  </u>
            </h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <input type="text" ref={nameBox} className="form-control" placeholder="Enter name" required></input>
                </div>
                <div className="col-md-6">
                    <input type="text" ref={phoneBox} className="form-control" placeholder="Enter phone number" required></input>
                </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
                    <input type="text" ref={emileBox} className="form-control" placeholder="Enter email id"required ></input>
                </div>
                <div className="col-md-6">
                    <input type="text" ref={passBox} className="form-control" placeholder="Enter password" required></input>
                </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
                    <select className="form-control" ref={genderBox} required>
                        <option>Male</option>
                        <option>Female</option>

                    </select>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </div>
        </form>
    </div>
    </>
}