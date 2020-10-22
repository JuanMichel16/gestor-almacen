export default class Almacen {
    constructor() {
        this._productos = [];
    }

    get productos() {
        return this._productos;
    }

    totalProductos() {
        return this.productos.length;
    }


    agregarProducto(producto) {
        let agregado = true;

        if(this.totalProductos() >= 20) {
            agregado = false;

            return agregado;
        } else {

            this.productos[this.productos.length] = producto

            console.log(this.productos);
            return agregado;
        }
    }

    borrarProducto(codigo) {
        let borrado = false;

        this._productos.forEach((producto, indice) => {
            if(producto.codigo === codigo) {
                this._productos[indice] = undefined;
                borrado = true;
            }
        });

        return borrado
    }


    buscarProducto(codigo) {
        let producto = ""

        this.productos.forEach((articulo) => {
            if(articulo.codigo === codigo) {
                producto = articulo
            }
        })

        return producto
    }


    reverseProductos() {
        let posicion = 0;

        let productosReverse = [];

        for(let i = this.productos.length; i >= 0; i--) {
            productosReverse[posicion++] = this.productos[i];
        }

        return productosReverse;
    }
}