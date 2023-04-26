import "./Login.css";

const Login = () => {
    return (
        <div className="cover">
                  <div className="ilogin">
                  <form>
                  <div className="first">
                    <h1 className="head">Log in</h1>
                    <p className="p1">to continue with the tab</p>
                  </div>
                  <div class="single-input">
                  <span><i class="fas fa-user"></i></span>
                  <input type="text" placeholder="User Name"></input>
                  </div>
                  <div class="single-input">
                    <span><i class="fas fa-unlock"></i></span>
                    <input type="password" placeholder="Password"></input>
                  </div>
                  <p className="fp">Forgot Password?</p>
          
                  <button className="login_but">Log in</button>
                  <p className="ep1">Don’t have an account yet ?</p>
                  <a href="/register">Register</a>
                  </form>
                  </div>

  
        </div>
    );
}

export default Login;