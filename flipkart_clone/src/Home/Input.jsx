import styled from "styled-components";
const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .container input {
    padding: 8px 15px;
    outline: none;
    color: #000;
    border: 2px solid white;
    border-radius: 5px;
  }
  .container label {
    font-weight: 500;
    font-size: 1rem;
    color: #474545;
  }
  .container input:hover {
    border-color: #accc;
  }
  .container input:focus {
    border-color: #3b3b6f;
  }
`;

const Input = (props) => {
  return (
    <Wrapper>
      <div className="container">
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} />
      </div>
    </Wrapper>
  );
};

export default Input;
