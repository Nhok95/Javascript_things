
var counter = 86000;
/*
interval_ID = setInterval(function(){

    counter += 1 //Math.floor(Math.random() * 10);

    var hours = Math.floor(counter / 3600) % 24;
    var mins = Math.floor(counter / 60) % 60; 
    var secs = counter % 60;

    hours = "0"+hours;
    mins = "0"+mins;
    secs = "0"+secs;

    console.log(hours.slice(-2) + ":" + mins.slice(-2) + ":" + secs.slice(-2));
    //console.log("Pepe");
},100)*/


var counter2 = 0;

interval_ID = setInterval(function(){

    counter += 1;

    cyclicTime = Math.floor(Math.sin(counter)*8+10);
    console.log((" ").repeat(cyclicTime) + "*");

    counter2 += cyclicTime;

    var hours = Math.floor(counter2 / 3600);
    var mins = Math.floor(counter2 / 60) % 60; 
    var secs = counter2 % 60;

    hours = "0" + hours;
    mins = "0" + mins;
    secs = "0" + secs;

    //console.log(hours.slice(-2) + ":" + mins.slice(-2) + ":" + secs.slice(-2));
},500);
