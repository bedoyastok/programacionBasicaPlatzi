var imagenes = [];/*array asociativo*/
imagenes["Tocino"] = "cerdo.png";
imagenes["Frisby"] = "pollo.png";
imagenes["Minutauro"] = "vaca.png";
imagenes["Rex"] = "lobo.png";

class Pakiman/*clase es similar a function, tiene elementos comunes llamados atributos*/
/*class esta compuesta por un constructor*/
{
	constructor(nom, vid, ataq)/*aqui se definen las variables, igual que function*/
	{
		this.imagen = new Image();
		this.nombre = nom;
		this.vida = vid;
		this.ataque = ataq;
		this.imagen.src = imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{
		document.body.appendChild(this.imagen);/*appendChild es agregra otro hijo a body*/
		document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br/>");
        document.write("Vida: " + this.vida + " pt" + "<br/>");
        document.write("Ataque: " + this.ataque + " pt" + "<hr/>");
        document.write("</p>")   
	}
}

var coleccion = [];
coleccion.push(new Pakiman("Tocino", 100, 30));
coleccion.push(new Pakiman("Minutauro", 120, 60));
coleccion.push(new Pakiman("Frisby", 80, 50));
coleccion.push(new Pakiman("Rex", 80, 50));

for(var lista of coleccion)
{
	lista.mostrar();
}
