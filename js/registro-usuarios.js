import Swal from "sweetalert2";
import { valida } from "./validaciones-registro-usuarios.js";
import { clientServices } from "../services/client-services.js";

const inputs = document.querySelectorAll("input");

const registroSubmit = document.querySelector("[data-form-alta]");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

registroSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const usuario = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    password: formData.get("password"),
    nacimiento: formData.get("nacimiento"),
    telefono: formData.get("telefono"),
    direccion: formData.get("direccion"),
    ciudad: formData.get("ciudad"),
    provincia: formData.get("provincia"),
  };
  clientServices.listaUsuarios().then((usuarios) => {
    const usuarioEnLista = usuarios.find(
      (usuario) => usuario.email === formData.get("email")
    );
    if (usuarioEnLista) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado!",
        footer: `<a href="../pages/homeLogin.html">¿Ya tienes una cuenta? Inicia sesión</a>`,
      });
    } else {
      clientServices.crearUsuario(usuario);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado con éxito",
        footer: `<a href="../pages/homeLogin.html">Inicia sesión</a>`,
      });
    }
  });
});
