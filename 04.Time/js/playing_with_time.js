console.log("Playing with time");

console.log("1");

var a = 100;

setTimeout(function(){
    console.log(a);
    console.log("Han pasado 4 segundos.");
},4000);

console.log("2");

var interval_ID = setInterval(function(){
    console.log(Math.random())
},500)