// SISTEMA DE TURNOS PARA UN SERVICIO DE MASAJES.

// Se toman, validan y muestran los datos de la solicitud de consulta de un posible cliente.
// Se presupuesta un servicio y un posible descuento, según la información otorgada.
// Al final se le informa la duración y el valor (con o sin descuento según corresponda).


alert("Hola, para poder darle un turno voy a solicitar que complete unos datos.  Muchas gracias." );

function tomarDatosPersonales() {
  let nombre = prompt("Ingrese su primer nombre:");
  let apellido = prompt("Ingrese su apellido:");
  console.log("Nombre:",nombre );
  console.log("Apellido:",apellido );

  function edades() {
    let edad = prompt("Ingrese su edad:");  

    if (edad <= 17) { 
    alert("Si eres menor de edad va a ser necesario que te acompañe un adulto."); 
    let nombreTutor = prompt("Ingrese nombre y apellido de su tutor o acompañante:");
    let edadTutor = prompt("Ingrese la edad de su tutor o acompañante:");
    console.log("Edad:",edad );
    console.log("Nombre del tutor:",nombreTutor );
    console.log("Edad del tutor:",edadTutor );
    
    function aranceles(){
      let duracionSesion = prompt("¿Prefieres una sesión de 60 o 90 minutos?");
      let precio1 = "$25000";
      let precio2 = "$40000";
      
      if (duracionSesion == 60){
        console.log("Tu sesión de",duracionSesion,"minutos tiene un valor de", precio1, ".")
        } else if (duracionSesion == 90){
          console.log("Tu sesión de",duracionSesion,"minutos tiene un valor de", precio2, ".")
          }
        }

        aranceles()

      } else if (edad >= 65){
      console.log("Edad:",edad );
      let confirmarJubilacion = confirm("¿Está usted jubilado/a?");
      console.log("Jubilado/a", confirmarJubilacion)

      if (confirmarJubilacion == true) {
        alert("Tiene un 20% de descuento por ser jubilado/a.")
          
        let duracionSesion = prompt("¿Prefieres una sesión de 60 o 90 minutos?");
        let precio1 = "25000";
        let precio2 = "40000";
        if (duracionSesion == 60){
          console.log("Tu sesión de",duracionSesion,"minutos tiene un valor de $",precio1 * 0.8, ".")
          } else if (duracionSesion == 90){
            console.log("Tu sesión de",duracionSesion,"minutos tiene un valor de $",precio2 * 0.8, ".")
        }
      }
    }
  }

  edades ()
  
  let zonaDeDolor = prompt("¿Qué partes de tu cuerpo te duelen?  (Ej.: Espalda, brazos, cintura, etc.)");
  
  console.log("Dolores en:",zonaDeDolor );
}

tomarDatosPersonales()