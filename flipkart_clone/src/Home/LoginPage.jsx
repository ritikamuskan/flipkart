import styled from "styled-components";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
const Wrapper = styled.section`
  .container {
    height: 100%;

    width: 100%;
    background-color: #5e5ed2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .innerBox {
    width: 400px;
    height: 300px;
    border-color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;

    background-color: #ededf2;
  }
`;
const LoginPage = () => {
  const [value, setvalue] = useState({
    emial: "",
    pass: "",
  });
  const navigation = useNavigate();
  const [loginDisable, setLoginDisable] = useState(false);
  const [error, seterror] = useState("");
  const handleLogin = () => {
    if (!value.email || !value.pass) {
      seterror("enter value");

      return;
    }
    seterror("");
    setLoginDisable(true);
    signInWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        setLoginDisable(false);
        navigation("/Log_sing");
      })
      .catch((err) => {
        setLoginDisable(false);
        seterror(err.message);
      });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="innerBox">
          <h1 className="heading">login</h1>
          <Input
            onChange={(e) =>
              setvalue((prev) => ({ ...prev, email: e.target.value }))
            }
            label="Email"
            placeholder="Enter Email"
          />
          <Input
            onChange={(e) =>
              setvalue((prev) => ({ ...prev, pass: e.target.value }))
            }
            label="Password"
            placeholder="Enter Password"
          />
          <div>
            <div>{error}</div>
            <button disabled={loginDisable} onClick={handleLogin}>
              Login
            </button>

            <p>
              Already login ?{" "}
              <span>
                <Link to="/SignUp">sign up</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
