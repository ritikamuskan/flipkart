import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "../footer/Footer";
import { useState, useRef } from "react";

import { useUserContext } from "../context/Context";

const Home = () => {
  const { data } = useUserContext();

  const [search, setsearch] = useState("");
  const [filter, setfilter] = useState();
  console.log(filter);

  const timeoutRef = useRef(null);
  const [visiblelist, setvisiblelist] = useState(false);
  const handlehover = () => {
    clearTimeout(timeoutRef.current);
    setvisiblelist(true);
  };
  const handehoverLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setvisiblelist(false);
    }, 300);
  };
  const handlesearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value);

    if (search !== "") {
      const filterData = data.filter((item) => {
        if (item.category.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      });

      setfilter(filterData);
    } else {
      setfilter(data);
    }
  };

  return (
    <div>
      <>
        <Wrapper>
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="/../public/logo/fkheaderlogo.svg" alt="logo" />
              </Link>
            </div>
            <div>
              <div className="search_box">
                <input
                  onChange={handlesearch}
                  value={search}
                  className="search_input"
                  type="search"
                  placeholder="search Here..."
                />

                <IoSearch className="search_Icon" />
              </div>
              <div className="search_dropDown">
                {data
                  ?.filter((data) => {
                    const searchData = search.toLocaleLowerCase();
                    const value = data.category.toLocaleLowerCase();

                    return (
                      searchData &&
                      value.startsWith(searchData) &&
                      value !== searchData
                    );
                  })
                  .map((item) => {
                    console.log(item);
                    return (
                      <>
                        <div
                          onClick={() => setsearch(item.category)}
                          className="dropdown_row"
                        >
                          {item.category}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="hover_container">
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <div className="login">
                  <button
                    onMouseEnter={handlehover}
                    onMouseLeave={handehoverLeave}
                    className="login_button"
                  >
                    <IoIosContact className="login_icon" />
                    login
                  </button>
                </div>
              </Link>

              {visiblelist && (
                <ul
                  className="list"
                  onMouseEnter={handlehover}
                  onMouseLeave={handehoverLeave}
                >
                  <li>
                    <Link to="/SignPage">
                      <p className="signup">
                        New Custmor?<span>Sign Up</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link style={{ textDecoration: "none" }} to="/Cart">
                      Cart
                    </Link>
                  </li>
                  <li>Profile</li>
                </ul>
              )}
            </div>

            {/* <Link to="/Log_sing">log_sign</Link> */}
            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <div className="cart">
                <IoCartOutline className="cart_icon" />
                <p className="cart_p">Cart</p>
              </div>
            </Link>
          </div>
          <div className="containt">
            <Header />

            <Card data={search.length < 1 ? data : filter} />

            <Footer />
          </div>
        </Wrapper>
      </>
    </div>
  );
};

const Wrapper = styled.section`
  background-color: #c6c3c3;
  /* .show:hover + .list-categories {
    max-height: inherit;
    opacity: 1;
  } */
  .hover_container {
    position: relative;
    right: 0%;
  }
  .list {
    position: absolute;

    top: 70%;
    left: 30%;

    list-style: none;
    //z-index: 1;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 8px;
    white-space: nowrap;
  }
  .signup {
    cursor: pointer;
    display: inline-block; /* Display list items in a row */
    margin-right: 10px; /* Adjust spacing between list items */
  }
  .signup span {
    color: #236ae3;
  }
  .search_dropDown {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid gray;

    position: absolute;
  }
  .dropdown_row {
    text-align: start;
    margin: 2px;
    cursor: pointer;
  }

  .container {
    display: flex;
    height: 70px;
    align-items: center;
    background-color: white;
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
    background-color: #a3d8db;
    outline-width: 0;
    border-radius: 5px 0px 0px 5px;
  }
  .search_Icon {
    padding: 5px;
    height: 22px;
    background-color: #a3d8db;
    border-radius: 0px 5px 5px 0px;
  }

  .login_button {
    display: flex;
    gap: 3px;
    margin: 40px;
    padding: 5px;
    background-color: blue;
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

export default Home;
