//import Fashion from "../component/Fashion";
// import Electronics from "../component/Electronics";
// import Grocery from "../component/Grocery";
// import Mobiles from "../component/Mobiles";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.section`
  .header {
    margin-top: 10px;

    height: 80px;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-evenly;
  }
  .header_section {
    margin: 10px;
  }
`;
const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="header_section">
          <div className="header">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Grocery"
            >
              Grocery
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/Electronics"
            >
              Electronics
            </Link>
            <Link
              to="/Fashion"
              style={{ textDecoration: "none", color: "black" }}
            >
              Fashion
            </Link>
            <Link
              to="/Mobiles"
              style={{ textDecoration: "none", color: "black" }}
            >
              Mobiles
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
