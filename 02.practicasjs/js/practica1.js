console.log("HUZZAA!");

function numberformatter() {
    for (let i = 0; i < 1000; i++) {
        console.log(convert(i));
    }
    return "it works!"
}

function convert(numero){
    
    //TODO convertir un número entre [0...999] a su nombre en castellano

    var centenas = ["","ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];
    var decenas = ["","diez","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
    var unidades = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
    var excepciones = ["once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];

    //Errors
    if (typeof(numero) != "number") return "Error: wrong type!";
    if (numero < 0) return "Error: negative number!";
    if (numero >= 1000) return "Error: 'numero' should be between [0,999]"

    //Code
    if (numero == 0) return "cero";
    if (numero == 100) return "cien";

    var C = Math.floor(numero / 100);
    var D = Math.floor((numero%100) / 10);
    var U = numero%10;

    var resultado = centenas[C] + " ";

    var DU = D*10 + U;

    if (DU > 10 && DU < 30) {
        resultado += excepciones[DU-11];
    } else {
        var conector = (U == 0 || D == 0) ? "" : " y "; 
        resultado += decenas[D] + conector + unidades[U];
    }

    return resultado.trim();
}