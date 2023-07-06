import { useState } from "react";
import emailjs from "emailjs-com";

import {
  Container,
  Btn,
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
  BtnSended,
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
  Forms,
  FormsField,
  TextsField,
  SubTextsField,
  BtnDisabled,
  Input,
  CheckOnIt,
  Checkbox,
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
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [onIt, setOnIt] = useState(true);
  const [transfer, setTransfer] = useState(true);
  const [whiteWine, setWhiteWine] = useState(false);
  const [redVine, setRedVine] = useState(false);
  const [wiskey, setWiskey] = useState(false);
  const [noAlco, setNoAlco] = useState(false);
  const [dop, setDop] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleDopChange = (event) => {
    setDop(event.target.value);
  };

  const handleSurname = (event) => {
    setSurname(event.target.value);
  };

  const onItCheckbox = ({ target: { checked } }) => {
    setOnIt(checked);
  };

  const onOutCheckbox = () => {
    setOnIt(onIt ? false : true);
  };

  const onTransferCheckbox = ({ target: { checked } }) => {
    setTransfer(checked);
  };

  const onOutTransferCheckbox = () => {
    setTransfer(transfer ? false : true);
  };

  function sendEmail(e) {
    setSending(true);
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    var templateParams = {
      name: `Имя гостей: ${name}`,
      extraUser: `Фамилии: ${surname}`,
      onit: `Присутствие: ${onIt ? "Да" : "Нет"}`,
      transfer: `Трансфер для гостей: ${transfer ? "да" : "нет"}`,
      alco: `Алкоголь: ${whiteWine ? "белое вино," : ""} ${
        redVine ? "красное вино," : ""
      }  ${wiskey ? "виски," : ""}  ${noAlco ? "безалкогольные напитки" : ""}`,
      dop: `${dop ? `Дополнительные вопросы: ${dop}` : ""}`,
    };
    emailjs
      .send(
        "service_2hlzdju",
        "template_0ejopza",
        templateParams,
        "1E-X_CkWu__EQVMIh",
      )
      .then(
        (result) => {
          setSended(true);
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
        },
      );
  }

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
      <Text>Программа первого дня</Text>
      <Programm>
        <ProgrammLine>
          <Image src={wedd} />
          <ProgrammTime>
            <Times>14:30</Times>
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
            <Times>15:00</Times>
            <TimesTitle>СВАДЕБНЫЙ УЖИН</TimesTitle>
            <TimesSubTitle>
              Время вкусной еды, танцев и развлечений
            </TimesSubTitle>
          </ProgrammTime>
        </ProgrammLine>
        <ProgrammLine>
          <Image src={bocal} />
          <ProgrammTime>
            <Times>19:00</Times>
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
      <br />
      <br />
      <Text>Программа второго дня</Text>
      <Texts>
        Второй день мы так же проведем на природе , в живописном уголке Мордовии
        , в сафари-парке «Кречет». Мы подготовили для вас интересную и
        насыщенную программу , поэтому не забудьте взять с собой удобную одежду
        и обувь , чтобы быть готовыми к новым эмоциям и приключениям, которые
        ожидают нас вместе .
      </Texts>
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
        Не ломайте голову над подарками! Лучший подарок молодой семье - в
        конверте {":)"}
      </Texts>
      <Texts>
        Мы просиим вас не дарить нам цветы, мы не успеем насладиться этой
        красотой! Но, по желанию, выразить вашу любовь и радость можно в виде
        бутылки вина или шампанского, которые мы обещаем не завянет.
      </Texts>
      <Line />
      <Text>Подтвердите, пожалуйста, свое присутствие на торжестве</Text>
      <Texts>Будем ждать ответа до 1.08.2023</Texts>
      <Forms onSubmit={sendEmail}>
        <FormsField>
          <TextsField>Ваше имя</TextsField>
          <SubTextsField>
            Если вы придете со своей парой, то укажит оба имени
          </SubTextsField>
          <Input
            placeholder='Ваше имя *'
            name='name'
            value={name}
            onChange={handleChange}
          ></Input>
        </FormsField>
        <FormsField>
          <TextsField>Ваша фамилия</TextsField>
          <Input
            placeholder='Ваша фамилия *'
            name='familia'
            value={surname}
            onChange={handleSurname}
          ></Input>
        </FormsField>
        <FormsField>
          <TextsField>Присутствие</TextsField>
          <CheckOnIt>
            <Checkbox type='checkbox' checked={onIt} onChange={onItCheckbox} />
            <p>Я с удовольствием приду!</p>
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={!onIt}
              onChange={onOutCheckbox}
            />
            <p>К сожалению, не смогу присутствовать</p>
          </CheckOnIt>
        </FormsField>
        <FormsField>
          <TextsField>Нужен ли вам трансфер?</TextsField>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={transfer}
              onChange={onTransferCheckbox}
            />
            <p>Да</p>
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={!transfer}
              onChange={onOutTransferCheckbox}
            />
            <p>Нет</p>
          </CheckOnIt>
        </FormsField>
        <FormsField>
          <TextsField>Предпочтение по напиткам</TextsField>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={whiteWine}
              onChange={() => {
                setWhiteWine(!whiteWine);
              }}
            />
            Белое вино
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={redVine}
              onChange={() => {
                setRedVine(!redVine);
              }}
            />
            Красное вино
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={wiskey}
              onChange={() => {
                setWiskey(!wiskey);
              }}
            />
            Виски
          </CheckOnIt>
          <CheckOnIt>
            <Checkbox
              type='checkbox'
              checked={noAlco}
              onChange={() => {
                setNoAlco(!noAlco);
              }}
            />
            Безалкогольные напитки
          </CheckOnIt>
        </FormsField>
        <FormsField>
          <TextsField>
            Если у вас есть дополнительные вопросы, ждем их!
          </TextsField>
          <Input name='dop' onChange={handleDopChange}></Input>
        </FormsField>
        {!sended ? (
          name && surname && !sending ? (
            <FormsField>
              <Btn id='button' type='submit'>
                Отправить
              </Btn>
            </FormsField>
          ) : (
            <FormsField>
              <BtnDisabled>Отправить</BtnDisabled>
              <SubTextsField>
                {sending ? "Отправляем" : "Заполните все обязательные поля"}
              </SubTextsField>
            </FormsField>
          )
        ) : (
          <FormsField>
            <BtnSended>Отправлено</BtnSended>
            <SubTextsField>Ваш ответ записан!</SubTextsField>
          </FormsField>
        )}
      </Forms>
    </Container>
  );
}
