import styled from "styled-components";
import Fashion from "../component/Fashion";

const Card = ({ data }) => {
  // const [imagearr, setImagearr] = useState([]);

  return (
    <>
      <Wrapper>
        <>
          <div className="Card_container">
            <h1>Shop Now</h1>
            <div className="cards">
              {Array.isArray(data) ? (
                data?.map((prods) => {
                  const { id, title, image, price } = prods;

                  return (
                    <div className="card" key={id}>
                      <img src={image} />
                      <div className="name">{title}</div>
                      <div className="price">{price}</div>
                    </div>
                  );
                })
              ) : (
                <p>Data is not available or is not an array.</p>
              )}
            </div>
          </div>
        </>

        {/* <div className="Card_container">
          <h1>Fashon</h1>
          <div className="cards">
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
          </div>
        </div>
        <div className="Card_container">
          <h1>Top Deal</h1>
          <div className="cards">
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
            <div className="card">
              <img alt="image" src="/public/logo/img3.webp" />
              <div className="name">mackup</div>
              <div className="offer">incl of offer</div>
            </div>
          </div>
        </div> */}
      </Wrapper>
    </>
  );
};
export const Wrapper = styled.section`
  .Card_container {
    background-color: white;
    margin: 10px;
    height: 100%;
    border: 1px solid black;
  }
  h1 {
    font-weight: bold;

    margin-left: 20px;
    margin-top: 10px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .card {
    height: 250px;
    width: 15%;
    border: 1px solid gray;
    border-radius: 3px;
    display: grid;
    justify-content: center;

    margin-top: 20px;
  }
  img {
    max-width: 90%;
    height: 130px;
    padding: 10px;
  }
  .name {
    text-align: center;
    font-size: 0.85rem;
  }
  .price {
    text-align: center;
    font-weight: bold;
  }
`;

export default Card;
