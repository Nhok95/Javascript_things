

// This se refiere al propio objeto (en este caso message)
var message = { text:"Elvis is alive",
                show: function() {
                    alert(this.text);
                }
              };
message.show();

// En el ambito global this se refiere al objeto window del web browser
console.log(this)

var cantante = {
    nombre: "Pepín",
    sing: function() {
        console.log("lalala, me llamo " + this.nombre)
    }
}