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

//Funciones para manejar el inicio de sección
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const users = {
        administrador: { password: 'admin123', message: 'Bienvenido Administrador' },
        medico: { password: 'medico123', message: 'Bienvenido Medico' },
        paciente: { password: 'paciente123', message: 'Bienvenido Paciente' },
        programador: { password: 'programador123', message: 'Bienvenido Programador de Citas' }
    };

    if (users[username] && users[username].password === password) {
        messageElement.textContent = users[username].message;
        messageElement.style.color = 'green';

        document.getElementById('login-section').style.display = 'none';

        if (username === 'administrador') {
            document.getElementById('admin-options').style.display = 'flex';

        } else if (username === 'paciente') {
            document.getElementById('paciente-options').style.display = 'block';  
        } else if (username === 'programador') {
            document.getElementById('programador-options').style.display = 'block';
        } else if (username === 'medico') {
            // Aquí iría la lógica para verificar si el médico tiene pacientes
            const tienePacientes = true; // Esto se cambiará cuando se implemente la base de datos

            if (tienePacientes) {
                document.getElementById('medico-options').style.display = 'block';
            } else {
                alert('No hay citas por el momento.');
                document.getElementById('login-section').style.display = 'block';
            }
        }
    } else {
        messageElement.textContent = 'Usuario o contraseña incorrectos';
        messageElement.style.color = 'red';
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

function submitCrearHCForm() {
    const form = document.getElementById('crearHCForm');
    if (form.checkValidity()) {
        alert('Historia Clínica creada');
        closeCrearHCModal();
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

function buscarHC() {
    const cedula = document.getElementById('cedulaConsultar').value;
    if (cedula === "") {
        alert('Por favor, ingrese el número de cédula');
    } else {
        // Aquí iría la lógica para verificar si el HC existe en la base de datos
        // Como aún no está implementado, siempre diremos que no existe
        const hcExists = false;

        if (hcExists) {
            document.getElementById('hcActions').style.display = 'block';
        } else {
            alert('No existe ningún historial clínico asociado');
            closeConsultarHCModal();
        }
    }
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
