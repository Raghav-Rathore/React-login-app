// import {Link,Route,Routing} from "react-router-dom"

import { useEffect, useState } from "react"
// import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"

export default function Home() {

    // const [plist, setList] = useState([])
    // const [en,setEnable]=useState(false)   
    // const carts=useSelector(state=>state.carts.value)

    // const dispatch=useDispatch()
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then(data=>setList(data.products));
    // },[])

      
    
    return <>
        <h2 style={{color:'red'}}> This is Home Component</h2>
        
        
    </>
}