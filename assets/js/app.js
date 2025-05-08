// 1.- Guardar informacion en Local store
let equipos = JSON.parse(localStorage.getItem("equipos")) || [];

// 2.- DOM: Sirve para conectar HTML con JS 
const inputEquipo = document.getElementById("equipo");
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
      <span>${equipo}</span>
      <div>
        <button class="btn btn-warning btn-sm me-2" onclick="editarEquipo(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="borrarEquipo(${index})">Borrar</button>
      </div>
    `;
    listaEquipos.appendChild(li);
  });
}

// 4.- Agregar nuevo equipo
function agregarEquipo() {
  const equipo = inputEquipo.value.trim();
  if (equipo === "") {
    alert("Por favor, ingresa un serial de equipo.");
    return;
  }
  equipos.push(equipo);
  localStorage.setItem("equipos", JSON.stringify(equipos));
  inputEquipo.value = "";
  mostrarEquipos();
}

// 5.- Borrar equipo
function borrarEquipo(index) {
  equipos.splice(index, 1);
  localStorage.setItem("equipos", JSON.stringify(equipos));
  mostrarEquipos();
}

// 6.- Editar equipo
function editarEquipo(index) {
  inputEquipo.value = equipos[index];
  btnRegistrar.innerText = "Actualizar";
  btnRegistrar.onclick = function () {
    const equipoActualizado = inputEquipo.value.trim();
    if (equipoActualizado === "") {
      alert("Por favor, ingresa tu cambio de equipo.");
      return;
    }
    equipos[index] = equipoActualizado;
    localStorage.setItem("equipos", JSON.stringify(equipos));
    inputEquipo.value = "";
    btnRegistrar.innerText = "Agregar equipo";
    btnRegistrar.onclick = agregarEquipo;
    mostrarEquipos();
  };
}

// Mostrar equipos al cargar la página
mostrarEquipos();
