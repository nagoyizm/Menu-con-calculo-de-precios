let checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox=>{checkbox.checked=false;})
let productoSeleccionado = [];

class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        let item = checkbox.closest('.item');
        let nombre = item.querySelector('.producto').textContent;
        console.log(nombre);
        let precio = Numerizar(item.querySelector('.precio').textContent);
        console.log(precio);
        if (checkbox.checked) {
            let producto1 = new producto(nombre, precio);
            productoSeleccionado.push(producto1);
            Listar()
            total()
        } else {
            productoSeleccionado = productoSeleccionado.filter(p => p.nombre !== nombre || p.precio !== precio);
            Listar()
            total()
        }
        
        console.log(productoSeleccionado);
    });
});

function Listar (){
let listado=document.getElementById("listado");
listado.innerHTML = ''; // Limpia el listado antes de agregar nuevos elementos
productoSeleccionado.forEach(producto=>{
    listado.innerHTML+=`<li class="listad"><h5>${producto.nombre}</h5><h5>$${producto.precio}</h5></li>`;

})}

function Numerizar(numero){
    let sinSigno =numero.slice(1)
    let numeroFormateado=parseFloat(sinSigno);
    console.log(typeof numeroFormateado);
    return numeroFormateado;
}

function total(){
    let total=0;
    productoSeleccionado.forEach(producto=>{
        console.log(producto.precio);
        total+=producto.precio;
        console.log(producto.precio);
        console.log(total);
    })
    let totalElement=document.getElementById("total");
    totalElement.innerHTML=`$${total}`;
}