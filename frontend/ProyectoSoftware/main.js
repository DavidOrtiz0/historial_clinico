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

//para cita con medico como tal
const medicamentos = [
    'Paracetamol', 'Ibuprofeno', 'Amoxicilina', 'Ciprofloxacino', 'Omeprazol',
    'Metformina', 'Atenolol', 'Losartan', 'Simvastatina', 'Levotiroxina',
    'Prednisona', 'Furosemida', 'Alprazolam', 'Tramadol', 'Gabapentina',
    'Cetirizina', 'Loratadina', 'Azitromicina', 'Clonazepam', 'Metronidazol',
    'Benzonatato', 'Escitalopram', 'Fluoxetina', 'Sertralina', 'Venlafaxina',
    'Duloxetina', 'Bupropion', 'Lamotrigina', 'Quetiapina', 'Aripiprazol'
];

// Cargar los medicamentos en el menú desplegable
const medicamentosSelect = document.getElementById('medicamentos');
medicamentos.forEach(medicamento => {
    const option = document.createElement('option');
    option.value = medicamento;
    option.textContent = medicamento;
    medicamentosSelect.appendChild(option);
});

// Abrir el modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

// Cerrar el modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Guardar información de la cita
function guardarInformacion(event) {
    event.preventDefault();
    // Aquí puedes añadir la lógica para guardar la información en la base de datos
    alert('Información de cita guardada y actualizada');
    closeModal();
}

