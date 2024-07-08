let tareas = []
function cargar_tareas() {
    let cuadro_de_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {
        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
                <div class="img">
                    <img src="https://github.com/kgarcia18/img/blob/main/img/sesion.jpg?raw=true" alt="">
                </div>
                <div class="texto">
                    <p class="nombre">${cada_tarea.nombre}</p>
                    <p class="correo">${cada_tarea.correo}</p>
                </div>
                <button class="btn_asignacion">+</button>
                `;
        }
        cuadro_de_tareas.appendChild(div_tarea);
    });
}

function cargar_botones() {
    let caja_btn = document.querySelector(".btn");
    caja_btn.innerHTML = `<div class="btn_mas">Agregar nuevo usuario</div>`;
}

function cargar_formulario() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_b");
    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn_cerrar">X</div>
        </div>
        <div class="div_formulario">
            <h2>Registro</h2>
            <p>Nombre del usuario.</p>
            <input type="text" class="entrada-nombre">
            <p>Correo:</p>
            <input type="email" class="entrada-correo">
        </div>
        <div class="btn-crear">Agregar</div>
    `;

    let btn_cerrar2 = document.querySelector(".btn_cerrar");
    btn_cerrar2.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_b");
    });

    let btn_crear = document.querySelector(".btn-crear");
    btn_crear.addEventListener("click", () => {
        let entrada1 = document.querySelector(".entrada-nombre").value;
        let entrada2 = document.querySelector(".entrada-correo").value;

        if (entrada1 && entrada2) { 
            let estructura_de_tarea = {
                estado: true,
                nombre: entrada1,
                correo: entrada2 
            };

            tareas.push(estructura_de_tarea);

            let cuadro_de_tareas = document.querySelector(".lista_tareas");
            cuadro_de_tareas.innerHTML = "";

            cargar_tareas();

            ventana_formulario.classList.remove("activar_b");
        } else {
            alert("Por favor, completa ambos campos.");
        }
        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargar_tareas();
    cargar_botones();

    let btn_formulario = document.querySelector(".btn");
    btn_formulario.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("btn_mas")) {
            cargar_formulario();
        }
    });
});

