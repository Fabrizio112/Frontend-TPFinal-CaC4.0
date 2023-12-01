import { instanciaVue } from "../js/usuarios.js"


export function FormularioUsuario() {
    let $form = document.createElement("form")
    $form.classList.add("my-5")
    $form.id = "form-users"
    let usuario = instanciaVue.usuarioSeleccionado
    $form.innerHTML = `${usuario.idSeleccionado.length > 0 ? `<h2 class="text-center fs-2">Editar Usuario</h2>` : `<h2 class="text-center fs-2" >Añadir Usuario</h2>`}
        <div class="mb-3">
            <label class="form-label" for="nombre">Nombre</label>
            <input class="form-control" id="nombre"  pattern="^[a-zA-Z ]+$"  title="Solo letras y espacios en blanco" required  value="${usuario.nombre ? usuario.nombre : ""}" >
        </div>
        <div class="mb-3">
            <label class="form-label" for="user">Usuario</label>
            <input class="form-control" id="user" title="No puede estar vacio"  required value="${usuario.usuario ? usuario.usuario : ""}">
        </div>
        <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input class="form-control" id="email"  pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
            title="Email incorrecto Ej: ejemplo@ejemplo.com" required value="${usuario.email ? usuario.email : ""}">
        </div>
        <div class="mb-3">
            <label class="form-label" for="avatar">Avatar</label>
            <input class="form-control" id="avatar" required value="${usuario.avatar ? usuario.avatar : ""}">
        </div>
        <button class="btn btn-primary px-5 mt-3" type="submit"  data-id="${usuario.idSeleccionado ? usuario.idSeleccionado : ""}" >${usuario.idSeleccionado > 0 ? "Editar" : "Crear"}</button>
    `


    return $form
}