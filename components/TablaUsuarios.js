export function TablaDeUsuarios() {
    let $table = document.createElement("table")
    $table.classList.add("table", "align-middle", "table-dark")
    $table.id = "tabla-usuarios"
    let $thead = document.createElement("thead")
    let $tr = document.createElement("tr")
    let $id = document.createElement("th")
    $id.innerText = "#"
    let $Nombre = document.createElement("th")
    $Nombre.innerText = "Nombre"
    let $Usuario = document.createElement("th")
    $Usuario.innerText = "Usuario"
    let $Email = document.createElement("th")
    $Email.innerText = "Email"
    let $Avatar = document.createElement("th")
    $Avatar.innerText = "Avatar"
    let $Acciones = document.createElement("th")
    $Acciones.innerText = "Acciones"
    $tr.appendChild($id);
    $tr.appendChild($Nombre);
    $tr.appendChild($Usuario);
    $tr.appendChild($Email);
    $tr.appendChild($Avatar);
    $tr.appendChild($Acciones)
    $thead.appendChild($tr)
    $table.appendChild($thead)

    return $table
}