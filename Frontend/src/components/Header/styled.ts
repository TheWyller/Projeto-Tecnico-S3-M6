import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

const HeaderStyled = styled.header`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  h1 {
    margin-bottom: 50px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default HeaderStyled;
