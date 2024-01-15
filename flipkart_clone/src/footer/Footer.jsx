import styled from "styled-components";
const Wrapper = styled.section`
  .footer {
    height: 300px;
    background-color: #353434;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .containt a {
    display: block;
    margin-top: 5px;
  }
  .ragister_address {
    width: 150px;
  }
  .ragister_address p {
    width: 200px;
    word-wrap: normal;
  }
  .mail p {
    width: 100px;
    word-wrap: normal;
  }
`;
const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="footer">
          {/* <div className="footer_containt"> */}
          <div className="containt">
            <p>About</p>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
          </div>
          <div className="containt">
            <p>Contact us</p>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
          </div>
          <div className="containt">
            <p>Carrer</p>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
          </div>
          <div className="containt">
            <p>About</p>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
            <a>about</a>
          </div>
          <div className="mail">
            <p>Mail us</p>
            <p>
              Lorem ipsum, dolor sit amet tia aboriosam eum tempore cumque unde
              consequuntur quam enim esse? Alias.
            </p>
          </div>
          <div className="ragister_address ">
            <p>Ragisterd office Address</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              omnis molestiae praesentium. Cum nisi, omnis fugit aliquam
              assumenda ipsam sit voluptate, magnam porro et optio cupiditate
              nobis quae, ad labore?
            </p>
          </div>
        </div>

        {/* </div> */}
      </Wrapper>
    </>
  );
};

export default Footer;
