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
/*
let colombiaData;
fetch('./colombia.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    colombiaData = data;
    console.log(data);
  })
  .catch(err => {
    // Maneja errores aquí
    console.error('Error:', err);
  });

// Rellenar el desplegable de departamentos
const departamentoSelect = document.getElementById('departamento');
const municipioSelect = document.getElementById('municipio');

// Añadir departamentos al desplegable de departamentos
Object.keys(colombiaData).forEach(department => {
    const option = document.createElement('option');
    option.value = department;
    option.textContent = department;
    departamentoSelect.appendChild(option);
});

// Receptor de eventos para el cambio del desplegable de departamento
departamentoSelect.addEventListener('change', function() {
    const selectedDepartment = this.value;
    municipioSelect.innerHTML = '<option value="">Seleccione...</option>'; // Restablecer el menú desplegable del municipio

    if (selectedDepartment) {
        // Rellenar el menú desplegable de municipios en función del departamento seleccionado
        colombiaData[selectedDepartment].forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality;
            option.textContent = municipality;
            municipioSelect.appendChild(option);
        });
    }
});
*/
class Paciente
{
    constructor(pk_cedula, tipo_de_cedula, lugar_de_expedicion, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento, tipo_de_sangre, telefono, correo, direccion, alergias, nombre_ce, apellido_ce, telefono_ce, usuario, contrasena)
    {
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

class Medico
{
    constructor(pk_id_medico, nombre, usuario, contrasena, especializacion)
    {
        this.pk_id_medico = pk_id_medico;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.especializacion = especializacion;
    }
}

let sesion;
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

    let numero = 0;
    view(urls, numero, adm);
}

async function peticion(url, datos)
{
    let loginSuccess;

    const metodo = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };

    try
    {
        const response = await fetch(url,metodo)
        if (!response.ok) { throw new Error('Network response was not ok'); }
        const data = await response.json();
        loginSuccess = data;
        console.log('Datos obtenidos: ', loginSuccess);
        return loginSuccess;
    }catch
    {
        console.error("Error al realizar la accion: ", error);
    }
}

async function peticion_get(url)
{
    let loginSuccess;

    const metodo = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    try
    {
        const response = await fetch(url,metodo)
        if (!response.ok) { throw new Error('Network response was not ok'); }
        const data = await response.json();
        loginSuccess = data;
        console.log('Datos obtenidos: ', loginSuccess);
        return loginSuccess;
    }catch
    {
        console.error("Error al realizar la accion: ", error);
    }
}

