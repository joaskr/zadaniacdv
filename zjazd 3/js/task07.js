const array = [[1, 2], [3, 4]];
let newArray = [];
const flatten = () => {
  for (let i=0; i < array.length; i++) {
    flattenedArray = newArray.concat(array[i]);
  }
  return flattenedArray;
}
console.log(flatten(array))
  
//   Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się z elementów tablic wewnętrznych.

// Przykład:
// Dla tablicy `[[1, 2], [3, 4]]` zwracana wartość to `[1, 2, 3, 4]`
