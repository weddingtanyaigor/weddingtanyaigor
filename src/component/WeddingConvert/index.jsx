import { Container, Title, Line, DateFor, Text, Pictures } from "./styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import p1 from "./assets/p1.jpeg";
import p2 from "./assets/p2.jpeg";
import p3 from "./assets/p3.jpeg";
import p4 from "./assets/p4.jpeg";

export default function WeddingConvert() {
  return (
    <Container id='convert'>
      <Line />
      <Title>Дорогие друзья!</Title>
      <Text>
        Для нас один день в этом году будет особенным и мы хотим провести его в
        кругу близких и друзей. С большим удовольствием приглашаем вас на
        знаменательный праздник - нашу свадьбу!
        <br />
        <br />
        Ждем вас
      </Text>
      <DateFor>18 августа 2023</DateFor>
      <Text>
        Эко-комплекс Сурские берега (РМ, Кочкуровский район, село Мордовское
        Давыдово)
      </Text>
      <Line />

      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        <SwiperSlide>
          <Pictures src={p1} />
        </SwiperSlide>
        <SwiperSlide>
          <Pictures src={p2} />
        </SwiperSlide>
        <SwiperSlide>
          <Pictures src={p3} />
        </SwiperSlide>
        <SwiperSlide>
          <Pictures src={p4} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
