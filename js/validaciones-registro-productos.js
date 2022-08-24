export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = ["valueMissing", "patternMismatch"];

const mensajesDeError = {
  img: {
    valueMissing: "El campo Imagen no puede estar vacío",
    patternMismatch: "El formato de la imagen debe ser .jpg, .jpeg o .png",
  },
  categoria: {
    valueMissing: "El campo Categoría no puede estar vacío",
    patternMismatch: "La categoría debe tener entre 4 y 10 caracteres",
  },
  nombre: {
    valueMissing: "El campo Nombre no puede estar vacío",
    patternMismatch: "El nombre debe tener entre 4 y 20 caracteres",
  },
  precio: {
    valueMissing: "El campo Precio no puede estar vacío",
    patternMismatch: "El precio debe tener entre 1 y 10 caracteres",
  },
  descripcion: {
    valueMissing: "El campo Descripción no puede estar vacío",
    patternMismatch: "La descripción debe tener entre 4 y 300 caracteres",
  },
};
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}
