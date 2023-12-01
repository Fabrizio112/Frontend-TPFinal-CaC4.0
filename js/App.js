import { Footer } from "../components/Footer.js"
import { Main } from "../components/Main.js"
import { NavBar } from "../components/Navbar.js"
import { RouterSimulado } from "../components/RouterSimulado.js"

export function App() {
    const $root = document.querySelector("#root")
    $root.innerHTML = null
    $root.appendChild(NavBar())
    $root.appendChild(Main())
    $root.appendChild(Footer())

    RouterSimulado()
}