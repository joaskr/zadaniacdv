let rows = parseInt(prompt("podaj liczbę"));
  let cols = 2*rows;
  for(let i=1; i <= rows; i++) {
    for(let j=1; j<=cols; j++) {
      document.write("*");
    }
    document.write("<br>");
  }