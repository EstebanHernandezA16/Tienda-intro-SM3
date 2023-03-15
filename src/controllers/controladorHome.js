// definiendo datos var para global, let para local
import{productos} from '../helpers/baseDatos.js'
import{pintarProductos} from'../helpers/pintarProductos.js'

//llamando a la fila para el event listener
let fila=document.getElementById("fila")
//controlador, tambien llamada via de procesos o ruta/autopista, manera de conectar clases, funciones, metodos, etc...
//Pintar los productos de la tienda

pintarProductos(productos)


//escuchando click en la fila contenedora de productos
fila.addEventListener("click",function(evento){
    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent// o .juan
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent// o .sara
    
    //usaremos la memoria del pc para guardar esta info, tambien llamada persistencia de informacion
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))

    

     window.location.href="./src/views/ampliarInfo.html"//uso de dom para controlar la ventana con window
})



