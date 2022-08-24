import { valida } from "./validaciones-registro-productos.js";
import { productServices } from "../services/products-services.js";
import Swal from "sweetalert2";

const inputs = document.querySelectorAll("input");

const registroSubmit = document.querySelector("[data-form-producto]");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

registroSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const producto = {
    img: formData.get("img"),
    categoria: formData.get("categoria"),
    nombre: formData.get("nombre"),
    precio: formData.get("precio"),
    descripcion: formData.get("descripcion"),
  };
  productServices.crearProducto(producto);
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto registrado con éxito",
    showConfirmButton: true,
    timer: 1500,
  });
});
