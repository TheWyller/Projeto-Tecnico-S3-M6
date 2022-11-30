import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const DivStyled = styled.div`
  animation: ${appearFromLeft} 1s;

  background-color: var(--Grey-0);
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  padding: 50px;
  justify-content: space-evenly;
  border-radius: 20px;
  h1 {
    color: var(--Grey-2);
    margin-bottom: 15px;
  }
  label {
    font-family: "Roboto Condensed", sans-serif;
  }
  input {
    font-family: "Titillium Web", sans-serif;
    &:hover {
      background-color: var(--Green-1);
      color: var(--Green-5);
    }
  }
  span {
    color: red;
    font-family: "Titillium Web", sans-serif;
    font-weight: bold;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: var(--Grey-1);
`;
