// 1.- Guardar informacion en Local store
let equipo = JSON.parse(localStorage.getItem("equipo")) || [];

// 2.- DOM: Sirve para conectar HTML con JS 
const inputSerial = document.getElementById("equipo");
const inputPersona = document.getElementById("persona");
const inputCaracteristicas = document.getElementById("caracteristicas");
const btnRegistrar = document.getElementById("btn-registrar");
const listaEquipos = document.getElementById("lista-equipos");

// 3.- Mostrar registro en pantalla
function mostrarEquipo() {
  listaEquipos.innerHTML = "";
  equipo.forEach((equipo, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <div>
        <strong>Serial:</strong> ${equipo.serial}<br>
        <strong>Características:</strong> ${equipo.caracteristicas}<br>
        <strong>Persona:</strong> ${equipo.persona}
      <div>
            <button class="btn btn-warning btn-sm me-2" onclick="editarEquipo(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="borrarEquipo(${index})">Borrar</button>
          </div>
    `;
    listaEquipo.appendChild(li);
  });
}

// 4.- Agregar nuevo equipo 
function agregarEquipo() {
    const serial = inputSerial.value.trim();
    const caracteristicas = inputCaracteristicas.value.trim();
    const persona = inputPersona.value.trim();

    if (!serial || !caracteristicas || !persona) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const nuevoEquipo = { serial, caracteristicas, persona };
      equipos.push(nuevoEquipo);
      localStorage.setItem("equipo", JSON.stringify(equipo));

      inputSerial.value = "";
      inputCaracteristicas.value = "";
      inputPersona.value = "";
      mostrarEquipo();
    }

// 5.- Borrar equipo
function borrarEquipo(index) {
    equipo.splice(index, 1);
    localStorage.setItem("equipo", JSON.stringify(equipo));
    mostrarEquipo();
  }

// 6.- Editar equipo
function editarEquipo(index) {
    const equipo = equipos[index];
    inputSerial.value = equipo.serial;
    inputCaracteristicas.value = equipo.caracteristicas;
    inputPersona.value = equipo.persona;

    btnRegistrar.textContent = "Actualizar";
    btnRegistrar.onclick = function () {
      const serial = inputSerial.value.trim();
      const caracteristicas = inputCaracteristicas.value.trim();
      const persona = inputPersona.value.trim();

      if (!serial || !caracteristicas || !persona) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      equipos[index] = { serial, caracteristicas, persona };
      localStorage.setItem("equipo", JSON.stringify(equipo));

      inputSerial.value = "";
      inputCaracteristicas.value = "";
      inputPersona.value = "";
      btnRegistrar.textContent = "Agregar equipo";
      btnRegistrar.onclick = agregarEquipo;

      mostrarEquipo();
    };
  }

  mostrarEquipo();
</script>
</body>
</html>