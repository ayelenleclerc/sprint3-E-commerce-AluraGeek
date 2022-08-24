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

const starwars = document.querySelector("[data-section-starwars]");
const consolas = document.querySelector("[data-section-consolas]");
const diversos = document.querySelector("[data-section-diversos]");

const render = async () => {
  try {
    const listaProductos = await productServices.listaProductos();
    listaProductos.forEach((elemento) => {
      if (elemento.categoria === "Star Wars") {
        starwars.appendChild(
          nuevoProducto(elemento.nombre, elemento.img, elemento.precio)
        );
      } else if (elemento.categoria === "Consolas") {
        consolas.appendChild(
          nuevoProducto(elemento.nombre, elemento.img, elemento.precio)
        );
      } else if (elemento.categoria === "Diversos") {
        diversos.appendChild(
          nuevoProducto(elemento.nombre, elemento.img, elemento.precio)
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

render();
