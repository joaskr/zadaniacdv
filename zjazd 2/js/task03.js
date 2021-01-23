const temperature = parseInt(prompt("podaj temperaturę w C°"));
    const convertToF = () => {
      let fahrenheit = temperature * 9/5 + 32;
      return fahrenheit;
    }
    console.log(convertToF(temperature));