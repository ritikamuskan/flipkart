import { useState } from "react";
import InputField from "./InputField";
import { auth } from "../Firebase";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Wrapper = styled.section`
  body {
    display: flex;
    font-family: arial;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .box {
    height: 500px;
    width: 600px;
    margin-left: 30px;
    display: flex;

    border: 1px solid black;
    margin-top: 20px;
  }
  .section1 {
    background-color: blue;
    width: 200px;
    //height: 400px;
    opacity: 0.7;
  }
  .sec1_containet {
    margin-top: 20px;
    color: white;
    padding: 10px;
  }
  .sec1_containet p {
    margin-top: 20px;
  }
  .section2 {
    background-color: white;
    width: 400px;
    border: 1px solid black;
  }

  .input_box {
    margin-top: 20px;
    width: 80%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    border-bottom: 1px solid black;
  }
  .input_box input {
    outline: none;
    border-color: transparent;
  }
  .btn {
    /* height: 60px;
    width: 150px; */

    display: grid;
    padding: 10px 20px;
    height: 80px;
    grid-row-end: 20px;
  }
  .btn button {
    background-color: orange;
    border: none;
    margin-top: 10px;
  }
  .login_btn span {
    text-decoration: none;
    color: blue;
  }

  /* .btn {
    background-color: blue;
  }
  .btn:disabled {
    background-color: grey;
  }
  .box {
  } */
  span {
    text-decoration: none;
  }
  .p_container {
    margin-top: 40px;
    margin-left: 10px;
    font-size: 0.85rem;
  }
`;

const SignPage = () => {
  const navigate = useNavigate();
  const [btnDisable, setbtnDisable] = useState(false);
  const [error, seterror] = useState("");
  const [value, setvalue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlesubmit = () => {
    if (!value.name || !value.email || !value.password) {
      seterror("enter value");
    }
    seterror("");
    setbtnDisable(true);

    createUserWithEmailAndPassword(
      auth,

      value.email,
      value.password
    )
      .then(async (res) => {
        setbtnDisable(false);

        const user = res.user;
        //const user = auth.currentUser;
        await updateProfile(user, {
          displayName: value.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setbtnDisable(false);
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <div className="box">
        <div className="section1">
          <div className="sec1_containet">
            <h1>Looks like you are new here!</h1>
            <p>Sign up with your mobile number to get started</p>
          </div>
        </div>
        <div className="section2">
          <div className="input_box">
            <InputField
              onChange={(e) =>
                setvalue((prev) => ({ ...prev, name: e.target.value }))
              }
              label="Enter your name"
              placeholder="enter your name"
            />
          </div>
          <div className="input_box">
            <InputField
              onChange={(e) =>
                setvalue((prev) => ({ ...prev, email: e.target.value }))
              }
              label="Enter your Email"
              placeholder="enter your Email"
            />
          </div>
          <div className="input_box">
            <InputField
              onChange={(e) =>
                setvalue((prev) => ({ ...prev, password: e.target.value }))
              }
              label="Enter your Password"
              placeholder="enter your Password"
            />
          </div>
          <p className="p_container">
            By continuing, you agree to Flipkarts Terms of Use and Privacy
            Policy.
          </p>
          <div className="btn">
            <p>{error}</p>
            <button
              disabled={btnDisable}
              onClick={handlesubmit}
              style={{ backgroundColor: btnDisable ? "gray" : "green" }}
            >
              Sign up
            </button>

            <button>
              <p className="login_btn">
                Exixting User?
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <span>Log In</span>
                </Link>
              </p>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignPage;
