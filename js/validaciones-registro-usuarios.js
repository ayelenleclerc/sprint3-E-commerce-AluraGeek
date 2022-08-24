export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "tooShort",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo Nombre completo no puede estar vacío",
  },
  email: {
    valueMissing: "El campo Email no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo Contraseña no puede estar vacío",
    tooShort: "La contraseña debe tener al menos 6 caracteres",
    patternMismatch:
      "Debe contener al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales",
  },
  nacimiento: {
    valueMissing: "El campo Fecha de nacimiento no puede estar vacío",
    customError: "Debe tener al menos 18 años de edad",
  },
  telefono: {
    valueMissing: "El campo Teléfono no puede estar vacío",
    patternMismatch: "El formato requerido es +XX XXX XXXX XXXX",
  },
  direccion: {
    valueMissing: "El campo Dirección no puede estar vacío",
    patternMismatch: "La dirección debe tener entre 10 y 40 caracteres",
  },
  ciudad: {
    valueMissing: "El campo Ciudad no puede estar vacío",
    patternMismatch: "La ciudad debe tener entre 4 y 50 caracteres",
  },
  provincia: {
    valueMissing: "El campo Provincia no puede estar vacío",
    patternMismatch: "La provincia debe tener entre 4 y 50 caracteres",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
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

const inputNacimiento = document.querySelector("#nacimiento");

inputNacimiento.addEventListener("blur", (e) => {
  validarNacimiento(e.target);
});

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  mayorDeEdad(fechaCliente);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debe tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
