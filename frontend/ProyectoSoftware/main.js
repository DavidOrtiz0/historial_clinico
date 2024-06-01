document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('nav1');
    const menuBtn = document.getElementById('menuBtn');
    const menuBtnIcon = document.getElementById('menuBtnIcon');

    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute(
            "class",
            isOpen ? "ri-close-line" : "ri-menu-3-line"
        );
    });

    navLinks.addEventListener("click", (e) => {
        if(e.target.tagName === "A") {
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-3-line");
        }
    });
});

class paciente
{
    constructor(pk_cedula, tipo_de_cedula, lugar_de_expedicion, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento, tipo_de_sangre, telefono, correo, direccion, alergias, nombre_ce, apellido_ce, telefono_ce, usuario, contrasena){
        this.pk_cedula = pk_cedula;
        this.tipo_de_cedula = tipo_de_cedula;
        this.lugar_de_expedicion = lugar_de_expedicion;
        this.nombre = nombre;
        this.primer_apellido = primer_apellido;
        this.segundo_apellido = segundo_apellido;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.tipo_de_sangre = tipo_de_sangre;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.alergias = alergias;
        this.nombre_ce = nombre_ce;
        this.apellido_ce = apellido_ce;
        this.telefono_ce = telefono_ce;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

//Funciones para manejar el inicio de sección
async function login()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    urls = {
        url_medico: 'http://localhost:8080/medico/sesion',
        url_adm: 'http://localhost:8080/administrador/sesion',
        url_paciente: 'http://localhost:8080/programadordecitas/sesion',
        url_programador_de_citas: 'http://localhost:8080/paciente/sesion'
    };

	const adm = {
		usuario: username,
		contrasena: password
	};
    
    const metodo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adm)
    };

    let numero = 0;
    view(urls, metodo, numero);
}

async function peticion(url, metodo)
{
    let loginSuccess;

    try
    {
    const response = await fetch(url,metodo)
    if (!response.ok) { throw new Error('Network response was not ok'); }
        const data = await response.json
        loginSuccess = data;
        console.log('Login success:', loginSuccess);
    return response.json();
    }catch{
        console.error("Error al iniciar sesion: ", error);
    }
 
    return loginSuccess;
}

async function view(urls, metodo, clave)
{
    let iterar = Object.values(urls);
    let respuesta = await peticion(iterar[clave], metodo);
    let condicion = `${respuesta}-${clave}`;

    console.info("el valor de iteracion es: ", iterar, " la clave es: ", clave, " la respuesta es: ", respuesta)
    
        switch(condicion)
        {
            case 'true-0':
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('medico-options').style.display = 'block';
                break;
            
            case 'true-1':
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('admin-options').style.display = 'flex';
                break;

            case 'true-2':
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('programador-options').style.display = 'block';
                break;
            
            case 'true-3':
                console.log("es un paciente");
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('paciente-options').style.display = 'flex';
                break;

            default:
                if(condicion === 'false-3')
                {
                    const messageElement = document.getElementById('message');
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                    messageElement.style.color = 'red';
                    messageElement.textContent = 'Usuario o contraseña incorrectos';
                }else{view(urls, metodo, clave+1);}
        }
}

// Funciones para manejar el modal de crear HC
function openCrearHCModal() {
    document.getElementById('crearHCModal').style.display = 'block';
}

function closeCrearHCModal() {
    document.getElementById('crearHCModal').style.display = 'none';
    document.getElementById('crearHCForm').reset();
}

async function submitCrearHCForm() {
    const form = document.getElementById('crearHCForm');
    if (form.checkValidity()) {
        const nombre = document.getElementById("nombre").value;
        const primer_apellido = document.getElementById("primerApellido").value;
        const segundo_apellido = document.getElementById("segundoApellido").value;
        const tipo_de_documento = document.getElementById("tipoDocumento").value;
        const lugar_de_expedicion = document.getElementById("lugarExpedicion").value;
        const pk_cedula = parseInt(document.getElementById("numeroDocumento").value);
        const tipo_de_sangre = document.getElementById("tipoSangre").value;
        const fecha_de_nacimiento = document.getElementById("fechaNacimiento").value;
        const telefono = document.getElementById("numeroCelular").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;
        const alergias = "ninguna";
        const nombre_ce = document.getElementById("nombreEmergencia").value;
        const apelliido_ce = document.getElementById("apellidoEmergencia").value;
        const telefono_ce = document.getElementById("numeroCelularEmergencia").value;
        const usuario = "paciente";
        const contrasena = "777";

        const pacient = new paciente
        (
            pk_cedula,
            tipo_de_documento,
            lugar_de_expedicion,
            nombre,
            primer_apellido,
            segundo_apellido,
            fecha_de_nacimiento,
            tipo_de_sangre,
            telefono,
            correo,
            direccion,
            alergias,
            nombre_ce,
            apelliido_ce,
            telefono_ce,
            usuario,
            contrasena
        )
        
        const metodo = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pacient)
        };

        url = 'http://localhost:8080/paciente/guardar';

        let respuesta = peticion(url,metodo);
        respuesta.then(function(resultado)
        {
            if(resultado === true){
                alert('Historia Clínica creada');
                closeCrearHCModal();
                }
        }).catch(function(error){alert('Algo salio mal');});
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

