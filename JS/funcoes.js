function RealParaDolar(Real, cotacao) {
    return Real / cotacao;
}

function DolarParaReal(Dolar, cotacao) {
    return Dolar * cotacao;
}

function celsiusParaFahrenheit(Celsius) {
    return Celsius * 1.8 + 32;
}

function fahrenheitParaCelsius(Fahrenheit) {
    return (Fahrenheit - 32) / 1.8;
}

function calcularMedia(...multi) {
    let argsSoma = 0;
    for (let i = 0; i < multi.length; i++) {
        argsSoma += multi[i];
    }
    return argsSoma / multi.length;
}