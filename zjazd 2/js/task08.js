let number = parseInt(prompt("podaj liczbę"));
  for (var i = 0; i < number; i++) {
    var str = '';
    for (var j = 1; j < number-i; j++) {
      str = str + ' ';
    }
      for (var k = 1; k <= (2*i+1); k++) {
        str = str + '*';
      }
    console.log(str);
  }