function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    
    if (isNaN(celsius)) {
        document.getElementById("fahrenheit").value = "";
        document.getElementById("kelvin").value = "";
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
}
