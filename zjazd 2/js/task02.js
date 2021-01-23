const year = parseInt(prompt("podaj rok"));
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log("rok jest przestępny");
  } else {
    console.log("rok nie jest przestępny");
  }