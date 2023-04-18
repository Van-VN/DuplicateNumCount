function dupeNumCount(array: number[], value: number) {
  let counter: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      counter++;
    }
  }
  return counter;
}

let testArray = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 2, 1, 5, 3, 4, 1, 2];

console.log(dupeNumCount(testArray, 5));
