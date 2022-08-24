const listaUsuarios = () =>
  fetch("http://localhost:3000/usuario").then((response) => response.json());

const crearUsuario = (usuario) => {
  return fetch("http://localhost:3000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid.v4(),
      nombre: usuario.nombre,
      email: usuario.email,
      password: usuario.password,
      nacimiento: usuario.nacimiento,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      ciudad: usuario.ciudad,
      provincia: usuario.provincia,
    }),
  });
};

const detalleUsuario = async (id) => {
  const response = await fetch(`http://localhost:3000/usuario/${id}`);
  return await response.json();
};

const actualizarUsuario = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/usuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        nacimiento: usuario.nacimiento,
        telefono: usuario.telefono,
        direccion: usuario.direccion,
        ciudad: usuario.ciudad,
        provincia: usuario.provincia,
      }),
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
};

const eliminarUsuario = (id) => {
  return fetch(`http://localhost:3000/usuario/${id}`, {
    method: "DELETE",
  });
};

export const clientServices = {
  listaUsuarios,
  crearUsuario,
  detalleUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
