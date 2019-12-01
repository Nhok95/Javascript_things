function Reloj(nombre){

    this.nombre = nombre;

    this.counter =  0,
    this.interval_ID = [],
    this.sentido = 1,
    this.state = 0,  //0: stop, 1:running, 2:paused

    this.start = function(){
        if (this.state == 0) {
            this.state = 2;
            this.resume();
            this.state = 1;
            return "reloj puesto en marcha!";

        } else return "el reloj ya esta en marcha."
    
    },

    this.stop = function(){
        if (this.state == 1 || this.state == 2){
            this.state = 1;
            this.pause();
            this.state = 0;
            this.counter = 0;
            this.sentido = 1;
            return "reloj parado!";
        } else return "el reloj ya esta parado"
        
    },
    
    this.pause = function(){
        if (this.state == 1) {
            for(let i = 0; i < this.interval_ID.length; i++) {
                clearInterval(this.interval_ID[i]);
            }
            this.interval_ID = [];
            this.state = 2;

            return "reloj pausado!";

        } else if (this.state == 2){
            return "el reloj ya esta pausado"

        } else return "el reloj aun no esta en marcha"
        
    },

    this.resume = function(){
        if (this.state == 2) {
            this.interval_ID.push(setInterval(() => {

                if (this.counter < 0){
                    this.stop();
                    console.log("La cuenta ha llegado a 0");
                } else {
                    var hours = "0" + Math.floor(this.counter / 3600) % 24;
                    var mins = "0" + Math.floor(this.counter / 60) % 60; 
                    var secs = "0" + this.counter % 60;
                
                    console.log(this.nombre + " => " + hours.slice(-2) + ":" + mins.slice(-2) + ":" + secs.slice(-2));
                    this.counter += 1 * this.sentido;
                }
            
            },100))
            return "reloj reanudado!";
        } else if (this.state == 0) {
            return "el reloj esta parado.";

        } else "el reloj esta en marcha.";

        
    },

    this.invert = function(){
        if (this.state == 1 || this.state == 2) {
            this.counter += - 2;
            this.sentido *= -1;
            return "reloj invertido!";

        } else return "reloj parado.";
    }

}
