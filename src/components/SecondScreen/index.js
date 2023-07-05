import {
  Container,
  Line,
  Text,
  Texts,
  Pictures,
  SwiperCont,
  Cal,
  Programm,
  ProgrammLine,
  Image,
  ProgrammTime,
  Times,
  TimesTitle,
  TimesSubTitle,
  VerticalLine,
  Dot1,
  Dot2,
  Dot3,
} from "./styles";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

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
import bocal from "./assets/bocal.jpeg";
import dinner from "./assets/dinner.jpeg";
import wedd from "./assets/wedd.jpeg";

export default function SecondScreen() {
  return (
    <Container>
      <Line />
      <Text>Дорогие родные и друзья!</Text>
      <Texts>
        Приглашшаем Вас разделить с нами радость особенного для нас события и
        стать частью нашей семейной истории!
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
          <Pictures src={b} />
        </SwiperSlide>
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
      <YMaps>
        <div>
          <Map
            defaultState={{
              center: [53.948526, 45.701135],
              zoom: 15,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark geometry={[53.948526, 45.701135]} />
          </Map>
        </div>
      </YMaps>
      <Line />
      <Text>Август</Text>
      <Cal></Cal>
      <Line />
      <Text>Программа дня</Text>
      <Programm>
        <ProgrammLine>
          <Image src={wedd} />
          <ProgrammTime>
            <Times>15:30</Times>
            <TimesTitle>СБОР ГОСТЕЙ</TimesTitle>
            <TimesSubTitle>
              Собираясь на мероприрятие, просим взять с собой ваши прекрасные
              улыбки и хорошее настроение
            </TimesSubTitle>
          </ProgrammTime>
        </ProgrammLine>
        <ProgrammLine>
          <Image src={dinner} />
          <ProgrammTime>
            <Times>16:00</Times>
            <TimesTitle>СВАДЕБНЫЙ УЖИН</TimesTitle>
            <TimesSubTitle>
              Время вкусной еды, танцев и развлечений
            </TimesSubTitle>
          </ProgrammTime>
        </ProgrammLine>
        <ProgrammLine>
          <Image src={bocal} />
          <ProgrammTime>
            <Times>20:00</Times>
            <TimesTitle>ЛАУНДЖ У ВОДЫ</TimesTitle>
            <TimesSubTitle>
              Насладимся свежим воздухом, коктейлями и легкой музыкой у воды
            </TimesSubTitle>
          </ProgrammTime>
        </ProgrammLine>
        <VerticalLine />
        <Dot1 />
        <Dot2 />
        <Dot3 />
      </Programm>
    </Container>
  );
}
