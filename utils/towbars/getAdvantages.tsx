import getTitleByBallType from "utils/towbars/getTitleByBallType";

const ST_R: Array<{ img: number; title: string }> = [
  { img: 1, title: "" },
  { img: 1, title: "" },
];

const ST_H: Array<{ img: number; title: string }> = [
  { img: 1, title: "" },
  { img: 4, title: "" },
  { img: 4, title: "" },
];

const ST_V: Array<{ img: number; title: string; subTitle?: string }> = [
  {
    img: 1,
    title: "Система вертикального быстросъёма",
    subTitle: "позволяет легко снять фаркоп за считанные секунды",
  },
  {
    img: 2,
    title: "Блокировка ключом",
    subTitle: "дополнительная защита от 'угона'",
  },
  {
    img: 1,
    title: "Поворотный подрозетник",
    subTitle: "позволяет спрятать розетку под бампер",
  },
  {
    img: 3,
    title: "Мешочек для хранения крюка",
    subTitle: "приятное дополнение для удобного хранения крюка в багажнике",
  },
];

const AH_R: Array<{ img: number; title: string }> = [
  { img: 2, title: "" },
  { img: 2, title: "" },
  { img: 1, title: "" },
];

const AH_H: Array<{ img: number; title: string }> = [
  { img: 1, title: "" },
  { img: 3, title: "" },
  { img: 1, title: "" },
];

const AH_V: Array<{ img: number; title: string }> = [
  { img: 1, title: "" },
  { img: 3, title: "" },
  { img: 3, title: "" },
  { img: 4, title: "" },
  { img: 1, title: "" },
];

const getAdvantages = (ball_type: string, manufacturer_name: string) => {
  const ballType = getTitleByBallType(ball_type);
  const manufacturer = manufacturer_name;

  let count: number = 0;
  let advantages: Array<{ img: number; title: string, subTitle?: string }> = [
    { img: 0, title: "", subTitle: "" },
  ];

  if (manufacturer === "Steinhof") {
    if (ballType === "Вертикально быстросъёмный фаркоп") {
      count = 2;
      advantages = [...ST_V];
    }
    if (ballType === "Горизонтально быстросъёмный фаркоп") {
      count = 3;
      advantages = [...ST_H];
    }
    if (ballType === "Разборный фаркоп") {
      count = 2;
      advantages = [...ST_R];
    }
  }

  if (manufacturer === "Auto-Hak") {
    if (ballType === "Вертикально быстросъёмный фаркоп") {
      count = 2;
      advantages = [...AH_V];
    }
    if (ballType === "Горизонтально быстросъёмный фаркоп") {
      count = 2;
      advantages = [...AH_H];
    }
    if (ballType === "Разборный фаркоп") {
      count = 2;
      advantages = [...AH_R];
    }
  }

  return { count, advantages };
};

export default getAdvantages;
