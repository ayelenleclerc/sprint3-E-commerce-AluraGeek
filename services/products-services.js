const listaProductos = () =>
  fetch("http://localhost:3000/producto").then((response) => response.json());

function crearProducto(producto) {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid.v4(),
      img: producto.img,
      categoria: producto.categoria,
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
    }),
  });
}

const detalleProducto = async (id) => {
  const response = await fetch(`http://localhost:3000/producto/${id}`);
  return await response.json();
};

const actualizarProducto = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img: producto.img,
        categoria: producto.categoria,
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
      }),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

export const productServices = {
  listaProductos,
  crearProducto,
  detalleProducto,
  actualizarProducto,
  eliminarProducto,
};
