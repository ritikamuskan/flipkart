import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/../public/logo/fkheaderlogo.svg" alt="logo" />
            </Link>
          </div>
          <div className="search_box">
            <input
              className="search_input"
              type="search"
              placeholder="search Here..."
            />
            <IoSearch className="search_Icon" />
          </div>
          <Link to="/Login" style={{ "text-decoration": "none" }}>
            <div className="login">
              <IoIosContact className="login_icon" />
              <button className="login_button">login</button>
            </div>
          </Link>
          <Link to="/Cart" style={{ "text-decoration": "none" }}>
            <div className="cart">
              <IoCartOutline className="cart_icon" />
              <p className="cart_p">Cart</p>
            </div>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    display: flex;

    height: 70px;

    align-items: center;
    background-color: #f0ed28;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .logo {
    margin: 10px;
    margin-top: 18px;
  }
  .search_box {
    display: flex;
    align-items: center;
    flex: 1;
    border-radius: 20px;
    margin-right: 20px;
    padding-left: 50px;
  }
  .search_input {
    height: 32px;
    padding: 10px;
    border: none;
    width: 100%;

    outline-width: 0;
    border-radius: 5px 0px 0px 5px;
  }
  .search_Icon {
    padding: 5px;
    height: 22px;
    background-color: #fff;
    border-radius: 0px 5px 5px 0px;
  }
  .login {
    display: flex;
    margin: 40px;
    padding: 5px;
    background-color: #fff;
    gap: 3px;
  }
  .login_button {
    background-color: #fff;
    border: none;
  }
  .login_icon {
  }
  .cart {
    display: flex;
    background-color: #fff;
    margin: 40px;
    padding: 5px;
    gap: 3px;
  }
`;

export default NavBar;
