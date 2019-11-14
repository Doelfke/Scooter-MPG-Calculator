(function() {
  const magicNumber = 3370;

  const whElement = document.getElementById("wh");
  const mpcElement = document.getElementById("mpc");
  const resultElement = document.getElementById("result");

  whElement.addEventListener("input", calculate);
  mpcElement.addEventListener("input", calculate);

  const presetElements = document.getElementsByClassName("preset");
  const populatePreset = function() {
    const model = this.getAttribute("data-model");
    const presetValues = presets[model];
    whElement.value = presetValues.wh;
    mpcElement.value = presetValues.mpc;
    calculate();
  };
  for (var i = 0; i < presetElements.length; i++) {
    presetElements[i].addEventListener("click", populatePreset, false);
  }

  const presets = {
    mi365: { wh: 280, mpc: 18.6 },
    mi365pro: { wh: 474, mpc: 28 },
    nineEs2: { wh: 187, mpc: 15.4 },
    nineEs4: { wh: 374, mpc: 28 },
    nineMax: { wh: 551, mpc: 40.4 }
  };

  function calculate() {
    const parsedWh = parseFloat(whElement.value);
    const parsedMpc = parseFloat(mpcElement.value);

    if (!parsedWh || !parsedMpc) {
      return;
    }

    const kWh = strip(parsedWh / 1000);
    const hundredMiles = strip(parsedMpc / 100);
    const kWhPerHundredMiles = strip(kWh / hundredMiles);

    const result = (magicNumber / kWhPerHundredMiles).toFixed(2);

    resultElement.innerText = result;
  }

  function strip(number) {
    return parseFloat(number).toPrecision(12);
  }
  calculate();
})();
