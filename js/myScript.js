//OBJETIVO: tomar datos para solicitar un turno y/o poder aplicar un descuento.

//FUNCIONAMIENTO:

//1) Condicional para sugerir (o no) a un acompañante con id="edad".
// función que habilite la carga del tutor/acompañante según se cumplan las condiciones. "Si la edad < 17 entonces mostrar "nombre-tutor", etc.

let nombreTutor1 = document.querySelector("#nombre-tutor1");  
let nombreTutor2 = document.querySelector("#nombre-tutor2");  
let edadTutor1 = document.querySelector("#edad-tutor1");  
let edadTutor2 = document.querySelector("#edad-tutor2");  

//Ocultar Elementos
nombreTutor1.style.display = 'none';
nombreTutor2.style.display = 'none';
edadTutor1.style.display = 'none';
edadTutor2.style.display = 'none';

let edadInput = document.querySelector("#edad"); 
let edad = edadInput.value;

/*
function menorDeEdad(edad){
        edad.addEventListener('input', (edad) =>{
        if (edad < 18){
        let avisoMenores = document.createElement("p");
        avisoMenores.textContent = "Va a ser necesario que seas acompañado/a por otra persona mayor de edad.";
    } else { //Mostrar elementos
        nombreTutor1.style.display = 'display';
        nombreTutor2.style.display = 'display';
        edadTutor1.style.display = 'display';
        edadTutor2.style.display = 'display';
        }})
    }

menorDeEdad ()
*/

//2) Condicional para aplicar descuento del 20% sobre id="si-jubilado".
//función de cálculo de decuento que se habilita al hacer click en "si"
//Si la edad >= 65, mostrar botoncitos.

/* function jubilado(edad){
if (edad >= 65){"consulta-jubilacion"
} else (botoncito == si){precioFinal * 0.8}
    }
*/


//3) SUBMIT > OBJETO > LOCALSTORAGE "Escuchar" el DOM mediante atributos (type="text", type="radio") y por etiqueta (option) para toma de datos.
//Llamar a type="submit" para crear un Objeto con los datos del paciente: guardar en localStorage para luego general una tabla.

//4) Informar resultado mediante una tabla: DATOS Y PRECIO FINAL (con o sin descuento).

function precio(){
    const precio = document.getElementById("duracion");
    precio.addEventListener("change", function(){
        let opcionPrecio = precio.value;
        console.log(opcionPrecio);}) // Convertir en un cartel
        };

precio()

//
/* function descuentoJubilado(){
condicion: Si click en "si" (jubilado) 
funcion de precio x aplicar descuento.
Informar: se le ha aplicado un 20% de desc.
    }

    descuentoJubilado ()
*/

//5) Diseño estético: formulario centrado en la página, colores: azul y gris.








/*
// ============================================
// EJEMPLO 2: CON FUNCIONES (CÓDIGO REUTILIZABLE)
// ============================================

console.log("\n=== EJEMPLO CON FUNCIONES ===");

function sumar(a, b) {
    return a + b;
}

// Ahora podemos usar la función cuantas veces queramos
console.log("Suma 1:", sumar(2, 3));
console.log("Suma 2:", sumar(5, 7));
console.log("Suma 3:", sumar(10, 15));

// ============================================
// FUNCIONES CON Y SIN PARÁMETROS
// ============================================

console.log("\n=== FUNCIONES CON Y SIN PARÁMETROS ===");

// Función SIN parámetros
function saludar() {
    return "¡Hola mundo!";
}

console.log(saludar());

// Función CON parámetros
function saludarPersona(nombre) {
    return "¡Hola " + nombre + "!";
}

console.log(saludarPersona("Ana"));
console.log(saludarPersona("Carlos"));

// ============================================
// FUNCIONES CON Y SIN RETURN
// ============================================

console.log("\n=== FUNCIONES CON Y SIN RETURN ===");

// Función SIN return (solo hace algo, no devuelve nada)
function mostrarMensaje(mensaje) {
    console.log("MENSAJE:", mensaje);
    // No tiene return, por eso no devuelve nada útil
}

mostrarMensaje("Esto es una prueba");

// Función CON return (devuelve un valor que podemos usar)
function multiplicar(x, y) {
    return x * y;
}

let producto = multiplicar(4, 5);
console.log("El producto es:", producto);


// ============================================
// FUNCIONES FLECHA (ARROW FUNCTIONS)
// ============================================

console.log("\n=== FUNCIONES FLECHA ===");

// Función tradicional
function sumaTradicional(a, b) {
    return a + b;
}

// Función flecha equivalente
const sumaFlecha = (a, b) => {
    return a + b;
};

// Función flecha simplificada (return implícito)
const sumaSimple = (a, b) => a + b;

console.log("Suma tradicional:", sumaTradicional(3, 4));
console.log("Suma flecha:", sumaFlecha(3, 4));
console.log("Suma simple:", sumaSimple(3, 4));
*/

