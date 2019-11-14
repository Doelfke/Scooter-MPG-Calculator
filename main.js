(function() {
  const whElement = document.getElementById("wh");
  const mpcElement = document.getElementById("mpc");
  const resultElement = document.getElementById("result");

  whElement.addEventListener("input", calculate);
  mpcElement.addEventListener("input", calculate);

  function calculate() {
    const parsedWh = parseFloat(whElement.value);
    const parsedMpc = parseFloat(mpcElement.value);

    if (!parsedWh || !parsedMpc) {
      return;
    }

    const kWh = strip(parsedWh / 1000);
    const hundredMiles = strip(parsedMpc / 100);
    const kWhPerHundredMiles = strip(kWh / hundredMiles);
    const magicNumber = 3370;

    const result = (magicNumber / kWhPerHundredMiles).toFixed(2);

    resultElement.innerText = result;
  }

  function strip(number) {
    return parseFloat(number).toPrecision(12);
  }
  calculate();
})();
