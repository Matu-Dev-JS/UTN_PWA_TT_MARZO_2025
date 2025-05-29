
## TAREA
1. Crear la ruta de /register en la aplicacion y estara asociada al RegisterScreen.jsx
2. Crear el formulario de registro con los campos necesarios (los que esten en postman) (en mi caso es: name, email, password)
3. Crear una funcion llamada register dentro del authService, dicha funcion recibira los campos por parametros y emitira un fetch a la ruta de nuestro servidor /api/users/register
4. Manejar los errores que pueda lanzar nuestro backend, ej: mail invalido, name invalido Etc...
5. Manejar un estado interno de loading para prevenir que el usuario le de click multiples veces al boton de registrar
6. Si registra exitosamente redireccionar a la ruta '/home'