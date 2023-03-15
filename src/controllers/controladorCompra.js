//llamo a la memoria para acceder a los datos de tipo string guardados
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)


let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let precio = document.getElementById("precio")
precio.textContent=document.infoProducto.precio

let titulo=document.getElementById("titulo")
titulo.textContent=document.infoProducto.titulo


/*reto incorporar descripcion en cada producto pero oculta para llevarla al ampliar info(hidden)
para su muestreo,
en la cantidad llevar, usar el metodo tradicional, mi idea sirve pero no es escalable
*/


let pill=document.getElementById("pill")
let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito

if(infocarrito!=null){
 carrito=infocarrito
 pill.textContent=carrito.length
}else{
    carrito=[]
}

let btnAgregarProducto=document.getElementById("btn-agregarcarrito")

btnAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    console.log(carrito) 
    pill.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))

})


