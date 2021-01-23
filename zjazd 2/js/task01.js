const input = prompt("podaj liczby oddzielone przecinkami");
  const inputArray = input.split(",").map(Number);
  const numbersOnly = (value) => {
    if (typeof (value) === 'number') {
      return value;
    }
  }
  const countAverage = (inputArray) => {
    var numbers = inputArray.filter(numbersOnly);
    let total = 0;
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    const avg = total / numbers.length;
    console.log(avg);
  }
  countAverage(inputArray);