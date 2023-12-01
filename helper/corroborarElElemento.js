export function corroborarElElemento(a) {
    let contenedorError = document.createElement("p")
    if (a.validity.valid) {
        if (document.querySelector(`[name=error-${a.id}]`) != null) {
            document.querySelector(`[name=error-${a.id}]`).remove()
        }
        a.classList.remove("border-danger")
        a.classList.add("border", "border-success", "border-3")
    } else if (!a.validity.valid) {
        if (document.querySelector(`[name=error-${a.id}]`) != null) {
            document.querySelector(`[name=error-${a.id}]`).remove()
        }
        a.classList.remove("border-success")
        a.classList.add("border-danger", "border", "border-3")
        a.after(contenedorError);
        contenedorError.textContent = "❌ " + a.title;
        contenedorError.setAttribute("name", `error-${a.id}`)
        contenedorError.classList.add("mt-2")
    }
}