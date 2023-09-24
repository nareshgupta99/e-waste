
import "./login_style.css";

import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const VisitorLogin = () => {
  // formik for validation
  const [signup,setSignup]=useState({
    name:"",
    email:"",
    password:""
  })

  const [login,setLogin]=useState({
    loginEmail:"",
    loginPassword:""
  })

  function handleSignup(e){
    const {name,value}=e.target;
    setSignup({...signup,[name]:value})
    console.log(signup)
  }

  function handleSignin(e){
    const {name,value}=e.target;
    setSignup({...signup,[name]:value})
  }

  function register(e){
    e.preventDefault();
    AuthService.registerRecycler(signup)
            .then((resp) => {
              console.log("register")
            })
            .catch((err) => {
              let msg = err.response.data.message;
              console.log(err)
            });
  }
  function signin(){
    
  }
  const navigate=useNavigate();
  
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
    <>
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
              name="loginEmail"
              onChange={handleSignin}
              value={login.loginEmail}
              
            />
            <input
              type="password"
              placeholder="Password"
              name="loginPassword"
              onChange={handleSignin}
              value={login.loginPassword}
              
            />
            <a href="#">Forgot your password?</a>
            <input type='submit' value={"Sign In"} onClick={signin}/>
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
    </>
  );
};

export default VisitorLogin;
