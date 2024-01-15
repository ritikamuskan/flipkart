import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
//import styled from "styled-components";
const Log_sing = (props) => {
  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("success");
      })
      .cath((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div>
          <h1>
            <Link to="/LoginPage">Login</Link>
          </h1>
          <br></br>
          <h1>
            <Link to="/SignUp">Singin</Link>
          </h1>
        </div>
        <button onClick={handlesignOut}>sign out</button>
        <br></br>
        <br></br>
        <h2>{props.name ? `Welcome -${props.name}` : "Login please"} </h2>
      </div>
    </>
  );
};

export default Log_sing;
