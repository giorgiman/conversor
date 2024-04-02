// Obtener referencia al elemento de entrada
var input = document.getElementById("valorInput");

// Agregar un 'listener' al evento 'input' en el elemento de entrada
input.addEventListener("input", function() {
  // Obtener el valor del input y el tipo de conversión seleccionado
  var valor = parseFloat(input.value);
  var tipo = document.getElementById("tipo").value;

  // Realizar la conversión según el tipo seleccionado
  var resultado;
  switch (tipo) {
    case "1": // km -> millas
      resultado = valor * 0.621371;
      break;
    case "2": // millas -> km
      resultado = valor / 0.621371;
      break;
    case "3": // pies -> metros
      resultado = valor * 0.3048;
      break;
    case "4": // metros -> pies
      resultado = valor / 0.3048;
      break;
    case "5": // centimetros -> pulgadas
      resultado = valor * 0.393701;
      break;
    case "6": // pulgadas -> centimetros
      resultado = valor / 0.393701;
      break;
    default:
      resultado = "Error: Tipo de conversión no válido";
      console.log("El resultado es: " + resultado);
  }

  // Actualizar el resultado en el span correspondiente
  document.getElementById("resultadoSpan").innerText = resultado.toFixed(2) + " miles";
});