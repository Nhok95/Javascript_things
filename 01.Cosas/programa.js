console.log("playing with time");

console.log("1");

var a = 100;

// setTimeout(function, time); llama a "function" despues de que pase el tiempo definido en "time" 
setTimeout(function() {
    console.log(a);
    console.log("Han pasado 4 segundos.");
},4000);

console.log("2");

// setInterval(function, time); llama a "function" cada x tiempo definido por "time"

var interval_ID = setInterval(function() {
                        console.log(Math.random());
                    },500);

// Podemos matar el interval usando la función "clearInterval(interval_ID)"
