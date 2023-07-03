import {
  Container,
  Triangle,
  Triangle1,
  Name,
  NamesContainer,
  PersonName,
  PersonLetter,
  PersonLetter1,
  Let,
  Line,
  Texts,
} from "./styles";
import { slide as Menu } from "react-burger-menu";

export default function BannerComponent() {
  const handleCconvertClick = () => {
    var elmntToView = document.getElementById("convert");
    elmntToView.scrollIntoView();
  };

  const handlePlaceClick = () => {
    var elmntToView = document.getElementById("place");
    elmntToView.scrollIntoView();
  };

  const handleProgClick = () => {
    var elmntToView = document.getElementById("prog");
    elmntToView.scrollIntoView();
  };

  const handleFormClick = () => {
    var elmntToView = document.getElementById("form");
    elmntToView.scrollIntoView();
  };

  return (
    <>
      <Menu>
        <Name onClick={handleCconvertClick}>ПРИГЛАШЕНИЕ</Name>
        <Name onClick={handlePlaceClick}>МЕСТО ПРОВЕДЕНИЯ</Name>
        <Name onClick={handleProgClick}>ПРОГРАММА ДНЯ</Name>
        <Name onClick={handleFormClick}>ФОРМА РЕГИСТРАЦИИ</Name>
      </Menu>
      <Container>
        <Triangle />
        <Triangle1 />
        <Texts>
          <NamesContainer>
            <Let>
              <PersonLetter>И</PersonLetter>
              <PersonLetter1>Т</PersonLetter1>
            </Let>
            <PersonName>Игорь и Татьяна</PersonName>
          </NamesContainer>
          <Line />
          <PersonName>18.08.2023</PersonName>
        </Texts>
      </Container>
    </>
  );
}
