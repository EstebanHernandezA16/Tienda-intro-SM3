export function pintarProductos(productos) {

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
        imagen.src=producto.fotos[0]
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre
    
        //asignar el precio
        let precio=document.createElement("h5")
        precio.classList.add("txt-center","text-success","fw-bold")
        precio.textContent= "USD "+producto.precio
    
        //detecando evento(watch dog o perro guardian)
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })

        
    
    
        //herencia del mas interno al mas externo
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        imagen.src=producto.fotos[0]
    
    })

}