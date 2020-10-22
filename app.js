import UI from './ui.js';
import Producto from './producto.js';
import Almacen from './almacen.js';

const ui = new UI();
const almacen = new Almacen();

const formularioAgregar = document.querySelector('#formulario-agregar');
const formularioBorrar = document.querySelector('#formulario-borrar');
const formularioBuscar = document.querySelector('#formulario-buscar');
const btnListarProductos = document.querySelector('#btn1');
const btnListarProductosReverse = document.querySelector('#btn2');

formularioAgregar.addEventListener('submit', validarDatos);
formularioBorrar.addEventListener('submit', borrarArticulo);
formularioBuscar.addEventListener('submit', buscarArticulo);
btnListarProductos.addEventListener('click', recuperarProducto);
btnListarProductosReverse.addEventListener('click', recuperarProducto2);

function validarDatos(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const cantidad = Number(document.getElementById('cantidad').value);
    const costo = Number(document.getElementById('costo').value);

        if(nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
            ui.mostrarMensaje('Todos los campos necesitan estar llenos.', "general");
        } else if( isNaN(cantidad) || cantidad <= 0) {
            ui.mostrarMensaje('Revise que haya llenado los espacios correctamente.', 'general');
        } else if(costo <= 0 || isNaN(costo)) {
            ui.mostrarMensaje('Revise que haya llenado los espacios correctamente.', 'general');
        } else {
            const nuevoProducto = new Producto(nombre, descripcion, cantidad, costo);
            
            if(almacen.agregarProducto(nuevoProducto)) {
                ui.mostrarMensaje('Se ha agreado un nuevo producto!', 'reporte');
            } else {
                ui.mostrarMensaje('Has alcanzado el limite de productos agregados!', 'general')
            }
        }

    setTimeout(() => {
        limpiarFormularios();
    }, 1000)
}


function borrarArticulo(e) {
    e.preventDefault();

    const codigo = Number(document.querySelector('#codigoBorrar').value);
    if(almacen.borrarProducto(codigo) !== undefined) {
        alert('El articulo se borro con exito!');
        ui.mostrarMensaje('Se ha borrado un producto', 'reporte')

        return;
    } else {
        alert('No se ha podido borrar el articulo indicado')
    }


    setTimeout(() => {
        limpiarFormularios();
    }, 3000)
}



function buscarArticulo(e) {
    e.preventDefault();

    const codigoProducto = Number(document.querySelector('#codigoBuscar').value);
    let producto = almacen.buscarProducto(codigoProducto);
    ui.mostrarProducto(producto);
    ui.mostrarMensaje('Se ha utilizado la opcion de buscar articulo!', 'reporte');

    setTimeout(() => {
        limpiarFormularios();
    }, 1000)
}




function recuperarProducto() {
    borrarElementos();

    for(let producto of almacen.productos) {
        ui.listarProductos(producto);
    }

    ui.mostrarMensaje('Se han mostrado una lista con los productos agregados!', 'reporte');
}



function recuperarProducto2() {
    borrarElementos();

    let productos = almacen.reverseProductos();

    for(let producto of productos) {

        if(producto !== undefined)
            ui.listarProductos(producto)
        
    }
}



function borrarElementos() {
    const lista = document.querySelector('#listado-productos');

    while(lista.firstChild) {
        lista.firstChild.remove(lista.firstChild);
    }
}


function limpiarFormularios() {
    formularioAgregar.reset();
    formularioBorrar.reset();
    formularioBuscar.reset();
}








