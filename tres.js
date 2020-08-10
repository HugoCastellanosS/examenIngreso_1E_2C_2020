/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {

	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonas = 0;
	let respuesta = "s"

	let contadorBarilo = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let contadorViajes=0;
	let contadorViajeInverno=0;

	let acumHombrePasajeros = 0;
	let acumMujerPasajeros = 0;
	let acumPasajeros=0;

	let promedio;


	do {

		do {
			sexo = prompt("Ingrese el sexo del titular(f/m)");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			lugar = prompt("Ingrese lugar: ");
		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));

		do {
			temporada = prompt("Ingrese temporada: ");
		} while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));

		do
		{
			cantidadPersonas=parseInt(prompt("Ingrese cantidad de personas: "));
		}while(isNaN(cantidadPersonas));

		switch (lugar) {
			case "bariloche":
				contadorBarilo++;

				break;

			case "cataratas":

				contadorCataratas++

				break;

			case "salta":

				contadorSalta++;

				break;
		}

		switch (sexo) {
			case "f":
				acumMujerPasajeros = acumMujerPasajeros + cantidadPersonas;

				break;


			case "m":
				acumHombrePasajeros = acumHombrePasajeros + cantidadPersonas;

				break;
		}

		if(temporada=="invierno")
		{
			acumPasajeros=acumPasajeros+cantidadPersonas;
		
			contadorViajeInverno++;
		}



		respuesta = prompt("Desea ingresar más datos(s/n): ");
	} while (respuesta == "s");



	if (contadorBarilo > contadorSalta && contadorBarilo > contadorCataratas) {
		console.log("El lugar más elegido es Bariloche.");
	}
	else if (contadorSalta > contadorBarilo && contadorSalta > contadorCataratas) {
		console.log("El lugar más elegido es Salta.");
	}
	else {
		console.log("El lugar más elegido es Cataratas.");
	}


	if (acumHombrePasajeros > acumMujerPasajeros) {
		console.log("el sexo del titular que lleva más pasajeros es Hombre.");
	}
	else {
		console.log("el sexo del titular que lleva más pasajeros es Mujer.");
	}


	promedio=acumPasajeros/contadorViajeInverno;

	console.log("El promedio de personas que viajan en invierno "+promedio);

}
