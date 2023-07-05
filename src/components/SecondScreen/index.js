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
  Colors,
  Color1,
  Color2,
  Color3,
  Color4,
  Color5,
  Color6,
  Color7,
  Color8,
  Color9,
  Color10,
  Color11,
  Color12,
  Color13,
  Color14,
  Color15,
  Color16,
  Color17,
  Color18,
  Color19,
  Color20,
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
      <br />
      <Texts>
        Для вашего удобства будет организован трансфер из Саранска до базы
        отдыха и обратно. Об этом более подробно сообщим позже.
      </Texts>
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
      <Line />
      <Text>Dress code</Text>
      <Texts>
        Нам будет очень приятно, если вы подержите цветовую гамму торжества и
        выберете наряды в соответствии с цветовой палитрой нашей сваддьбы
      </Texts>
      <Colors>
        <Color1 />
        <Color2 />
        <Color3 />
        <Color4 />
        <Color5 />
        <Color6 />
        <Color7 />
        <Color8 />
        <Color9 />
        <Color10 />
        <Color11 />
        <Color12 />
        <Color13 />
        <Color14 />
        <Color15 />
        <Color17 />
        <Color18 />
        <Color19 />
        <Color20 />
        <Color16 />
      </Colors>
      <Line />
      <Text>Свадебный хештег</Text>
      <Texts>
        Если вы будете выкладываать в социальных сетях фотографии, сделанные в
        день торжества, пожалуйста, используйте наш свадебный хештег
      </Texts>
      <Texts onClick={() => navigator.clipboard.writeText("#ITWEDDAY")}>
        #ITWEDDAY
      </Texts>
      <Line />
      <Text>Свадебный организатор</Text>
      <Texts>
        Если вы заблудились, готовите нам сюрприз или у вас появились какие-либо
        вопросы, вам с радостью поможет наш организатор Ксения:
      </Texts>
      <a href='tel:89272751199' style={{ textDecoration: "none" }}>
        <Text>+79272751199</Text>
      </a>
      <Line />
      <Text>Пожелания</Text>
      <Texts>
        Главное для нас - ваше внимание, а радость ддоставит любой подарок в
        конверте!
      </Texts>
      <Texts>
        Будем признательный за альтернативу букетам в форме бутылочки вина или
        другого приятного напитка и записки о событии, к которому нам приурочить
        ее открытие.
      </Texts>
      <Line />
      <Text>Подтвердите, пожалуйста, свое присутствие на торжестве</Text>
      <Texts>Будем ждать ответа до 1.08.2023</Texts>
      <Texts>ТУТ БУДЕТ АНКЕТА</Texts>
      <Line />
    </Container>
  );
}
