//Incorporando Object y Arrays

//Definiendo funciones variables

let productoToLowerCase
let carrito = 0
let stock
const Productos = []
class Producto {constructor (nombre, precio, cantidad) //funcion constructora de productos objetos
                {this.nombre = nombre
                this.precio = precio
                this.stock = parseInt(cantidad)}}


const planta = new Producto ("planta", 400, 2) ; Productos.push(planta)
const kokedama = new Producto ("kokedama", 1000, 1) ; Productos.push(kokedama)
const maceta = new Producto ("maceta", 600, 1) ; Productos.push(maceta)


function iniciarCompra()
{bienvenido = prompt("Hola! bienvenido a Kokekosas, queres iniciar una compra?"); 
return bienvenido.toLowerCase()}

function solicitarProducto()
{let producto = prompt("Ingresa el producto que queres agregar a tu carrito: \nKokedama \nMaceta \nPlanta \n'Salir' para terminar compra");
return producto.toLowerCase()} 

function actualizarStock(productoToLowerCase) 
{for (let producto of Productos)
    {if (productoToLowerCase === producto.nombre){producto.stock = producto.stock - 1 }}}

function verificarStock(productoToLowerCase)
{for (let producto of Productos)
    {if (productoToLowerCase === producto.nombre && producto.stock === 0)
        {alert("No hay mas stock del producto seleccionado"); return false}}}

function ingresarProductos(productoToLowerCase)
{do {productoToLowerCase = solicitarProducto() ;
    switch(productoToLowerCase)
        {case "kokedama": 
        stock = verificarStock(productoToLowerCase) ; if(stock===false){console.log("No hay mas stock de Kokedama, lo sentimos mucho");break}
        carrito = carrito + kokedama.precio ;
        console.log("Elegiste Kokedama, su precio es $"+kokedama.precio);
        console.log("Tu carrito tiene $"+carrito);
        actualizarStock(productoToLowerCase) ;
        break ;

        case "maceta": 
        stock = verificarStock(productoToLowerCase) ; if(stock===false){console.log("No hay mas stock de Maceta, lo sentimos mucho");break}
        carrito = carrito + maceta.precio ;
        console.log("Elegiste Maceta, su precio es $"+maceta.precio);
        console.log("Tu carrito tiene $"+carrito);
        actualizarStock(productoToLowerCase) ;
        break ;

        case "planta":
        stock = verificarStock(productoToLowerCase) ; if(stock===false){console.log("No hay mas stock de Planta, lo sentimos mucho");break}
        carrito = carrito + planta.precio ;
        console.log("Elegiste planta, su precio es $"+planta.precio);
        console.log("Tu carrito tiene $"+carrito);
        actualizarStock(productoToLowerCase) ;
        break ;

        case "salir": 
        console.log("Gracias por tu compra");
        console.log("El total en tu carrito es de $"+carrito); 
        break ;

        default: alert("El producto ingresado no existe, intenta nuevamente"); }}
while(productoToLowerCase != "salir")}


//Realizando la compra

let comprar = iniciarCompra() 
while (comprar != "si" && comprar != "no")
{alert("La respuesta ingresada no es valida, intentalo de nuevo"); comprar = iniciarCompra()}

if (comprar == "si") {ingresarProductos(productoToLowerCase)}
else {alert("Gracias por tu visita, te esperamos pronto");
     console.log("No ingresaste nada a tu carrito")}

console.log(Productos)