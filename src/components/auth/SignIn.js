import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase-config";
import './signin.css';
import { Link,useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [err,setErr]=useState("");

  const signIn = (e) => {
    e.preventDefault();
    setErr("");
    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        console.log(userCredential);
        navigate("/main")
      })
      .catch((error) => {
        console.log(error);
        setErr("Invalid email or password");
        console.log(err);
      });
  };

  return (
    <div className="sign-in-container">
      <form>
        <h1 className="login">Log In to your Account</h1>
        <input
        className="inp"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
        id="inp2"
        className="inp"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
       <div>
       <p className="error">{err}</p>
       </div>
        <div className="btn">
          
        <button onClick={signIn} type="submit" className="btn1">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
