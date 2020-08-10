/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let nomHombrePesado;

	let cantMujeres=0;
	let promedioTotalEdad=0;
	let hombreMasPesa=0;

	let acumEdad=0;

	let respuesta="s";

	do 
	{
		nombre=prompt("Ingrese nombre: ");
		
		do {
			peso=parseFloat(prompt("Ingrese peso: "));

		} while(isNaN(peso));

		do {
			sexo=prompt("Ingrese sexo()m/f");
		} while (!(sexo=="m"||sexo=="f"));

		do {
			edad=parseInt(prompt("Ingrese edad: "));
			acumEdad=acumEdad+edad;

		} while (isNaN(edad));


			if(sexo=="f")
			{
				cantMujeres++;
			}


			if(sexo=="m"&&peso>hombreMasPesa)
			{
				hombreMasPesa=peso;
				nomHombrePesado=nombre;
			}
		


		respuesta=prompt("Desea ingresar otro dato(s/n)?");
	} while (respuesta=="s");

	promedioTotalEdad=acumEdad/5;

	console.log("La cantidad de mujeres es: "+cantMujeres);
	console.log("La edad promedio total es: "+promedioTotalEdad);
	console.log("El hombre más pesado es: "+nomHombrePesado);


}
