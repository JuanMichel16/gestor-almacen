export default class Producto {
    constructor(nombre, descripcion, cantidad, costo) {
        this._codigo = Date.now();
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._cantidad = cantidad;
        this._costo = costo;
    }

    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    
    get descripcion() {
        return this._descripcion;
    }

    get cantidad() {
        return this._cantidad;
    }

    get costo() {
        return this._costo;
    }

}