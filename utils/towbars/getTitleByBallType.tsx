const V: Array<string> = ["V"];

const C: Array<string> = ["C", "С"];

const A: Array<string> = ["A", "А"];

const E: Array<string> = ["E", "Е"];

const F: Array<string> = ["F"];

const G: Array<string> = ["G"];

const H: Array<string> = ["H", "Н"];

function contains(arr: string[], elem: string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }
  return false;
}

const getTitleByBallType = (type: string) => {
  return contains(V, type)
    ? "Вертикально быстросъёмный фаркоп"
    : contains(C, type)
    ? "Горизонтально быстросъёмный фаркоп"
    : contains(A, type)
    ? "Разборный фаркоп"
    : contains(E, type)
    ? "Фаркоп под американский квадрат"
    : contains(F, type)
    ? "Фланцевый фаркоп"
    : contains(G, type)
    ? "Фланцевый фаркоп"
    : contains(H, type)
    ? "Цельносварной фаркоп"
    : "";
};

export default getTitleByBallType;
