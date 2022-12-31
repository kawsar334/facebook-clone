import "./register.scss"
import {NavLink} from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
      <div className="cart">
        <div className="left">
          <h1>Hello world </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, saepe ducimus sit quia cupiditate unde aut eligendi obcaecati esse nesciunt nulla .</p>
          <span>Already have an Account? </span>
          <NavLink to="/login">
          <button>login</button>
          </NavLink>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form className="registerForm">
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="name" placeholder="name" />

            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password..." />
            <button >register </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register