const formulario = document.querySelector("#survey-form");
console.log(formulario);

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  const nombre = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const edad = document.querySelector("#number").value;
  const opcion = document.querySelector("#dropdown").value;
  const comentario = document.querySelector("#comentario").value;

  

  // Obtener el valor del radio button seleccionado
  const radioRecomiendaSi = document.querySelector("#recomienda-si");
  const radioRecomiendaNo = document.querySelector("#recomienda-no");

  let recomienda;
  if (radioRecomiendaSi.checked) {
    recomienda = "si";
  } else if (radioRecomiendaNo.checked) {
    recomienda = "no";
  } else {
    recomienda = ""; // O algún valor predeterminado si ninguno está seleccionado
  }

  

  console.log(nombre, email, edad, opcion, recomienda, comentario);
  mostrarResultado("resultado-nombre", `Nombre: ${nombre}`);
  mostrarResultado("resultado-email", `Email: ${email}`);
  mostrarResultado("resultado-edad", `Edad: ${edad}`);
  mostrarResultado("resultado-opcion", `Opción: ${opcion}`);
  mostrarResultado("resultado-recomienda", `Recomienda: ${recomienda}`);
  mostrarResultado("resultado-comentario", `Comentario: ${comentario}`);
}
function mostrarResultado(id, contenido) {
  const resultadoDiv = document.getElementById(id);
  resultadoDiv.textContent = contenido;
}