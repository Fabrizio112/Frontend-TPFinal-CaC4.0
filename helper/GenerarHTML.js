export function generarHTML(usuarios) {
    let $tbody = document.createElement("tbody")
    usuarios.forEach(usuario => {
        let usuarioHTML = `
        <tr>
        <td class="fw-bolder id-usuario" >${usuario.id}</td>
        <td class="nombre-usuario">${usuario.name}</td>
        <td class="username-usuario">${usuario.username}</td>
        <td class="email-usuario">${usuario.email}</td>
        <td class="avatar-usuario"><img src="${usuario.avatar}" alt="imagen-usuario"/></td>
        <td><a href="#/agregar-usuario" class="text-light" ><button class="btn btn-primary mx-2 boton-editar">Editar</button></a><button class="btn btn-danger" data-id="${usuario.id}" id="delete-user">Eliminar</button></td>
        </tr>`
        $tbody.insertAdjacentHTML("beforeend", usuarioHTML)
    });

    return $tbody
}