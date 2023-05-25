import "./Register.css";

const Register = () => {
    return (
        <div className="cover">
                  <div className="ilogin">
                  <div className="first">
                    <h1 className="head">Register</h1>
                    <p className="p1">to continue with the tab</p>
                  </div>
                  <div class="single-input">
                  <span><i class="fas fa-user"></i></span>
                  <input
                    type="text" 
                    placeholder="User Name"
                  ></input>
                  </div>
                  <div class="single-input">
                    <span><i class="fas fa-unlock"></i></span>
                    <input type="email" placeholder="Email"></input>
                  </div>
                  <div class="single-input">
                    <span><i class="fas fa-unlock"></i></span>
                    <input type="password" placeholder="Password"></input>
                  </div>
                  <button className="login_but">Log in</button>
                  <div className="foot">
                  <p className="ep1">Already have an account yet ?</p>
                  <a href="/login">Log in</a>
                  </div>
                  </div>
  
        </div>
    );
}

export default Register;