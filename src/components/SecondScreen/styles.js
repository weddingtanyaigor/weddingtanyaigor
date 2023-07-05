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
  max-width: calc(100vw - 40px);
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
