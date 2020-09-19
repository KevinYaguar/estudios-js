class Aviones {
	acelerar(){
		this.velocidad = (isNaN(this.velocidad))?  this.aceleracion : this.velocidad + this.aceleracion;
  }
  
  frenar(){
    this.velocidad = this.velocidad - this.desaceleracion;
  }
  
  estadoVelocidad(){
    return "La velocidad actual del " + this.nombre + " es de " + this.velocidad;
  }
  
}

a319 = new Aviones
//Creo las propiedades
a319.nombre = "A319"
a319.aceleracion = 10;
a319.desaceleracion = 5;

//Acelero 3 veces
a319.acelerar();
a319.acelerar();
a319.acelerar();
//Solicito un estado de velocidad
console.log(a319.estadoVelocidad());
//freno 1 vez
a319.frenar();
//Solicito un estado de velocidad
console.log(a319.estadoVelocidad());

a340 = new Aviones
//Creo las propiedades
a340.nombre = "A340"
a340.aceleracion = 20;
a340.desaceleracion = 10;

//Acelero 5 veces
a340.acelerar();
a340.acelerar();
a340.acelerar();
a340.acelerar();
a340.acelerar();
//Solicito un estado de velocidad
console.log(a340.estadoVelocidad());
//freno 1 vez
a340.frenar();
//Solicito un estado de velocidad
console.log(a340.estadoVelocidad());