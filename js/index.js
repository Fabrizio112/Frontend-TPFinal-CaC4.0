import { corroborarElElemento } from "../helper/corroborarElElemento.js"
import { App } from "./App.js"
import { instanciaVue } from "./usuarios.js"


document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange", App)

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("boton-editar")) {
        let $tr = e.target.closest("tr")
        let idUsuario = $tr.querySelector(".id-usuario").innerText
        let nombreUsuario = $tr.querySelector(".nombre-usuario").innerText
        let usernameUsuario = $tr.querySelector(".username-usuario").innerText
        let emailUsuario = $tr.querySelector(".email-usuario").innerText
        let avatarUsuario = $tr.querySelector(".avatar-usuario img").src
        instanciaVue.usuarioSeleccionado.nombre = nombreUsuario
        instanciaVue.usuarioSeleccionado.usuario = usernameUsuario
        instanciaVue.usuarioSeleccionado.email = emailUsuario
        instanciaVue.usuarioSeleccionado.avatar = avatarUsuario
        instanciaVue.changeIdSeleccionado(idUsuario)
    } else if (e.target.id === "view-user") {
        instanciaVue.usuarioSeleccionado = {
            idSeleccionado: "",
            nombre: "",
            usuario: "",
            email: "",
            avatar: ""
        }
        instanciaVue.getUsers("https://fabrizio112.pythonanywhere.com/users")

    } else if (e.target.id === "add-user") {
        let $main = e.target.parentElement.parentElement.nextElementSibling
        let $form = $main.querySelector("form")
        let $titulo = $form.querySelector("h2")
        let $boton = $form.querySelector("button")
        $titulo.innerText = "Añadir Usuario"
        $boton.innerText = "Crear"
        $form.nombre.value = ""
        $form.user.value = ""
        $form.email.value = ""
        $form.avatar.value = ""
    }

})
document.addEventListener("submit", (e) => {
    if (e.target.id === "form-users") {
        let $form = e.target
        let $button = $form.querySelector("button")
        if ($form.nombre.value && $form.user.value && $form.email.value && $form.avatar.value) {
            if ($button.dataset.id) {
                let usuario = {
                    idSeleccionado: $button.dataset.id,
                    nombre: $form.nombre.value,
                    usuario: $form.user.value,
                    email: $form.email.value,
                    avatar: $form.avatar.value
                }
                instanciaVue.editUser(usuario)
                window.location.reload()
            } else {
                let usuario = {
                    nombre: $form.nombre.value,
                    usuario: $form.user.value,
                    email: $form.email.value,
                    avatar: $form.avatar.value
                }
                instanciaVue.addUser(usuario)
                window.location.reload()
            }

        }
    }
})
document.addEventListener("keyup", e => {
    if (e.target.id === "nombre") {
        corroborarElElemento(e.target)
    } else if (e.target.id === "avatar") {
        let regExp = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        let contenedorError = document.createElement("p")
        if (regExp.test(e.target.value)) {
            if (document.querySelector(`[name=error-${e.target.id}]`) != null) {
                document.querySelector(`[name=error-${e.target.id}]`).remove()
            }
            e.target.classList.remove("border-danger")
            e.target.classList.add("border", "border-success", "border-3")
        } else if (!regExp.test(e.target.value)) {
            if (document.querySelector(`[name=error-${e.target.id}]`) != null) {
                document.querySelector(`[name=error-${e.target.id}]`).remove()
            }
            e.target.classList.remove("border-success")
            e.target.classList.add("border-danger", "border", "border-3")
            e.target.after(contenedorError);
            contenedorError.textContent = "❌ Ingrese un Avatar valido";
            contenedorError.setAttribute("name", `error-${e.target.id}`)
            contenedorError.classList.add("mt-2")
        }
    } else if (e.target.id === "user") {
        corroborarElElemento(e.target)
    } else if (e.target.id === "email") {
        corroborarElElemento(e.target)
    }
})

