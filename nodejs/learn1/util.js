const FahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const CelsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}   

module.exports = {
    FahrenheitToCelsius,
    CelsiusToFahrenheit 
}