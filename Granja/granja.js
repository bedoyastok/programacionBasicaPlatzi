var villa = document.getElementById("villaPlatzi");/*llamar el canvas de html*/
var papel = villa.getContext("2d");/*darle el contexto 2d*/

var teclas = /*json=JavaScript Object Notation*/
{
	UP: 38,
	DOWM: 40, 
	LEFT: 37,
	RIGHT: 39
};   

var xlobo = 0;
var ylobo = 0;

var fondo =/*json*/
{
	url: "tile.png",
	cargaOk: false
}

var vaca =/*json*/
{
	url: "vaca.png",
	cargaOk: false
}

var pollo =/*json*/
{
	url: "pollo.png",
	cargaOk: false
}

var cerdo =/*json*/
{
	url: "cerdo.png",
	cargaOk: false
}

var lobo =
{
	url: "lobo.png",
	cargarOk: false
}

var cantidad = aleatorio(5, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);/*añadir el evento cargar imagen*/

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}

function cargarVaca()
{
	vaca.cargaOk = true;
	dibujar();
}

function cargarPollo()
{
	pollo.cargaOk = true;
	dibujar();
}

function cargarCerdo()
{
	cerdo.cargaOk = true;
	dibujar();
}

function cargarLobo()
{
	lobo.cargaOk = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOk)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOk)
	{
		for(var va=0; va < cantidad; va++)
		{
			var x = aleatorio(0, 6);
		    var y = aleatorio(0, 6);
		    var x = x * 80;
		    var y = y * 80;
		    papel.drawImage(vaca.imagen, x, y);
		}
		
	}
	if(pollo.cargaOk)
	{
		for(var po=0; po < cantidad; po++)
		{
			var x = aleatorio(0, 6);
		    var y = aleatorio(0, 6);
		    var x = x * 80;
		    var y = y * 80;
		    papel.drawImage(pollo.imagen, x, y);
		}
		
	}
	if(cerdo.cargaOk)
	{
		for(var ce=0; ce < cantidad; ce++)
		{
			var x = aleatorio(0, 6);
		    var y = aleatorio(0, 6);
		    var x = x * 80;
		    var y = y * 80;
		    papel.drawImage(cerdo.imagen, x, y);
		}

	}
	if(lobo.cargaOk)
	{
		papel.drawImage(lobo.imagen, xlobo, ylobo);	
	}
}

document.addEventListener("keyup", moverLobo);

function moverLobo(evento)
{
	var movimiento = 15;
	switch(evento.keyCode)
	{
		case teclas.UP:
		  moverLobo(xlobo, ylobo - movimiento);
		  ylobo = ylobo + movimiento;
		break;

		case teclas.DOWM:
		  moverLobo(xlobo, ylobo + movimiento);
		  ylobo = ylobo + movimiento;
		break;

		case teclas.LEFT:
		  moverLobo(xlobo - movimiento, ylobo);
		  xlobo = xlobo - movimiento;
		break;

		case teclas.RIGHT:
		  moverLobo(xlobo + movimiento, ylobo);
		  xlobo = xlobo + movimiento;
		break;
	}
	dibujar();
}

function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
