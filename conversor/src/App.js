import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Obtener el número 
var input = document.getElementById("valorInput");

// Función para eliminar el div entero al hacer clic en el botón
function eliminarDiv() {
  this.parentNode.remove(); // Elimina el div completo
}

// Función para crear la caja y agregarla al div "savedContent"
function crearCaja(valor, resultado, unidadAnterior, unidadResultado) {
  // Crear un nuevo contenedor div para envolver el span y el botón
  var caja = document.createElement("div");
  caja.classList.add("caja");

  // Crear un nuevo elemento span
  var spanElement = document.createElement("span");

  // Metemos el valor al span
  spanElement.textContent = valor + " " + unidadAnterior + " → " + resultado + " " + unidadResultado;

  // Agregar el span al contenedor caja
  caja.appendChild(spanElement);

  // Creamos el botón
  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "x";
  botonEliminar.addEventListener("click", eliminarDiv); //Elimina la caja al pulsar el botón

  // Agregamos el botón a la caja
  caja.appendChild(botonEliminar);

  // Obtener el div con la clase "savedContent"
  var savedContentDiv = document.querySelector(".savedContent");

  // Agregar la caja al div "savedContent"
  savedContentDiv.appendChild(caja);
}

// Función para actualizar el valor en el span
function actualizarValor(valor, resultado, unidadResultado) {
  // Obtener span de "convertResult"
  var spanConvertResult = document.querySelector(".convertResult span");
  // Obtener el tipo 
  var spanDos = document.querySelector(".spanDos");

  // Actualizar el contenido del span
  spanConvertResult.textContent = resultado + " " + unidadResultado;

  //Actualizar el contenido del spanDos para tipo
  spanDos.textContent = unidadResultado;
}

// Obtener el botón con el id "corazon"
var botonCorazon = document.getElementById("corazon");

// Ponerle la función crearCaja al clic del botón corazon
botonCorazon.addEventListener("click", function() {
  var valor = input.value; // Obtener el valor del input
  var tipo = document.getElementById("tipo").value; // Obtener el valor del tipo

  var resultado;
  var unidadResultado;
  var unidadAnterior;
  // Conversión según la opción seleccionada
  switch (tipo) {
    case "1": // km -> millas
        resultado = (valor * 0.621371).toFixed(2);
        unidadAnterior = "km";
        unidadResultado = "millas";
        break;
    case "2": // millas -> km
        resultado = (valor * 1.60934).toFixed(2);
        unidadAnterior = "millas";
        unidadResultado = "km";
        break;
    case "3": // pies -> metros
        resultado = (valor * 0.3048).toFixed(2);
        unidadAnterior = "pies";
        unidadResultado = "metros";
        break;
    case "4": // metros -> pies
        resultado = (valor * 3.28084).toFixed(2);
        unidadAnterior = "metros";
        unidadResultado = "pies";
        break;
    case "5": // centimetros -> pulgadas
        resultado = (valor * 0.393701).toFixed(2);
        unidadAnterior = "cm";
        unidadResultado = "pulgadas";
        break;
    case "6": // pulgadas -> centimetros
        resultado = (valor * 2.54).toFixed(2);
        unidadAnterior = "pulgadas";
        unidadResultado = "cm";
        break;
    default:
        console.log("Tipo de conversión no válido");
        return;
  }

  crearCaja(valor, resultado, unidadAnterior, unidadResultado);
});

// Agregar un listener para el evento input
input.addEventListener("input", function() {
  var valor = input.value; // Obtener el valor del input
  var tipo = document.getElementById("tipo").value; // Obtener el valor del tipo

  var resultado;
  var unidadResultado;
  // Conversión según la opción seleccionada
  switch (tipo) {
    case "1": // km -> millas
        resultado = (valor * 0.621371).toFixed(2);
        unidadResultado = "millas";
        break;
    case "2": // millas -> km
        resultado = (valor * 1.60934).toFixed(2);
        unidadResultado = "km";
        break;
    case "3": // pies -> metros
        resultado = (valor * 0.3048).toFixed(2);
        unidadResultado = "metros";
        break;
    case "4": // metros -> pies
        resultado = (valor * 3.28084).toFixed(2);
        unidadResultado = "pies";
        break;
    case "5": // centimetros -> pulgadas
        resultado = (valor * 0.393701).toFixed(2);
        unidadResultado = "pulgadas";
        break;
    case "6": // pulgadas -> centimetros
        resultado = (valor * 2.54).toFixed(2);
        unidadResultado = "cm";
        break;
    default:
        console.log("Tipo de conversión no válido");
        return;
  }

  actualizarValor(valor, resultado, unidadResultado);
});

// Obtener el botón con el id "intercambiar"
var botonIntercambiar = document.getElementById("intercambiar");

botonIntercambiar.addEventListener("click", function() {
 //Sin terminar
});


export default App;
