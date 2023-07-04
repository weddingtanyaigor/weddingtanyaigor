import styled from "styled-components";
import { Swiper } from "swiper/react";
import calen from "./assets/calen.jpg";

import heart from "./assets/heart.jpg";

export const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
