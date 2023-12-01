import { FormularioUsuario } from "./FormularioUsuario.js"
import { TablaDeUsuarios } from "./TablaUsuarios.js"

export function RouterSimulado() {
    let $main = document.querySelector("main")
    if (document.location.hash === "#/" || !document.location.hash) {
        $main.appendChild(TablaDeUsuarios())
    } else if (document.location.hash.includes("#/agregar-usuario")) {
        $main.appendChild(FormularioUsuario())
    }
}
