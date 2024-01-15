import styled from "styled-components";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [submitbtnDisable, setsubmitbtnDisable] = useState(false);
  const [error, seterror] = useState("");
  const handleSubmit = () => {
    if (!value.name || !value.email || !value.pass) {
      seterror("fill all fields");
      return;
    }
    seterror("");
    setsubmitbtnDisable(true);
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        setsubmitbtnDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        navigate("/Log_sing");
      })

      .catch((err) => {
        setsubmitbtnDisable(false);
        seterror(err.message);
      });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="innerBox">
          <h1 className="heading">login</h1>
          <Input
            label="Name"
            onChange={(e) =>
              setvalue((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter your name"
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChange={(e) =>
              setvalue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            onChange={(e) =>
              setvalue((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <div className="btn">
            <p className="error_msg">{error}</p>
            <button onClick={handleSubmit} disabled={submitbtnDisable}>
              Login
            </button>

            <p>
              Already Have an Account ?{" "}
              <span>
                <Link to="/LoginPage">Login</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.section`
  .container {
    height: 100%;

    width: 100%;
    background-color: #303094;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn button:disabled {
    background-color: grey;
  }
  .btn button {
    background-color: #0e0e94;
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
