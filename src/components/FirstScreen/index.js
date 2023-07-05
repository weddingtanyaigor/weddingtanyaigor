import { Container, Names, Day, DayDate } from "./styles";

export default function BannerComponent(last) {
  return (
    <>
      <Container>
        <DayDate>18.08.2023</DayDate>
        <Day>Wedding Day</Day>
        {!last && <Names>Igor & Tatiana</Names>}
      </Container>
    </>
  );
}
