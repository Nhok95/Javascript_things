
//Funciones arrow =>

// a) no hay parámetros

function() {
    return "hola";
}

() => "hola"

// *****************************

// b) hay parámetros

function(p1) {
    return p1.toUpperCase();
}

(p1) => p1.toUpperCase();

// *****************************

// c) la función no solo devuelve algo, también hay body

function(p1,p2) {
    console.log(p1);
    console.log(p2);
    return p1-p2;
}

(p1,p2) => {
    console.log(p1);
    console.log(p2);
    return p1-p2;
}

// *****************************

// d) la función devuelve un objeto

function() {
    return {x:1, y:5};
}

() => { {x:1, y:5}; }
