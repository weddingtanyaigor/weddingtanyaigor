import {
  Container,
  Line,
  Text,
  Texts,
  Pictures,
  SwiperCont,
  Cal,
} from "./styles";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import p1 from "./assets/b1.jpeg";
import p2 from "./assets/b2.jpeg";
import p3 from "./assets/b3.jpeg";
import p4 from "./assets/b4.jpeg";
import p5 from "./assets/b5.jpeg";
import p6 from "./assets/b6.jpeg";
import p7 from "./assets/b7.jpeg";
import b from "./assets/b.jpeg";

export default function SecondScreen() {
  return (
    <Container>
      <Line />
      <Text>Дорогие друзья!</Text>
      <Texts>
        Для нас один день в этом году будет особенным и мы хотим провести его в
        кругу близких и друзей. С большим удовольствием приглашаем вас на
        знаменательный праздник - нашу свадьбу!
      </Texts>
      <Texts>Ждем ВАС</Texts>
      <Text>18 августа 2023</Text>
      <Texts>
        Эко-комплекс Сурские берега (РМ, Кочкуровский район, село Мордовское
        Давыдово)
      </Texts>
      <Line />
      <SwiperCont
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
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
        <SwiperSlide>
          <Pictures src={p5} />
        </SwiperSlide>
        <SwiperSlide>
          <Pictures src={p6} />
        </SwiperSlide>
        <SwiperSlide>
          <Pictures src={p7} />
        </SwiperSlide>
      </SwiperCont>
      <Line />
      <Text>Как добраться</Text>
      <Texts>
        Для вашего удобства мы подготовили карту. Надеемся, что вы легко найдете
        место проведения свадьбы и порадуете нас своим присутствием!
      </Texts>
      <Pictures src={b} />
      <Line />
      <Text>Август</Text>
      <Cal></Cal>
      <Line />
    </Container>
  );
}
