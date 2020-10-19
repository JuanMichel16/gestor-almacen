export default class UI {
    constructor() {

    }

    mostrarMensaje(mensaje) {
        const padre = document.querySelector('#mensaje1');

        const divMensaje = document.createElement('div');
        divMensaje.className = 'error'
        divMensaje.innerHTML = `
        <p>${mensaje}</p>
        `

        padre.appendChild(divMensaje);


        setTimeout(() => {
            divMensaje.remove();
        }, 5000)
    }

    mostrarProducto({codigo, nombre, descripcion, cantidad, costo}) {
        const padre = document.querySelector('#acciones')
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        `;

        padre.appendChild(div);
    }


    listarProductos({codigo, nombre, descripcion, cantidad, costo}) {
        const padre = document.querySelector('#listado-productos')
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        <p>Total ${cantidad}</p>
        `;

        padre.appendChild(div);
    }
}