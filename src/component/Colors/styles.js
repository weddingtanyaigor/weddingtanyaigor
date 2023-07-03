import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  max-width: 980px;
  margin: 32px 0;
`;

export const Rounds = styled.div`
  display: flex;
`;

export const Round = styled.div`
  background-color: ${(props) => props.color};
  box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 50%;
  width: 80px;
  margin: 0 0 0 -15px;
  height: 80px;
`;

export const Btn = styled.button`
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;
  background-color: #5a86ad;
  border-radius: 10px;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
`;
