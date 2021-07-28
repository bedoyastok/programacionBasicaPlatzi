/*falta agregar imagnes a los billetes*/
/*mostar el saldo actual del cajero*/
class Billete
{
	constructor(val, cant)
	{
		this.valor = val;
		this.cantidad = cant;
	}
}

function entregarDinero()/*la funcion se activa cuando damos click
en el boton retirar*/
{
	var t = document.getElementById("dinero");
	dinero = parseInt (t.value);
	for (var bi of caja)
	{
		if(dinero > 0)
		{
			div = Math.floor(dinero / bi.valor);

			if(div > bi.cantidad)
			{
				papeles = bi.cantidad
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete(bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
		}
	}

	if (dinero > 0)
	{
		resultado.innerHTML = "No hay suficiente dinero";
	}
	else
	{
		for(var e of entregado)
		{
			if (e.cantidad > 0)
			{
				resultado.innerHTML = resultado.innerHTML + " " + e.cantidad + " billetes de $ " + e.valor + " mil pesos" + "<br/>";
			}
			
		}
	}
}

var caja = [];
var entregado = [];
caja.push(new Billete (50, 3));
caja.push(new Billete (20, 2));
caja.push(new Billete (10, 2));
caja.push(new Billete (5, 2));

var dinero = 0;
var div = 0;
var papeles = 0

var saldo = document.getElementById("saldoCajero");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("retirar");/*traer el id de html*/
boton.addEventListener("click", entregarDinero);


