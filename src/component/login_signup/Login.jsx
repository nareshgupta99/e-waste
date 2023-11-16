
import "./login_style.css";

import AuthService from "../../service/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from '../../redux/action/authAction';
import { privateAxios } from "../../service/helper";
const Login = () => {
 
  const dispatch = useDispatch();
  const navigate=useNavigate();

  // formik for validation
  const [signup,setSignup]=useState({
    name:"",
    email:"",
    password:""
  })

  const [login,setLogin]=useState({
    email:"",
   password:""
  })

  function handleSignup(e){
    const {name,value}=e.target;
    setSignup({...signup,[name]:value})
    console.log(signup)
  }

  function handleSignin(e){
    const {name,value}=e.target;
    setLogin({...login,[name]:value})
    console.log(login)
  }

  function register(e){
    e.preventDefault();
    AuthService.registerVisitors(signup)
            .then((resp) => {
              console.log("register")
              navigate("/recycler-form")
            })
            .catch((err) => {
              let msg = err.response.data.message;
              console.log(err)
            });
  }
  function signin(e){
    e.preventDefault();
    AuthService.login(login)
    .then((resp) => {
      navigate("/user-dashboard")
      let token = resp.data.token;
      localStorage.setItem('token', token);
      dispatch(loginSuccess(token));

      let roles = privateAxios.get("/user/roles")
     
      
    })
    .catch((err) => {
      let msg = err.response.data.message;
      // toast.error(msg, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      console.log(msg);
    });
  }
 
  
  function triggerSignup() {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
    console.log(container);
  }
  function trigerSignin() {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }
  return (
    <div id='loginbody'>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleSignup}
              value={signup.name}
              
            />
            {/* {errors.name && touched.name ? (
                <p className="form-error text-danger">{errors.name}</p>
              ) : (
                ""
              )} */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleSignup}
              value={signup.email}
              
            />
            {/* {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : (
                ""
              )} */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleSignup}
              value={signup.password}
             
            />
            {/* {errors.password  ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : (
                ""
              )} */}
            <input onClick={register} type="submit" value="Sign Up" />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleSignin}
              value={login.email}
              
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleSignin}
              value={login.password}
              
            />
            <a href="#">Forgot your password?</a>
            <input type='submit' value={"Sign In"} onClick={signin}/>
            <Link to='/visitor-login' > User signup</Link>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back! echo-hero!</h1>
              <p>
                Log in and continue your journey towards greener and sustainable
                future
              </p>
              <input type="text"
                className="ghost"
                id="signIn"
                onClick={() => {
                  trigerSignin();
                }}
                value={"Sign In"}
              />
                
              
            </div>
            <div className="overlay-panel overlay-right">
              <h1>New Here?!</h1>
              <p>
                Join the Green Revolution! Register today and earn credits while
                saving the planet
              </p>
              <input type="button"
                className="ghost"
                id="signUp"
                onClick={() => {
                  triggerSignup();
                }}
                value={"Sign Up"}
              />
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
