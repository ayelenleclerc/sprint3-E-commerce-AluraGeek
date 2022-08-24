import { productServices } from "../services/products-services.js";

const nuevoProducto = (nombre, img, precio) => {
  const card = document.createElement("div");

  const contenido = `
  <figure>
    <img src="${img}" class="card-img-top" alt="${nombre}">
    <figcaption class="card__figcaption">${nombre}</figcaption>
    </figure>
    <p class="card__p"> ${precio}</p>
      <a href="#" class="card__a">Ver más</a>
    </div>
  `;
  card.innerHTML = contenido;
  card.classList.add("card__item");
  return card;
};

const productos = document.querySelector("[datos-productos]");

const render = async () => {
  try {
    const listaProductos = await productServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(elemento.nombre, elemento.img, elemento.precio)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
