//zadanie nie jest skończone
  let array = ["a", "b", "r", "a", "k", "a", "d", "a", "b", "r", "a"];
    for (var i = 0; i < array.length; i++) {
      var str = '';
      for (var j = 1; j < array.length-i; j++) {
        str = str + ' ';
      }
      for (var k = 1; k <= (2*i+1); k++) {
        str = str + array[k];
      }
    console.log(str);
  }