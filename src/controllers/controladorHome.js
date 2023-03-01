// definiendo datos var para global, let para local
import{productos} from '../helpers/baseDatos.js'
import{pintarProductos} from'../helpers/pintarProductos.js'

//llamando a la fila
let fila=document.getElementById("fila")
//controlador, tambien llamada via de procesos o ruta/autopista, manera de conectar clases, funciones, metodos, etc...
//Pintar los productos de la tienda
pintarProductos(productos)