

function isValidCard (creditCardNumber)                                                                 {
    
    /*Pedir a usuario que ingrese numero de tarjeta de credito y
    Guardar el numero en la variable "creditCardNumber"*/
	creditCardNumber = prompt("Ingrese por favor su número de tarjeta de crédito"); 
    
    //Verificar que el usuario no ingrese un campo vacio
	if(creditCardNumber === "") {  
	//Mandar alert para informar que ingrese su numero de tarjeta sino continuar 
  	alert("Por favor ingrese su número de tarjeta"); 
	}

	//Declarar un arreglo vacio llamado "creditCardNumber_Array"
	var creditCardNumber_Array = [];

	//Meter cada elemento de la variable "creditCardNumber" en el array "creditCardNumber_Array"
	for(var i = 0; i < creditCardNumber.length; i++)  {	
	creditCardNumber_Array.push(creditCardNumber.charAt(i));
	}
	
	//Invertir los elementos del array "creditCardNumber_Array" con el metodo reverse()
	creditCardNumber_Array = creditCardNumber_Array.reverse();
	console.log(creditCardNumber_Array);

	/*Crear un FOR que con un IF dentro en el cual los numeros en un indice par se multipliquen por 2 y
	Guardar nuevos digitos en un array nuevo llamado "newArray" y Declarar "newArray" vacío*/

	var newArray= [];
	for(var j = 0; j < creditCardNumber_Array.length; j++) 					{
		if(j % 2 !==0)											{
			var result = creditCardNumber_Array[j] * 2;
			/*Dentro del IF, poner otra condicion de que en el caso de numero en indice par, 
			si resultado es mayor a 9, separar digitos*/
			if(result > 9)								 	{
				result= result.toString();
				for( var k = 0; k < result.length; k++){
					newArray.push(result[k]);
					}
			} else                                    	    {
				newArray.push(result);
				}
		//y los numeros en un indice impar se mantengan igual
		//Guardar nuevos digitos en un array nuevo llamado "newArray"		
		}else 														{
			result= creditCardNumber_Array[j] * 1;
			newArray.push(result);
		}
	}

	//Sumar elementos de nuevo array con un FOR y guardar en variable "sum"
	var sum = 0;
	for(var m = 0; m < newArray.length; m++)			{
	//Convertir strings de "newArray" a numbers
	sum += parseInt(newArray[m]);
	}

	//Al resultado de "sum", sacar el residuo de la division entre 10 y guardar en variable "residue"
	var residue = sum % 10;

	//Mostrar si es una tarjeta valida si su residuo es 0
	if(residue === 0)	{
  		alert("Su numero de tarjeta es válido");
		//Mostrar que es una tarjeta invalida si su residuo no es 0
	} else              {
  		alert("Su numero de tarjeta es inválido");
	}
}

console.log(isValidCard());




















	








