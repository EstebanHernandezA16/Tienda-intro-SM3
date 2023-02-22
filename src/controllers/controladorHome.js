// definiendo datos var para global, let para local
import{productos} from '../helpers/baseDatos.js'

//llamando a la fila
let fila=document.getElementById("fila")

//usando foreach
productos.forEach(function(producto){

    //creando columnas para alojar los productos
    let columna=document.createElement("div")
    columna.classList.add("col")
    

    //crear tarjeta para almacenar la info del producto

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    //crear una imagen
    let imagen=document.createElement("img")
    imagen.classList.add("img.fluid","w-100")

    //herencia del mas interno al mas externo

    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    imagen.src=producto.fotos[0]

})