
function Avenger (nombre, nombreReal, poder){
    this.nombre = nombre;
    this.nombreReal = nombreReal; 
    this.salud = 100;
    this.poder = poder;

    this.status = function (){
        if (this.salud>0)
        console.log( this.nombre + " Salud:" + this.salud + "Poder" + this.poder);
        else { 
            this.salud=0;
            console.log("Estoy muerto");
        }
    }
        this.curar = function (amigo) {
            if(this.poder > 40){ 
                amigo.salud+=20;
                this.poder-=40;
            }
        }
        this.atacar = function (malo){
            malo.salud-=50;
        }
    }
            var Iroman = new Avenger("Iroman", "Tony", 1000);
            var Capitan = new Avenger("Capitan america", "Steve", 500);
            var Thanos = new Avenger("Thanos", "Thanos", 1500);

           console.log (Iroman.salud);
           console.log (Capitan.salud);
           console.log (Thanos.salud);
           
           Iroman.atacar(Thanos);
           Thanos.status;
           Thanos.atacar(Capitan);
           Capitan.status;
           
           console.log (Iroman.salud);
           console.log (Capitan.salud);
           console.log (Thanos.salud);
   

        Iroman.curar(Capitan);
        Iroman.status;
        Capitan.status;

        console.log (Iroman.salud);
        console.log (Capitan.salud);
        console.log (Thanos.salud);

