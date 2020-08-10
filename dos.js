/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

  let marca;
  let precio=0;
  let peso=0;
  let tipo;
  let respuesta="s";
  let precioMayor=0;
  let marcaMasCaroLiquidos;
  let marcaMasBaratodeSolidos;
  let precioMenor=0;
  let bandera=0;
  let bandera2=0;
  let acumSolidos=0;
  let acumLiquidos=0;
  let acumPesoTotal=0;

  do 
  {
    marca=prompt("Ingrese marca: ");

    do {
      precio=parseInt(prompt("Ingrese precio: "));
    } while (isNaN(precio));

    do {
          peso=parseInt(prompt("Ingrese peso en kilogramos: "));
    } while (isNaN(peso));

    do {
      tipo=prompt("ingrese si es sólido o liquido: ");
    } while (!(tipo=="solido"||tipo=="liquido"));
    

    switch(tipo)
    {
      case "solido":
            if(bandera=0 || precio<precioMenor)
            {
              precioMenor=precio;
              marcaMasBaratodeSolidos=marca;
              bandera=1

            }
            acumSolidos=acumSolidos+peso;
      break;

      case "liquido":
            if(bandera2=0 || precio>precioMayor)
            {
              precioMayor=precio;
              marcaMasCaroLiquidos=marca;
              bandera2=1 

            }
            acumLiquidos=acumLiquidos+peso;
      break;
    }
    
    respuesta=prompt("Desea ingresar otro dato? (s/n)");
  } while (respuesta=="s");

  acumPesoTotal=acumLiquidos+acumSolidos

  console.log("El peso total de la compra es: "+acumPesoTotal);
  console.log("La marca del mas caro de los liquidos es: "+marcaMasCaroLiquidos);
  console.log("La marca del más barato de los sólidos es: "+marcaMasBaratodeSolidos);





}
