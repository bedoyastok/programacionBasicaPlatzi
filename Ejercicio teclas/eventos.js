var teclas = /*json=JavaScript Object Notation*/
{
	UP: 38,
	DOWM: 40, /*todo esto es una linea de codigo por eso
	          se separa por comas, subvariables*/
	LEFT: 37,
	RIGHT: 39          
};/*en este caso se pone ; en este lugar*/

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
/*para identificar que alguna tecla fue presionada*/
/*evento keydown= es cuando el usuario presiona la tecla.
keyUp=cuando el usuario suelta la tecla*/
/*el segundo parametro es para disparar una funcion "dibujarTeclado"*/

var cuadrito = document.getElementById("area_de_dibujo");/*llamar el id de html*/
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

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

function dibujarTeclado(evento)
/*crear funcion, esta no existe*/
/*el parametro "evento" almacena datos de la accion realizada*/
{
	var colorcito = "black";
	var movimiento = 1;
	/*keyCode para ver el codigo de la tecla en el console.log*/
	switch(evento.keyCode)
	{
		case teclas.UP:/*-y*/
		   dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
		   y = y - movimiento;
		break;

		case teclas.DOWM:/*+y*/
		   dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		   y = y + movimiento;
		break;

		case teclas.LEFT:/*-x*/
		   dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		   x = x - movimiento;
		break;

		case teclas.RIGHT:/*+x*/
		   dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		   x = x + movimiento;
		break;

		default:
		   console.log ("Otra tecla")
		break;   
	}
}

