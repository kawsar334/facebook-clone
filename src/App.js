import './App.css';
import  {BrowserRouter,Route  , Routes, } from "react-router-dom"  ;
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import "./style.scss" ;




function App() {


  return (

    <BrowserRouter >
    <Routes>
      <Route  path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:id' element={<Profile />} />

    </Routes>


        

    </BrowserRouter>
  );
}

export default App;
