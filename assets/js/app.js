console.log("Prueba de scrip de la pagina de JS");

//Local storage = almacenamiento interno
localStorage.setItem("Fecha","05 Mayo")
localStorage.setItem("Turno","Primero")

//Colocar el valor del item seleccionado
const titulo = document.getElementById("ValorDeLocalStorage")
titulo.innerHTML = localStorage.getItem("Turno")

//Insertar botton borrar item LS
const botonBorrar = document.getElementById("btnBorrarLS");
botonBorrar.addEventListener("click", ()=> {
    localStorage.removeItem("Turno");
    titulo.innerHTML = "Elemento eliminado";
});

//Insertar botton borrar todo LS
const botonBorrarTodo = document.getElementById("btnBorrarTodoLS");
botonBorrarTodo.addEventListener("click", ()=> {
    localStorage.clear();
    titulo.innerHTML = "Local ST Eliminado";
});

