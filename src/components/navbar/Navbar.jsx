import { Link } from "react-router-dom"
import  "./navbar.scss"



const Navbar = ({open, setOpen}) => {
  return (
    <div className="navbar">
         
          <div className="navLeft">
            <Link to="/" >
            <span>Facebook</span>
            </Link>
              <i className="fa-solid fa-house-user icon"></i>
              <i className="fa-regular fa-moon icon"></i>
              <i className="fa-solid fa-table-columns icon"></i>
              <div className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" name="" id=""  placeholder="Search .."/>
              </div>
          </div>
          <div className="navRight">
            { !open && <i className="fa-solid fa-bars  menuIcon" onClick={()=>setOpen(!open)}></i> 
              // <i className="fa-solid fa-xmark menuIcon" onClick={() => setOpen(!open)}></i>
              }
              <i className="fa-regular fa-user"></i>
              <i class="fa-regular fa-bell"></i>
              <i className="fa-regular fa-envelope"></i>
              <Link to="/login">Login</Link>
              <Link to="/login">Register</Link>

              <Link  to={`/profile/:id`}className="user">
           <img src="https://images.pexels.com/photos/11220223/pexels-photo-11220223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="---" />
                <span>Kawsar firoz</span>
              </Link>
          </div>

     
    </div>
  )
}

export default Navbar