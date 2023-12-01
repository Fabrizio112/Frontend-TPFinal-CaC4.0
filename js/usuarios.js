import { generarHTML } from "../helper/GenerarHTML.js"

const initialUserForm = {
    idSeleccionado: "",
    nombre: "",
    usuario: "",
    email: "",
    avatar: ""
}
const App = Vue.createApp({
    data() {
        return {
            usuarios: [],
            url: "https://fabrizio112.pythonanywhere.com/users",
            error: false,
            loading: true,
            usuarioSeleccionado: initialUserForm
        }
    },
    methods: {
        getUsers(url) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const usuariosHTML = generarHTML(data)
                    let $table = document.querySelector("#tabla-usuarios")
                    $table.appendChild(usuariosHTML)
                    this.usuarios = data
                    this.loading = false
                })
                .catch(error => {
                    this.error = true
                    console.error(error)
                })

        }, addUser(usuario) {
            let options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }
            fetch(this.url, options)
                .then(res => res.json())
                .then(data => {
                    alert("Usuario Creado")
                })
                .catch(error => {
                    console.error(error)
                })
        }, deleteUser(id) {
            let options = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + `/${id}`, options)
                .then(res => res.json())
                .then(data => {
                    alert("Usuario Eliminado")
                    location.reload()
                })
                .catch(error => {
                    console.error(error)
                })
        }, editUser(usuario) {
            let options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url + `/${usuario.idSeleccionado}`, options)
                .then(res => res.json())
                .then(data => {
                    alert("Usuario Editado con Exito")
                })
                .catch(error => {
                    console.error(error)
                })
        },
        changeIdSeleccionado(id) {
            this.usuarioSeleccionado.idSeleccionado = id
        },
    },
    created() {
        this.getUsers(this.url)
    }
});
const instanciaVue = App.mount('#root')
export { instanciaVue } 