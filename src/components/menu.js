import {Link,Route,Routing} from "react-router-dom"
import { UseSelector, useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeinfo } from "../ReduxConfig/userslice"
export default function Menu(){

  const dispach=useDispatch()
  const navigate=useNavigate()

    const loginuser=useSelector(state=>state.loginUser.value)



    var logout=()=>{
      dispach(changeinfo({islogin:false,name:undefined,token:undefined}))
      navigate('/ ')
    }
    return <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Logo</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
{loginuser.islogin?<>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={logout}>Logout</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={'/register'}>Register</Link>
        </li> */}
      </ul>
</>:
<>
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/home'}>Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/register'}>Register</Link>
        </li>
      </ul>
</>}
     
    </div>
  </div>
</nav>
    </>
}