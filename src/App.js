import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
// import Cart from './cart';
function App() {
  return <>
  

  <div class="alert alert-primary" role="alert">
  <u style={{color:'black'}}>  <b>  <i>  <h1 className='text-center'>Welcome to CodeBetter</h1> </i> </b><hr></hr> </u>
</div>
<Menu></Menu>
<div className='container'>
  <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>

  </Routes>
</div>
  </>
 
}

export default App;
