export function NavBar() {
    let $navbar = document.createElement("nav")
    $navbar.classList.add("d-flex", "flex-column", "mt-3", "mb-5")
    $navbar.innerHTML = `
        <div class="w-100 text-center">
            <h1 class="p-3 display-4">Lista de Usuarios</h1>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-4">
            <a href="#/agregar-usuario" id="add-user" class="btn btn-dark border border-light border-2 fw-semibold">Agregar Usuario</a>
            <a href="#/" id="view-user" class="btn btn-dark border border-light border-2 fw-semibold" >Ver Usuarios</a>
        </div>`
    return $navbar

} 