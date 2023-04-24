import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="h">
      <div className="whole">
        <div className="heading">Reminder Application</div>
        <div className="links">
          <h4>
            <Link to="/signin" className="link">
              SignIn
            </Link>
          </h4>

          <h4 className="l">
            <Link to="/signup" className="link">
              SignUp
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