async function view(urls, clave, datos_sesion)
{
    const messageElement = document.getElementById('message');
    const iterar = Object.values(urls);
    const respuesta = await peticion(iterar[clave], datos_sesion);
    const condicion = `${respuesta.confirmacion}-${clave}`;

    //console.info("el valor de iteracion es: ", iterar, " la clave es: ", clave, " la respuesta es: ", respuesta)
    
        switch(condicion)
        {
            case 'true-0':
                sesion = "medico";
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('medico-options').style.display = 'block';
                break;
            
            case 'true-1':
                sesion = "administrador";
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('admin-options').style.display = 'flex';
                break;

            case 'true-2':
                sesion = "programadordecitas";
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('programador-options').style.display = 'block';
                break;
            
            case 'true-3':
                sesion = "paciente";
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('paciente-options').style.display = 'flex';
                break;

            default:
                if(condicion === 'false-3')
                {
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                    messageElement.style.color = 'red';
                    messageElement.textContent = 'Usuario o contraseña incorrectos';
                }else{view(urls, clave+1, datos_sesion);}
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

        const Formulario = new FormData(form);
        data = {};
        for(let [key, value] of Formulario.entries()){
            data[key] = value;
        }
        console.log(data);

        const pacient = new Paciente(
            parseInt(document.getElementById("numeroDocumento").value),
            document.getElementById("tipoDocumento").value,
            document.getElementById("lugarExpedicion").value,
            document.getElementById("nombre").value,
            document.getElementById("primerApellido").value,
            document.getElementById("segundoApellido").value,
            document.getElementById("fechaNacimiento").value,
            document.getElementById("tipoSangre").value,
            document.getElementById("numeroCelular").value,
            document.getElementById("correo").value,
            document.getElementById("direccion").value,
            "ninguna",
            document.getElementById("nombreEmergencia").value,
            document.getElementById("apellidoEmergencia").value,
            document.getElementById("numeroCelularEmergencia").value,
            "paciente2",
            "767"
          ); 
           

        url = 'http://localhost:8080/paciente/guardar';

        let respuesta = peticion(url,pacient);
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
    url='http://localhost:8080/paciente/obtener';
    urlc='http://localhost:8080/cita/obtener';
    const datos = {pk_cedula:cedula}

    peticion(url, datos).then(
            function(resultado)
            {
                peticion(urlc, datos)
                .then(
                    function(resultado)
                    {
                        console.log(resultado);
                        document.getElementById('hcActions').style.display = 'block';
                    })
                .catch(function(error){
                        console.error("EL error es: ",error);
                        alert('No existe citas registradas para este paciente');
                        closeConsultarHCModal();
                    });
            })
        .catch(function(error)
            {
                alert('No existe ningún historial clínico asociado');
                closeConsultarHCModal();
                console.error(error);
            });
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
let Paciente_cedula;
function verificarDocumento() {
    const numeroDocumentoInput = parseInt(document.getElementById('numeroDocumentoInput').value);
    const datos = {pk_cedula:numeroDocumentoInput}
    const url='http://localhost:8080/paciente/consultar';

    peticion(url, datos).then(
        function(resultado)
        {
            console.log(resultado);
            Paciente_cedula = numeroDocumentoInput;
        }
    ).catch(function(error)
        {
            alert('Ocurrio una falla inesperada');
            closeIngresarDocumentoSection();
            console.error(error);
        });

    if (numeroDocumentoInput !== false) {
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
async function openProgramarCitaModal() {
    const urlm= 'http://localhost:8080/medico/obtener';
    peticion_get(urlm).then(
        function(resultado)
        {
            console.log(resultado)
        }
    ).catch(function(error)
        {
            console.error("Hubo un error al traer medicos: ",error);
        });

    document.getElementById('programarCitaModal').style.display = 'block';
}

function closeProgramarCitaModal() {
    document.getElementById('programarCitaModal').style.display = 'none';
    document.getElementById('programarCitaForm').reset();
}

async function submitProgramarCitaForm() {
    const form = document.getElementById('programarCitaForm');
    const url = 'http://localhost:8080/cita/guardar';

    if (form.checkValidity()) {
        const tipo_de_cita = document.getElementById("tipoConsulta").value;
        const fecha_hora = document.getElementById("fechaHora").value;
        if (typeof fecha_hora === 'string' && fecha_hora.includes('T')) {
            const [fecha, hora] = fecha_hora.split('T');
            //data = {};
            //for(let [key, value] of Medico_datos.entries()){ if(key === "especializacion" && value === "general") { console.log(data[key] = value); } }
            const cita = {
                fk_paciente: {pk_id_paciente: 123},
                fk_medico: {pk_id_medico: 1},
                fk_programadorCitas: { pk_id_programadorCitas: 1},
                fecha: fecha,
                hora: hora,
                tipo_de_cita: tipo_de_cita
            }

            peticion(url, cita).then(
                function(resultado)
                {
                    if(resultado === true){
                        alert('Cita programada');
                        closeProgramarCitaModal();
                    }else{ alert("hay un error inesperado");}
                })
            .catch(function(error)
                {
                    console.error("EL error es: ",error);
                });
        } else {
            console.error('Fecha y hora no válidas:', fecha_hora);
            alert('Por favor, seleccione una fecha y hora válidas.');
        }
        
        
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
            modal.  style.display = 'none';
        }
    });
}
