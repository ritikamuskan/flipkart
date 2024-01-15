import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
const Wrapper = styled.section`
  body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
  }

  .box {
    margin-left: 200px;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }

  .section1,
  .section2 {
    // flex: 1;
    padding: 20px;
    border: 1px solid #ddd;
    height: 400px;
  }

  .section1 {
    background-color: blue;
    opacity: 0.7;
    width: 200px;
    justify-content: center;
  }

  .section2 {
    background-color: white;
    width: 400px;
  }

  .input_box {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    margin-top: 10px;
  }
  input {
    outline: none;
    border-color: transparent;
  }

  .p_container {
    margin-top: 40px;
    font-size: 0.85rem;
    color: #878787;
  }
  .btn {
    display: grid;
    padding: 10px 20px;
    height: 80px;
    grid-row-end: 20px;
  }

  .opt_btn {
    background-color: orange;
    border: none;
  }
  .login_btn {
    border-color: transparent;
    box-shadow: 3px 3px #888888;
    margin-top: 20px;
  }
  h1 {
    color: white;
    padding: 20px;
  }

  .sec1_containet p {
    color: #ffffff;
    margin-left: 12px;
  }
  .inputs {
    margin-top: 20px;
  }
`;
const Login = () => {
  const [value, setvalue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState();
  const Navigation = useNavigate();
  const handleinput = () => {
    if (!value.email || !value.password) {
      seterror("enter value");
      return;
    }
    seterror("");
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Wrapper>
        <div className="box">
          <div className="section1">
            <div className="sec1_containet">
              <h1>Looks like you are new here!</h1>
              <p>Sign up with your mobile number to get started</p>
            </div>
          </div>
          <div className="section2">
            <div className="inputs">
              {/* <div className="input_box">
                <InputField
                  onChange={(e) =>
                    setvalue((prev) => ({ ...prev, name: e.target.value }))
                  }
                  label="Name"
                  placeholder="Enter your name"
                />
              </div> */}
              <div className="input_box">
                <InputField
                  onChange={(e) =>
                    setvalue((prev) => ({ ...prev, email: e.target.value }))
                  }
                  label="Email"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="input_box">
                <InputField
                  onChange={(e) =>
                    setvalue((prev) => ({ ...prev, password: e.target.value }))
                  }
                  label="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>

            <p className="p_container">
              By continuing, you agree to Flipkarts Terms of Use and Privacy
              Policy.
            </p>
            <p>{error}</p>
            <div className="btn">
              <button onClick={handleinput} className="opt_btn">
                Log in
              </button>

              <button className="login_btn">
                <Link to="/SignPAge" style={{ textDecoration: "none" }}>
                  <p>
                    New Customer?<span>Sign up</span>
                  </p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Login;
