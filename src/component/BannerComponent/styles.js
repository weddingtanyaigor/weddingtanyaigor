import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(204, 204, 202);
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  width: 100%;
  justify-content: center;
`;

export const Texts = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  width: 100%;
  justify-content: center;
  animation-name: example;
  animation-duration: 4s;
  z-index: 2;
  @keyframes example {
    0% {
      transform: scale(3);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 70vh solid rgb(156, 162, 165);
  border-right: 100vw solid transparent;
  z-index: 1;
`;

export const Triangle1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 70vh solid rgb(240, 231, 229);
  border-right: 50vw solid transparent;
  z-index: 1;
`;

export const NavigationBar = styled.div`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px 32px;
  top: 0;
  padding: 20px;
  width: calc(100% - 40px);
  flex-wrap: wrap;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const NamesContainer = styled.div`
  align-items: center;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  gap: 12px;

  z-index: 2;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const PersonName = styled.p`
  color: white;
  position: relative;
  min-width: 50px;
  font-size: 36px;
  margin: 0;
`;

export const Let = styled.span`
  color: white;
  position: relative;
  width: 82px;
  height: 96px;
  font-size: 36px;
  margin: 0;
`;

export const PersonLetter = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 56px;
  margin: 0;
`;

export const PersonLetter1 = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  font-size: 56px;
  margin: 0;
`;

export const Line = styled.div`
  width: 96px;
  border: 1px solid white;
`;
