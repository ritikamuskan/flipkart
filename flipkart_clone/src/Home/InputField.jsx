import styled from "styled-components";
const Wrapper = styled.section`
  .input_field {
  }
`;
const InputField = (props) => {
  return (
    <Wrapper>
      <div className="input_container">
        {props.label && <label>{props.label}</label>}
        <div className="input_field">
          <input type="text" {...props} />
        </div>
      </div>
    </Wrapper>
  );
};

export default InputField;
