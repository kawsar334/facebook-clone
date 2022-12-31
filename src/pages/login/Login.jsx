import { NavLink } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="cart">
        <div className="left">
        <h1>Hello world </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, saepe ducimus sit quia cupiditate unde aut eligendi obcaecati esse nesciunt nulla .</p>
        <span>Don't you have an Account? </span>
        <NavLink to="/register" >
        <button>Register</button>
        </NavLink>
        </div>
        <div className="right">
            <h1>Login</h1>
          <form className="loginForm">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="password..." />
            <button >Login </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login