function convertLength() {
    const fromValue = parseFloat(document.getElementById("fromValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let convertedValue;

    if (fromUnit === toUnit) {
        convertedValue = fromValue;
    } else if (fromUnit === "meters" && toUnit === "kilometers") {
        convertedValue = fromValue / 1000;
    } else if (fromUnit === "kilometers" && toUnit === "meters") {
        convertedValue = fromValue * 1000;
    } else if (fromUnit === "centimeters" && toUnit === "meters") {
        convertedValue = fromValue / 100;
    } else if (fromUnit === "meters" && toUnit === "centimeters") {
        convertedValue = fromValue * 100;
    } else if (fromUnit === "kilometers" && toUnit === "centimeters") {
        convertedValue = fromValue * 100000;
    } else if (fromUnit === "centimeters" && toUnit === "kilometers") {
        convertedValue = fromValue / 100000;
    }

    document.getElementById("result").innerHTML = `${fromValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
}
