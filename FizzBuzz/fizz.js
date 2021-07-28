var numero = 100;


for (var i = 1; i <= 100; i++) /*++ iterador de avance*/
{
	if (esDivisible(i, 3))
	{
        document.write("Fizz");/*para escribir los numeros con salto de linea*/
    }

    if (esDivisible(i, 5))
    {
		document.write("Buzz");
    }

    if (!esDivisible(i, 3) && !esDivisible(i, 5))/* modulo(%) y(&&) diferente(!=) */
    {
        document.write(i,"no son divisibles");
    }

    document.write("<br/>");    
}

function esDivisible(num, divisor)
{
	if(num % divisor == 0)
	{
		return true;
	}
	else
	{
		return false;
	}

}