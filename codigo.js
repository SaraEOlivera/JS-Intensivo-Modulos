//                   MODULO 3

/* 
let respuestaCliente = prompt("¿El envio es a Argentina?").toLowerCase();
function calcularPrecio(precio, impuesto) {
  let precioTotal;
  const gastoEnvio = 10;
  if (respuestaCliente === "si") {
    precioTotal = precio + gastoEnvio;
  }
  if (respuestaCliente === "no") {
    precioTotal = precio * impuesto + gastoEnvio;
  }

  console.log("Importe total: ", precioTotal);
}
calcularPrecio(20, 5); */

//--------------------------------------------------------------------

// 1) Crear una página y agregar dos radiobuttons, cuando uno de ellos se seleccione que muestre un mensaje diciendo que opción se seleccionó.

/* function mostrarMensaje() {
  if (document.getElementById("op1").checked) {
    document.write("Elegiste la opcion 1");
  } else if (document.getElementById("op2").checked) {
    document.write("Elegiste la opcion 2");
  } else {
    document.write("No hay ninguna opcion seleccionada");
  }
}

mostrarMensaje(); */

//-------------------------------------------------------------------

//2) en la misma pagina, crear dos input de números y un botón, al pulsar el botón, mostrar en un alert quien es el mayor de los dos.*/

/* function calcularMayor() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;

  if (numero1 > numero2) {
    alert("El primero es el mayor");
  } else if (numero2 > numero1) {
    alert("El segundo es el mayor");
  } else if (numero1 == numero2) {
    alert("Ambos numeros son iguales");
  }
}

calcularMayor(); */

//-------------------------------------------------------------------

//3) Y en la ultima parte de esta pagina, que deje ingresar dos números (input de html, no prompt), y que al pulsar un boton, ejecute una función suma, que sume dichos números. Para esto investigue el evento OnClick() de los input de HTML.  */

/* function sumarNumeros() {
  let primerNumero = parseInt(document.getElementById("numero1").value);
  let segundoNumero = parseInt(document.getElementById("numero2").value);
  let suma = primerNumero + segundoNumero;

  alert(suma);
}

sumarNumeros(); */

// *****************************************************************
