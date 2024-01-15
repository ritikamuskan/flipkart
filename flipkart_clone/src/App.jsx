import "./App.css";
import Electronics from "./component/Electronics";
import Fashion from "./component/Fashion";
import Grocery from "./component/Grocery";
import Mobiles from "./component/Mobiles";
import Home from "./Home/Home";
import Login from "./Home/Login";
import Cart from "./Home/Cart";
import SignUp from "./Home/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Home/LoginPage";

//import { useEffect } from "react";
//import NavBar from "./navbar/NavBar";
//import Header from "./navbar/Header";
//import { auth } from "./Firebase";
//import { useState } from "react";
import SignPage from "./Home/SignPage";

function App() {
  // const [userName, setuserName] = useState("");
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setuserName(user.displayName);
  //     } else {
  //       setuserName("");
  //     }
  //   });
  // });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Mobiles" element={<Mobiles />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LoginPage" element={<LoginPage />} />

          <Route path="/SignPage" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
