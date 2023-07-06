import styled from "styled-components";
import { Swiper } from "swiper/react";
import calen from "./assets/calen.jpg";

import heart from "./assets/heart.jpg";

export const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 390px;
  margin: 0 auto;
`;

export const Line = styled.div`
  margin: 80px 0;
  width: 80px;
  border-bottom: 1px solid black;
`;

export const Text = styled.span`
  font-family: "Allegretto";
  font-size: 42px;
  margin-bottom: 32px;
`;

export const Texts = styled.span`
  font-family: "Mgnon";
  font-size: 20px;
  text-align: center;
  margin-bottom: 18px;
`;

export const Pictures = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 10px;
  max-width: calc(100vw - 40px);

  @media (max-width: 690px) {
    height: 420px;
  }
`;

export const Cal = styled.div`
  width: 350px;
  height: 280px;
  border-radius: 10px;
  max-width: calc(100vw - 40px);
  position: relative;
  background-image: url(${calen});
  background-size: 350px 280px;
`;

export const Hearts = styled.div`
  background-image: url(${heart});
  background-size: 350px 280px;
`;

export const SwiperCont = styled(Swiper)`
  max-width: 390px;
  --swiper-theme-color: white;
`;

export const Programm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  width: 335px;
`;

export const ProgrammLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProgrammTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: start;
  width: 125px;
`;

export const Times = styled.span`
  font-family: "Allegretto";
  font-size: 28px;
`;

export const TimesTitle = styled.span`
  font-family: "Mgnon";
  font-size: 14px;
  text-align: center;
`;

export const TimesSubTitle = styled.span`
  font-family: "Mgnon";
  font-size: 12px;
  text-align: center;
`;

export const VerticalLine = styled.div`
  position: absolute;
  right: 50%;
  top: 50px;
  border-right: 1px solid black;
  height: 325px;
`;

export const Dot1 = styled.div`
  background-color: black;
  position: absolute;
  right: 49%;
  top: 49px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const Dot2 = styled.div`
  background-color: black;
  position: absolute;
  right: 49%;
  top: 375px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const Dot3 = styled.div`
  background-color: black;
  position: absolute;
  right: 49%;
  top: 234px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

export const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
`;

export const Color1 = styled.div`
  border-radius: 50%;
  background-color: rgb(211, 198, 190);
  width: 45px;
  height: 45px;
`;

export const Color2 = styled.div`
  border-radius: 50%;
  background-color: rgb(245, 244, 241);
  width: 45px;
  height: 45px;
`;

export const Color3 = styled.div`
  border-radius: 50%;
  background-color: rgb(243, 243, 243);
  width: 45px;
  height: 45px;
`;

export const Color4 = styled.div`
  border-radius: 50%;
  background-color: rgb(238, 231, 222);
  width: 45px;
  height: 45px;
`;

export const Color5 = styled.div`
  border-radius: 50%;
  background-color: rgb(240, 230, 219);
  width: 45px;
  height: 45px;
`;

export const Color6 = styled.div`
  border-radius: 50%;
  background-color: rgb(224, 224, 224);
  width: 45px;
  height: 45px;
`;

export const Color7 = styled.div`
  border-radius: 50%;
  background-color: rgb(210, 215, 215);
  width: 45px;
  height: 45px;
`;

export const Color8 = styled.div`
  border-radius: 50%;
  background-color: rgb(158, 160, 168);
  width: 45px;
  height: 45px;
`;

export const Color9 = styled.div`
  border-radius: 50%;
  background-color: rgb(204, 204, 193);
  width: 45px;
  height: 45px;
`;

export const Color10 = styled.div`
  border-radius: 50%;
  background-color: rgb(232, 230, 224);
  width: 45px;
  height: 45px;
`;
export const Color11 = styled.div`
  border-radius: 50%;
  background-color: rgb(238, 231, 222);
  width: 45px;
  height: 45px;
`;
export const Color12 = styled.div`
  border-radius: 50%;
  background-color: rgb(228, 221, 211);
  width: 45px;
  height: 45px;
`;
export const Color13 = styled.div`
  border-radius: 50%;
  background-color: rgb(244, 240, 235);
  width: 45px;
  height: 45px;
`;
export const Color14 = styled.div`
  border-radius: 50%;
  background-color: rgb(240, 231, 229);
  width: 45px;
  height: 45px;
`;
export const Color15 = styled.div`
  border-radius: 50%;
  background-color: rgb(221, 214, 204);
  width: 45px;
  height: 45px;
`;
export const Color16 = styled.div`
  border-radius: 50%;
  background-color: rgb(216, 218, 217);
  width: 45px;
  height: 45px;
`;
export const Color17 = styled.div`
  border-radius: 50%;
  background-color: rgb(245, 244, 241);
  width: 45px;
  height: 45px;
`;
export const Color18 = styled.div`
  border-radius: 50%;
  background-color: rgb(204, 204, 202);
  width: 45px;
  height: 45px;
`;
export const Color19 = styled.div`
  border-radius: 50%;
  background-color: rgb(206, 212, 206);
  width: 45px;
  height: 45px;
`;
export const Color20 = styled.div`
  border-radius: 50%;
  background-color: rgb(237, 230, 218);
  width: 45px;
  height: 45px;
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  width: 100%;
`;

export const TextsField = styled.span`
  font-family: "Mgnon";
  font-size: 20px;
  text-align: start;
`;

export const SubTextsField = styled.span`
  font-family: "Mgnon";
  font-size: 18px;
  text-align: start;
  color: gray;
`;

export const LineFull = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`;

export const Input = styled.input`
  outline: none;
  padding-left: 0 !important;
  padding-right: 0 !important;
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
  background-color: transparent !important;
  border-radius: 0 !important;
  margin: 0;
  height: 60px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 1.33;
  font-family: "Mgnon";

  width: 100%;
`;

export const CheckOnIt = styled.div`
  display: flex;
  gap: 10px;
  font-family: "Mgnon";

  p {
    margin: 0;
    font-family: "Mgnon";
  }
`;

export const Checkbox = styled.input`
  background-color: transparent;
  border: 1px solid #dcebfa;
  padding: 5px;
  font-family: "Mgnon";
`;

export const Btn = styled.button`
  color: #000000;
  border: 1px solid #ffffff;
  background-color: rgb(209, 209, 209);
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  font-family: Mix;
  font-weight: 400;
  text-transform: uppercase;
  height: 48px;
  margin-bottom: 32px;
  width: 100%;

  :hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`;

export const BtnDisabled = styled.button`
  color: #000000;
  border: 1px solid #ffffff;
  background-color: rgb(209, 209, 209);
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  font-family: Mix;
  font-weight: 400;
  text-transform: uppercase;
  height: 48px;
  width: 100%;
`;

export const BtnSended = styled.button`
  color: #000000;
  border: 1px solid #ffffff;
  background-color: rgb(210, 215, 215);
  border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-border-radius: 30px;
  font-family: Mix;
  font-weight: 400;
  text-transform: uppercase;
  height: 48px;
  width: 100%;
`;