function cancelCrearHCForm() {
    closeCrearHCModal();
}

// Función para abrir el modal de crear usuario
function openCrearUsuarioModal() {
    document.getElementById('CrearUsuarioModal').style.display = 'block';
}

function closeCrearUsuarioModal() {
    document.getElementById('CrearUsuarioModal').style.display = 'none';
    document.getElementById('CrearUsuarioForm').reset();
}

function submitCrearUsuarioForm() {
    const form = document.getElementById('CrearUsuarioForm');
    if (form.checkValidity()) {
        alert('Usuario creado');
        closeCrearUsuarioModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

function cancelCrearUsuarioForm() {
    closeCrearUsuarioModal();
}

function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('admin-options').style.display = 'none';
    document.getElementById('medico-options').style.display = 'none';
    document.getElementById('programador-options').style.display = 'none';
    document.getElementById('programador-options').style.display = 'none';
    document.getElementById('paciente-options').style.display = 'none';
    document.getElementById('message').textContent = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

//Para menejar el modal de Atender Urgencias
function openAtenderUrgenciasModal() {
    document.getElementById('atenderUrgenciasModal').style.display = 'block';
}

function closeAtenderUrgenciasModal() {
    document.getElementById('atenderUrgenciasModal').style.display = 'none';
    document.getElementById('atenderUrgenciasForm').reset();
}

function submitAtenderUrgenciasForm() {
    const form = document.getElementById('atenderUrgenciasForm');
    if (form.checkValidity()) {
        alert('Urgencia atendida');
        closeAtenderUrgenciasModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

// Funciones para manejar la consulta de HC
function openConsultarHCModal() {
    document.getElementById('consultarHCModal').style.display = 'block';
}

function closeConsultarHCModal() {
    document.getElementById('consultarHCModal').style.display = 'none';
    document.getElementById('consultarHCForm').reset();
    document.getElementById('hcActions').style.display = 'none';
}

async function buscarHC() {
    const cedula = parseInt(document.getElementById('cedulaConsultar').value);
    url='http://localhost:8080/paciente/consultar';
    const datos = {pk_cedula:cedula}
    const metodo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(datos)
    };

    peticion(url, metodo).then(
            function(resultado)
            {
                document.getElementById('hcActions').style.display = 'block';
                console.log(resultado);
            }
        ).catch(function(error)
            {
                alert('No existe ningún historial clínico asociado');
                closeConsultarHCModal();
                console.error(error);
            });
        
    
    /*if (cedula === "") {
        alert('Por favor, ingrese el número de cédula');
    } else {
        // Aquí iría la lógica para verificar si el HC existe en la base de datos
        // Como aún no está implementado, siempre diremos que no existe
        const hcExists = false;

        if (hcExists) {
            
        } else {
            
        }
    }*/
}

function modificarHC() {
    alert('Función de Modificar HC no implementada aún.');
}

function verHC() {
    alert('Función de Consultar HC no implementada aún.');
}

function eliminarHC() {
    alert('Función de Eliminar HC no implementada aún.');
}

// Funciones para manejar la sección de ingresar documento para programar cita
function openIngresarDocumentoSection() {
    document.getElementById('ingresarDocumentoSection').style.display = 'block';
}

function closeIngresarDocumentoSection() {
    document.getElementById('ingresarDocumentoSection').style.display = 'none';
    document.getElementById('numeroDocumentoForm').reset();
}

function verificarDocumento() {
    const numeroDocumentoInput = document.getElementById('numeroDocumentoInput').value;
    const numeroDocumentoExistente = '12345678'; // Número de documento ficticio para validación

    if (numeroDocumentoInput === numeroDocumentoExistente) {
        document.getElementById('paciente').value = "Datos del paciente"; // Aquí irían los datos reales
        closeIngresarDocumentoSection();
        openProgramarCitaModal();
    } else {
        alert('🤒este numero de documento no se encuentra en el sistema. Recuerde que ya debe estar registrado por el administrador, si este registrado ya por el administrador, inténtalo de nuevo, si el fallo persiste por favor comunícate con el Administrador: XXXXXXXX');
    }
}

function cancelIngresarDocumentoSection() {
    closeIngresarDocumentoSection();
}

// Funciones para manejar el modal de programar cita
function openProgramarCitaModal() {
    document.getElementById('programarCitaModal').style.display = 'block';
}

function closeProgramarCitaModal() {
    document.getElementById('programarCitaModal').style.display = 'none';
    document.getElementById('programarCitaForm').reset();
}

function submitProgramarCitaForm() {
    const form = document.getElementById('programarCitaForm');
    if (form.checkValidity()) {
        alert('Cita programada');
        closeProgramarCitaModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

function cancelProgramarCitaForm() {
    closeProgramarCitaModal();
}

// Evento para cerrar el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
