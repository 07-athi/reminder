import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { Link,useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)

  const signUp = (e) => {
    e.preventDefault();
    setMessage("");
    if(email===null || password===null){
      setMessage( "All fields are mandatory!" );
      
      return;
    }
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        console.log(userCredential);
        
        
        setSubmitButtonDisabled(false);
        navigate("/")
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        console.log(error);
      });
  };
  

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1 className="login">Create Account</h1>
        <input
        className="inp"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
        className="inp"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="btn">
        <p>{setMessage}</p>
        <button onClick={signUp} id="btn2" disabled={submitButtonDisabled} className="btn1" type="submit">Sign Up</button>
        </div>
        <div>
          <p className="sp">Already have an account?{" "} 
          <span >
            <Link className="sp" to="/signin">login</Link>
          </span>
            </p>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;