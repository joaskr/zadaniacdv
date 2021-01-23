const checkType = (input) => {
  if (typeof input === "object") {
    return typeof input + " " + input.constructor.name;
  } else {
    return typeof input;
  }
}
console.log(checkType(1));
console.log(checkType(new Date()));
console.log(checkType(fetch('https://api.github.com/users/juszczak')));

