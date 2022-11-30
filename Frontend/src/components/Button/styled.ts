import styled from "styled-components";

const ButtonStyled = styled.button`
  margin-top: 20px;
  border: none;
  width: 70vw;
  height: 50px;
  color: var(--Green-0);
  font-weight: bold;
  background-color: var(--Green-4);
  border-radius: 10px;
  box-shadow: 6px 6px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease;
  max-width: 300px;
  margin: 10px;
  font-size: large;
  font-family: "Roboto Condensed", sans-serif;
  &:hover {
    transform: scale(1.02);
  }
`;

export default ButtonStyled;
