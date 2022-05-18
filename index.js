const textareaIngresado = document.querySelector("#mensaje-texto");
const textareaTerminado = document.querySelector("#texto-oculto");

var rectanguloMostrado = document.querySelector(".mostrado");
var rectanguloOculto = document.querySelector(".oculto")


rectanguloOculto.style.display="none";

//FUNCION PARA PASAR DE RECTANGULO MOSTRADO AL OCULTO
function mostrarParteOculta (){
    rectanguloMostrado.style.display="none";
    rectanguloOculto.style.display="block"; 
}


//FUNCION ENCRIPTAR
function encriptar() {
    var textoIngresado = textareaIngresado.value;
    var minuscula = textoIngresado.toLowerCase();

    for (let i = 0; i < 5; i++) {
        var vocales = ["e", "i", "a", "o", "u"];
        var palabras = ["enter", "imes", "ai", "ober", "ufac"];
    
        if (minuscula.includes(vocales[i])) {
          minuscula = minuscula.replaceAll(vocales[i], palabras[i]);
        }
      }
      mostrarParteOculta();
      textareaTerminado.value = minuscula;
      textareaIngresado.value = "";
    }

 //FUNCION DESENCRIPTAR
 function desencriptar(){
    var textoIngresado = textareaIngresado.value;
    var minuscula = textoIngresado.toLowerCase();

    var vocales = ["e", "i", "a", "o", "u"];
    var palabras = ["enter", "imes", "ai", "ober", "ufac"];

    for (let i = 0; i < 5; i++) {
        var vocales = ["e", "i", "a", "o", "u"];
        var palabras = ["enter", "imes", "ai", "ober", "ufac"];
    
        if (minuscula.includes(palabras[i])) {
          minuscula = minuscula.replaceAll( palabras[i], vocales[i]);
        }
      }
      mostrarParteOculta();
      textareaTerminado.value= minuscula;
      textareaIngresado.value="";
 }

 function copiar() {
   textareaTerminado.select();
   document.execCommand("copy");
 }