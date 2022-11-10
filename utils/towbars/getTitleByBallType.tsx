const A: Array<string> = ["W5", "W6", "W10", "V"];

const B: Array<string> = ["С", "C"];

const C: Array<string> = ["A", "А", "F"];

function contains(arr: string[], elem: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}

const getTitleByBallType = (type: string) => {
  return contains(A, type)
    ? "Вертикально быстросъёмный фаркоп"
    : contains(B, type)
    ? "Горизонтально быстросъёмный фаркоп"
    : contains(C, type)
    ? "Разборный фаркоп"
    : "";
};

export default getTitleByBallType;
