import styled from "styled-components";
import { appearFromLeft } from "../../styles/global";

export const SectionStyled = styled.section`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: var(--Green-1);
  min-height: 220px;
  max-width: 300px;
  border-radius: 10px;
  .text {
    width: 100%;
    padding-left: 20px;
    box-sizing: border-box;
  }
  h3 {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  p {
    font-weight: bold;
    margin-bottom: 5px;
    font-family: "Titillium Web", sans-serif;
    span {
      font-family: "Titillium Web", sans-serif;
      font-style: italic;
      font-weight: 500;
      margin-left: 10px;
    }
  }
`;
