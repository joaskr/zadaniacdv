const cipher = (str) => {
  let solved = "";
  for (let i=0; i<str.length; i++) {
    const asciiValue = str[i].charCodeAt();
    if (asciiValue >=65 && asciiValue <= 77) {
      solved += String.fromCharCode(asciiValue+13);
    } else if (asciiValue >= 78 && asciiValue <= 90){
      solved += String.fromCharCode(asciiValue-13);
    }
  } 
  return solved
}
console.log(cipher("ABC"));