import styled from "styled-components";
import background from "./assets/bg.jpeg";

export const Container = styled.div`
  position: relative;
  padding: 0 20px;

  .swiper-pagination-bullet {
    background-color: white;
  }

  .swiper-pagination-bullet-active {
    background-color: #faebdc;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  font-size: 34px;
  z-index: 112;
  padding: 10px 20px;
  margin: 0 auto;
  border-radius: 5px;
  width: calc(100% - 40px);
`;

export const DateFor = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  font-size: 34px;
  z-index: 112;
  padding: 0;
  margin: 0 auto;
  border-radius: 5px;
  width: calc(100% - 40px);
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 112;
  padding: 10px 20px;
  font-family: "Montserrat";
  margin: 22px auto 18px;
  font-size: 18px;
  border-radius: 5px;
  max-width: 980px;
`;

export const Pictures = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 10px;
  max-width: 980px;

  @media (max-width: 690px) {
    height: 420px;
  }
`;

export const Line = styled.div`
  margin: 32px auto;
  width: 96px;
  border-bottom: 1px solid black;
`;
