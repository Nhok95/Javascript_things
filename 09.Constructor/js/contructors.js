function Cliente(nombre, apellido1,apellido2) {

    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;

    this.showName = function() {
        console.log(this.nombre + " " + this.apellido1 + " " + this.apellido2);
    }
}

var c1 = new Cliente("Pepin", "Galvez", "Ridruejo");
var c2 = new Cliente("Honorio", "Martin", "Salvador");