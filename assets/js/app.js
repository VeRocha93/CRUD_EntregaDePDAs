// 1.- Guardar informacion en Local store
let equipos = JSON.parse(localStorage.getItem("equipos")) || [];

// 2.- DOM: Sirve para conectar HTML con JS 
const inputSerial = document.getElementById("equipo");
const inputCaracteristicas = document.getElementById("caracteristicas");
const inputPersona = document.getElementById("persona");
const btnRegistrar = document.getElementById("btn-registrar");
const listaEquipos = document.getElementById("lista-equipos");

// 3.- Mostrar registro en pantall
function mostrarEquipos() {
  listaEquipos.innerHTML = "";
  equipos.forEach((equipo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <strong>Serial:</strong> ${equipo.serial}<br>
        <strong>Características:</strong> ${equipo.caracteristicas}<br>
        <strong>Persona:</strong> ${equipo.persona}
      </div>
      <div class="mt-2">
        <button class="btn btn-warning btn-sm me-2" onclick="editarEquipo(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="borrarEquipo(${index})">Borrar</button>
      </div>
    `;
    listaEquipos.appendChild(li);
  });
}

// 4.- Agregar nuevo equipo reviar *******
function agregarEquipo() {
    const serial = document.getElementById("serial").value.trim();
    const caracteristicas = document.getElementById("caracteristicas").value.trim();
    const persona = document.getElementById("persona").value.trim();
  
    if (!serial || !caracteristicas || !persona) {
      alert("Por favor, No dejes espacios vacios.");
      return;
    }
    const nuevoEquipo = {
        serial,
        caracteristicas,
        persona
      };
    
      if (modoEditar) {
        equipos[indexEditar] = nuevoEquipo;
        btnRegistrar.innerText = "Agregar equipo";
        modoEditar = false;
        indexEditar = null;
      } else {
        equipos.push(nuevoEquipo);
     }
     localStorage.setItem("equipos", JSON.stringify(equipos));
  limpiarCampos();
  mostrarEquipos();
}

// 5.- Borrar equipo
function borrarEquipo(index) {
    document.getElementById("serial").value = "";
    document.getElementById("caracteristicas").value = "";
    document.getElementById("persona").value = "";
  
    mostrarEquipos();
  }

// 6.- Editar equipo
function editarEquipo(index) {
    const equipo = equipos[index];
    inputSerial.value = equipo.serial;
    inputCaracteristicas.value = equipo.caracteristicas;
    inputPersona.value = equipo.persona;
  
    btnRegistrar.innerText = "Actualizar equipo";
    modoEditar = true;
    indexEditar = index;
  }

  
  // Inicializar
  mostrarEquipos();