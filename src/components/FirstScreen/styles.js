import styled from "styled-components";
import background from "./assets/bg.jpeg";

export const Container = styled.div`
  align-items: center;
  position: relative;
  background-image: linear-gradient(to bottom, transparent, gray),
    url(${background});
  background-position: top center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 8px;
  padding: 0 20px 35%;
  box-sizing: border-box;
`;

export const Names = styled.span`
  color: white;
  font-family: cursive;
  font-size: 38px;
`;

export const Day = styled.span`
  color: white;
  font-family: "Berlyna";
  font-size: 86px;
  line-height: 44px;
`;

export const DayDate = styled.span`
  color: white;
  font-family: cursive;
  font-size: 34px;
`;
