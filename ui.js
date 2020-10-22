export default class UI {
    constructor() {}

    mostrarMensaje(mensaje, tipo) {

        const padre = document.querySelector('#mensaje1');
        const historial = document.querySelector('#acciones')
        const divMensaje = document.createElement('div');
        divMensaje.className = 'error'
        divMensaje.innerHTML = `
        <p>${mensaje}</p>
        `

        if(tipo === 'general') {
            padre.appendChild(divMensaje);

            return;
        }else if(tipo === 'reporte'){
            historial.appendChild(divMensaje)

            return;
        }


        setTimeout(() => {
            divMensaje.remove();
        }, 2000)
    }

    mostrarProducto({codigo, nombre, descripcion, cantidad, costo}) {
        const divBuscado = document.querySelector('#producto-buscado')
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        `;

        divBuscado.appendChild(div);
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
        <p>Total ${cantidad*costo}</p>
        `;

        padre.appendChild(div);
    }
}