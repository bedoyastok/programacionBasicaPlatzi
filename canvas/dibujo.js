var texto = document.getElementById("texto_lineas");
/*getElementById=se obtiene un elemento de html*/
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick); /*cuando al boton 
le den click, escuchador de eventos*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
/*es asignar una variable que funciones dentro de las llaves{}*/

{
  lienzo.beginPath(); /*iniciar un camino, empezar un trazo*/
  lienzo.strokeStyle = color ;/*variable strokeStyle es una variable, color de linea*/
  lienzo.moveTo(xinicial, yinicial); /* metodo del canvas para llevar el lapiz al punto inicial*/
  lienzo.lineTo(xfinal, yfinal); /*trazar linea*/
  lienzo.stroke(); /*dibuja la linea*/
  lienzo.closePath(); /*cerrar el trazo*/
}
var d = document.getElementById("Dibujito")/*obtenemos el elemento 
por su id, para llegar a una de las ramas del html, toda la (var = d)
es la etiqueta canvas de archivo html*/
var lienzo = d.getContext("2d"); /*lienzo=area de dibujo, 
d.getContext() = es la funcion del objeto <canvas> para obtener el 
area de dibujo y obtener contexto*/
var ancho = d.width;/*variable que trae el valor del ancho de html*/
function dibujoPorClick()
{
  var x = parseInt(texto.value); /*texto.value=obtenemos el dato de la caja de texto*/
  var lineas = x;
  var l = 0; /*variable para contar lineas*/
  var yi, xf, xi, yf;
  var color = "red"
/*ciclo*/
while(l < lineas) /*mientras (l<lineas) sea verdad, ocurre el ciclo.
tambien se puede usar for(l=0; l<lineas; 1++)*/
{
   yi = (ancho/x) * l;
   xf = (ancho/x) * (l + 1);
   xi = (ancho/x) * l;
   yf = (ancho/x) * (l + 1);
   dibujarLinea(color, 0, yi, xf, 300);
   dibujarLinea(color, xi, 0, 300, yf);
   console.log("Linea " + l);
   l = l + 1;/*antes que termine el ciclo se suma 1 hasta 30 para
   evitar un ciclo infinito. (l++) tambien suma de a uno)*/
}

dibujarLinea(color, 1, 1, 1, 300);
dibujarLinea(color, 1, 299, 299, 299);
dibujarLinea(color, 1, 1, 300, 1);
dibujarLinea(color, 299, 1, 299, 299);
}