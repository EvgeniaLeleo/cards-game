type cardObj = {
  name: string;
  text: string;
  img: string;
  suit: string;
};

/**
 *Дублирование элементов массива
 */

export function doubleArr<T>(a: T[]): T[] {
  return a.concat(a);
}

/**
 * Перемешивание элементов массива
 */

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
