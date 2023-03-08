//llamo a la memoria para acceder a los datos de tipo string guardados
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)


let foto=document.getElementById("foto")
foto.src=infoProducto.foto
let nombre=document.getElementById("nombre");
nombre.textContent=infoProducto.nombre
let precio = document.getElementById("precio");
precio.textContent=document.infoProducto.precio
/*reto incorporar descripcion en cada producto pero oculta para llevarla al ampliar info(hidden)
para su muestreo,
en la cantidad llevar, usar el metodo tradicional, mi idea sirve pero no es escalable
*/