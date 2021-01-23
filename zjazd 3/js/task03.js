const number = parseInt(prompt("podaj liczbę"));
const triangleNumber = () => {
  return (number * (number + 1) / 2);
}
console.log(triangleNumber(number));