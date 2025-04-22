//Cuando la operacion tiene un string el operador '+' significara concatenacion
//La concatencacion solo puede devolver datos String
1 + '1'
String(1) + '1'

{} + String(0)

//Suma: Siempre debo devolver un dato Number
false + null
Number(false) + Number(null)
0 + 0

//Resta: Siempre debo devolver un dato Number
//Cualquier operacion aritmetica con NaN da NaN
null - 'pepe'
Number(null) - Number('pepe')
0 - NaN 
NaN
//Datos primitivos
let dato = 1 //Quiero que sea un texto
dato = String(dato)
dato = Boolean(dato)
dato = Number(dato)
//Datos objetos
Array
Object