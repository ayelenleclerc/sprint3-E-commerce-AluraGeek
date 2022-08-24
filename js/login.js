import Swal from "sweetalert2";
import { clientServices } from "../services/client-services.js";

const login = document.querySelector("[data-form-login]");

login.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const usuario = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  clientServices.listaUsuarios().then((usuarios) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email === formData.get("email") &&
        usuario.password === formData.get("password")
    );
    if (usuarioEncontrado) {
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Iniciaste sesión con éxito",
        footer: `<a href=""../index.html">Ir a la página principal</a>`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email o la contraseña son incorrectos!",
      });
    }
  });
});