// Constante para los departamentos y sus municipios del archivo colombia.json
const colombiaData = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Santafé de Antioquia", "Anza", "Apartadó", "Arboletes", "Argelia", "Armenia", "Barbosa", "Belmira", "Bello", "Betania", "Betulia", "Ciudad Bolívar", "Briceño", "Buriticá", "Cáceres", "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "El Carmen de Viboral", "Carolina del Príncipe", "Caucasia", "Chigorodó", "Cisneros", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías", "Ebéjico", "El Bagre", "Entrerrios", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania", "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo", "Marinilla", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peñol", "Peque", "Pueblorrico", "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de Montaña", "San Juan de Urabá", "San Luis", "San Pedro de Urabá", "San Pedro de los Milagros", "San Rafael", "San Roque", "San Vicente Ferrer", "Santa Bárbara", "Santa Rosa de Osos", "Santo Domingo", "El Santuario", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá", "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia", "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Yondó", "Zaragoza"],
    "Arauca": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"],
    "Atlántico": ["Barranquilla", "Baranoa", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela", "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad", "Suan", "Tubará", "Usiacurí"],
    "Bolívar": ["Cartagena", "Achí", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Calamar", "Cantagallo", "Cicuco", "Córdoba", "Clemencia", "El Carmen de Bolívar", "El Guamo", "El Peñón", "Hatillo de Loba", "Magangué", "Mahates", "Margarita", "María La Baja", "Montecristo", "Mompós", "Morales", "Norosí", "Pinillos", "Regidor", "Río Viejo", "San Cristóbal", "San Estanislao", "San Fernando", "San Jacinto", "San Jacinto del Cauca", "San Juan Nepomuceno", "San Martín de Loba", "San Pablo", "Santa Catalina", "Santa Rosa", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio", "Turbaco", "Turbaná", "Villanueva", "Zambrano"],
    "Boyacá": ["Tunja", "Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chiscas", "Chita", "Chitaraque", "Chivatá", "Ciénega", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubará", "Cucaita", "Cuítiva", "Chíquiza", "Chivor", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantivá", "Gameza", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano", "Jericó", "Labranzagrande", "La Capilla", "La Uvita", "Villa de Leyva", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí", "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz de Río", "Pesca", "Pisba", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón", "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santana", "Santa María", "Santa Rosa de Viterbo", "Santa Sofía", "Sativanorte", "Sativasur", "Siachoque", "Soatá", "Socotá", "Socha", "Sogamoso", "Somondoco", "Sora", "Sotaquirá", "Soracá", "Susacón", "Sutamarchán", "Sutatenza", "Tasco", "Tenza", "Tibaná", "Tibasosa", "Tinjacá", "Tipacoque", "Toca", "Togüí", "Tópaga", "Tota", "Tununguá", "Turmequé", "Tuta", "Tutazá", "Úmbita", "Ventaquemada", "Viracachá", "Zetaquira"],
    "Caldas": ["Manizales", "Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samaná", "San José", "Supía", "Victoria", "Villamaría", "Viterbo"],
    "Caquetá": ["Florencia", "Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "La Montañita", "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"],
    "Casanare": ["Yopal", "Aguazul", "Chameza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva"],
    "Cauca": ["Popayán", "Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia", "Guachené", "Guapí", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla", "Páez", "Patía", "Piamonte", "Piendamó", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santander de Quilichao", "Santa Rosa", "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica"],
    "Cesar": ["Valledupar", "Aguachica", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso", "Gamarra", "González", "La Gloria", "La Jagua de Ibirico", "Manaure Balcón del Cesar", "Pailitas", "Pelaya", "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque"],
    "Chocó": ["Quibdó", "Acandí", "Alto Baudó", "Atrato", "Bagadó", "Bahía Solano", "Bajo Baudó", "Bojayá", "Cantón de San Pablo", "Cértegui", "Condoto", "El Carmen de Atrato", "El Litoral del San Juan", "Istmina", "Jurado", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan", "Nóvita", "Nuquí", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unguía", "Unión Panamericana"],
    "Córdoba": ["Montería", "Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "Lorica", "Los Córdobas", "Momil", "Montelíbano", "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purísima", "Sahagún", "San Andrés Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San José de Uré", "San Pelayo", "Tierralta", "Tuchín", "Valencia"],
    "Cundinamarca": ["Bogotá", "Agua de Dios", "Albán", "Anapoima", "Anolaima", "Arbeláez", "Beltrán", "Bituima", "Bojacá", "Cabrera", "Cachipay", "Cajicá", "Caparrapí", "Cáqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua", "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fómeque", "Fosca", "Funza", "Fúquene", "Fusagasugá", "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita", "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña", "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima", "Nocaima", "Venecia", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Río Seco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque", "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Vergara", "Vianí", "Villagómez", "Villapinzón", "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"],
    "Guainía": ["Inírida", "Barrancominas", "Mapiripana", "San Felipe", "Puerto Colombia", "La Guadalupe", "Cacahual", "Pana Pana", "Morichal"],
    "Guaviare": ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores"],
    "Huila": ["Neiva", "Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elías", "Garzón", "Gigante", "Guadalupe", "Hobo", "Iquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Oporapa", "Paicol", "Palermo", "Palestina", "Pital", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"],
    "La Guajira": ["Riohacha", "Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", "Manaure", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"],
    "Magdalena": ["Santa Marta", "Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Ciénaga", "Concordia", "El Banco", "El Piñón", "El Retén", "Fundación", "Guamal", "Nueva Granada", "Pedraza", "Pijiño del Carmen", "Pivijay", "Plato", "Puebloviejo", "Remolino", "Sabanas de San Ángel", "Salamina", "San Sebastián de Buenavista", "San Zenón", "Santa Ana", "Santa Bárbara de Pinto", "Sitionuevo", "Tenerife", "Zapayán", "Zona Bananera"],
    "Meta": ["Villavicencio", "Acacías", "Barranca de Upía", "Cabuyaro", "Castilla La Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "Mapiripán", "Mesetas", "La Macarena", "La Uribe", "Lejanías", "Puerto Concordia", "Puerto Gaitán", "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Martín", "Vistahermosa"],
    "Nariño": ["Pasto", "Albán", "Aldana", "Ancuya", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón", "Consacá", "Contadero", "Córdoba", "Cuaspud", "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El Tablón de Gómez", "El Tambo", "Francisco Pizarro", "Funes", "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión", "Leiva", "Linares", "Los Andes", "Magüí", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Policarpa", "Potosí", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "Sandoná", "San Bernardo", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer"],
    "Norte de Santander": ["Cúcuta", "Abrego", "Arboledas", "Bochalema", "Bucarasica", "Cácota", "Cachirá", "Chinácota", "Chitagá", "Convención", "Cucutilla", "Durania", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa de Belén", "Labateca", "Los Patios", "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar de Las Palmas", "San Calixto", "San Cayetano", "Santiago", "Sardinata", "Silos", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"],
    "Putumayo": ["Mocoa", "Colón", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Leguízamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón"],
    "Quindío": ["Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"],
    "Risaralda": ["Pereira", "Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Mistrató", "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"],
    "San Andrés y Providencia": ["San Andrés", "Providencia"],
    "Santander": ["Bucaramanga", "Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Cabrera", "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción", "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Encino", "Enciso", "Florián", "Floridablanca", "Galán", "Gambita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato", "Jesús María", "Jordán", "La Belleza", "Landázuri", "La Paz", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", "San Gil", "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón", "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vetas", "Villanueva", "Zapatoca"],
    "Sucre": ["Sincelejo", "Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Palmito", "Sampués", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Sincé", "Sucre", "Tolú", "Tolú Viejo"],
    "Tolima": ["Ibagué", "Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "Espinal", "Falan", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"],
    "Valle del Cauca": ["Cali", "Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Bugalagrande", "Caicedonia", "Calima", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí", "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro", "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"],
    "Vaupés": ["Mitú", "Carurú", "Pacoa", "Taraira", "Papunaua", "Yavaraté"],
    "Vichada": ["Puerto Carreño", "La Primavera", "Santa Rosalía", "Cumaribo"]
};

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

// Funciones para manejar el modal de crear paciente
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
        closeCrearHCModal();
        openAssignUserModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

function cancelCrearHCForm() {
    closeCrearHCModal();
}

// Funciones para manejar el modal de asignar usuario y contraseña
function openAssignUserModal() {
    document.getElementById('assignUserModal').style.display = 'block';
}

function closeAssignUserModal() {
    document.getElementById('assignUserModal').style.display = 'none';
    document.getElementById('assignUserForm').reset();
}

function submitAssignUserForm() {
    const form = document.getElementById('assignUserForm');
    if (form.checkValidity()) {
        alert('Información guardada exitosamente');
        closeAssignUserModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

// Función para abrir el modal de crear Medico
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

// Funciones para manejar la consulta de HC
/*const cedulaDefinida = '123456786';
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
        const hcExists = (cedula === cedulaDefinida);

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
}*/

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
/*function openProgramarCitaModal() {
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
}*/

// Funciones para manejar el modal de programar cita
// Función para agregar una nueva fila a la tabla de citas programadas con checkbox
function agregarFilaCitaProgramada(tipoConsulta, fechaHora, paciente, medico) {
    const table = document.getElementById('tablaCitasProgramadas').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const checkboxCell = newRow.insertCell(0);
    checkboxCell.innerHTML = '<input type="checkbox">';
    newRow.insertCell(1).innerText = tipoConsulta;
    newRow.insertCell(2).innerText = fechaHora;
    newRow.insertCell(3).innerText = paciente;
    newRow.insertCell(4).innerText = medico;
}

// Función para enviar el formulario y agregar una cita programada
function submitProgramarCitaForm() {
    const form = document.getElementById('programarCitaForm');
    if (form.checkValidity()) {
        const tipoConsulta = document.getElementById('tipoConsulta').value;
        const fechaHora = document.getElementById('fechaHora').value;
        const paciente = document.getElementById('paciente').value;
        const medico = document.getElementById('medico').value;

        // Agregar la nueva cita a la tabla
        agregarFilaCitaProgramada(tipoConsulta, fechaHora, paciente, medico);

        alert('Cita programada');
        closeProgramarCitaModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

// Función para abrir el modal de programar cita
function openProgramarCitaModal() {
    document.getElementById('programarCitaModal').style.display = 'block';
}

// Función para cerrar el modal de programar cita y restablecer el formulario
function closeProgramarCitaModal() {
    document.getElementById('programarCitaModal').style.display = 'none';
    document.getElementById('programarCitaForm').reset();
}

// Función para cancelar el formulario de programar cita
function cancelProgramarCitaForm() {
    closeProgramarCitaModal();
}

// Funciones para manejar la consulta de HC
const cedulaDefinida = '123456786';
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
        const hcExists = (cedula === cedulaDefinida);
        if (hcExists) {
            document.getElementById('hcActions').style.display = 'block';
        } else {
            alert('No existe ningún historial clínico asociado');
            closeConsultarHCModal();
        }
    }
}