/* 
document.querySelector("#mi-id");         // por ID
document.querySelector(".mi-clase");      // por clase
document.querySelector("div > p");        // por jerarquía
document.querySelector("input[name='email']"); // por atributo
*/


/* 
// 📨 EVENTO SUBMIT
console.log("\n=== EVENTO SUBMIT ===");

const formularioSimple = document.getElementById("formulario-simple");
const saludoUsuario = document.getElementById("saludo-usuario");

formularioSimple.addEventListener("submit", function(evento) {
    // ¡IMPORTANTE! preventDefault evita que la página se recargue
    evento.preventDefault();
    console.log("Formulario enviado (sin recargar la página)");
    
    const nombreUsuario = document.getElementById("nombre-usuario").value;
    console.log("Nombre ingresado:", nombreUsuario);
    
    // Validar que no esté vacío
    if (nombreUsuario.trim() === "") {
        alert("Por favor ingresa tu nombre");
        return;
    }
    
    // Crear saludo personalizado
    saludoUsuario.innerHTML = `<h3>¡Hola ${nombreUsuario}! 👋</h3>`;
    saludoUsuario.style.backgroundColor = "lightgreen";
    saludoUsuario.style.padding = "10px";
    saludoUsuario.style.border = "2px solid green";
    
    // Limpiar el formulario
    document.getElementById("nombre-usuario").value = "";
});
*/

/*
* Declaración de Clase:

class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}

// Crear un nuevo objeto Persona

const persona1 = new Persona("Ana", 25, "Calle Falsa 123");

console.log(persona1.describir());


*

localStorage:


//Guardar datos
localStorage.setItem('usuario', 'JuanPerez');

// Obtener datos
let usuario = localStorage.getItem('usuario');

console.log(usuario); // 'JuanPerez'

// Eliminar datos
localStorage.removeItem('usuario');

localStorage.removeItem('clave');

localStorage.clear();

*
sessionStorage:

// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');

// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');

console.log(detalle); // 'Libro de JavaScript'

// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');

sessionStorage.removeItem('clave');

sessionStorage.clear();


JSON y Almacenamiento de Objetos

JSON (JavaScript Object Notation)
@

// Objeto usuario
const usuario = {
  id: "1234",
  nombre: "Juan",
  correo: "juan@example.com"
};

// Convertir el objeto usuario a una cadena JSON para almacenamiento

localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript

const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));

console.log(usuarioAlmacenado);

// Supongamos que este es el carrito de compras del usuario
const carrito = {
    items: [
        { id: 1, producto: "Libro", cantidad: 2, precio: 15.00 },
        { id: 2, producto: "Lápiz", cantidad: 10, precio: 1.50 }
    ]
};

// Convertimos el objeto carrito en una cadena JSON y lo almacenamos
localStorage.setItem('carrito', JSON.stringify(carrito));

// Recuperamos la cadena JSON del almacenamiento y la convertimos de nuevo a un objeto JavaScript
const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito'));

// Ahora podemos acceder y manipular los datos del carrito como un objeto JavaScript
console.log(`Total de productos: ${carritoAlmacenado.items.length}`);
*/