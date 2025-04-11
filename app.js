const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listadetareas = document.getElementById("lista-de-tareas");
function agregartarea() {
  if (input.value) {
    let tareanueva = document.createElement("div");
    tareanueva.classList.add("tarea");

    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareanueva.appendChild(texto);

    let iconos = document.createElement("div");
    tareanueva.appendChild(iconos);

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completartarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash-fill", "icono-eliminar");
    eliminar.addEventListener("click", eliminartarea);

    iconos.append(completar, eliminar);

    listadetareas.appendChild(tareanueva);
  } else {
    alert("por favor ingresa una tarea.");
  }
}

boton.addEventListener("click", agregartarea);

function completartarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}
function eliminartarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregartarea();
});
