import "./login_style.css";
const Login = () => {
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
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
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  trigerSignin();
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>New Here?!</h1>
              <p>
                Join the Green Revolution! Register today and earn credits while
                saving the planet
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  triggerSignup();
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
