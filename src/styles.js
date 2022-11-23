import styled from "styled-components";
import bg from "./assets/bg.jpg";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  padding-left: calc(50vw - 172px);
  background-image: url(${bg});
  background-size: auto;

  @media (max-width: 500px) {
    padding-left: 0;
  }
`;

export const Layer = styled.img`
  z-index: 1;
  position: fixed;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const TopLayout = styled.img`
  z-index: 4;
  position: fixed;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const BotLayout = styled.img`
  z-index: 4;
  position: fixed;
  top: 600px;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Frame = styled.iframe`
  height: 573px;
  width: 284px;
  position: fixed;
  margin: 40px 30px;
  border: 1px solid black;
  z-index: 100;
`;
