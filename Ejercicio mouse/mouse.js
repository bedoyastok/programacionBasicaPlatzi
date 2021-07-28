var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
/*es asignar una variable que funciones dentro de las llaves{}*/
{
  lienzo.beginPath(); /*iniciar un camino, empezar un trazo*/
  lienzo.strokeStyle = color;/*variable strokeStyle es una variable, color de linea*/
  lienzo.lineWidth = 3;/*ancho de linea*/
  lienzo.moveTo(xinicial, yinicial); /* metodo del canvas para llevar el lapiz al punto inicial*/
  lienzo.lineTo(xfinal, yfinal); /*trazar linea*/
  lienzo.stroke(); /*dibuja la linea*/
  lienzo.closePath(); /*cerrar el trazo*/
}

cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mouseMove", moverMouse);
cuadrito.addEventListener("mouseup", detenerMouse);

var x, y, xf, yf;
var color = "red";
var click = 0;

function presionarMouse(evento)
{
	click = 1;
	var ClientRect = cuadrito.getBoundingClientRect();
	x = Math.round(evento.clientX - ClientRect.left);
	y = Math.round(evento.clientY - ClientRect.top);
console.log("inicio" + x, y); 	
}