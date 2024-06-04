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

    setUsuario(params) {
        this.usuario = params;
    }

    setContrasena(param){
        this.contrasena = param;
    }
}

class Medico
{
    constructor(nombre,especializacion, usuario, contrasena )
    {
        this.especializacion = especializacion;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        
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
let datos_paciente = {};
function submitCrearHCForm() {
    const form = document.getElementById('crearHCForm');
    if (form.checkValidity()) {

        const Formulario = new FormData(form);
        data = {};
        datos_paciente = {};
        for(let [key, value] of Formulario.entries()){
            datos_paciente[key] = value;
        }
        
        datos_paciente.lugar_de_expedicion = `${document.getElementById("departamento").value}- ${ document.getElementById("municipio").value}`;
          closeCrearHCModal();
          openAssignUserModal();
    } else {
        alert('Por favor, complete todos los campos obligatorios');
    }
}

function openAssignUserModal() {
    document.getElementById('assignUserModal').style.display = 'block';

}

function closeAssignUserModal() {
    document.getElementById('assignUserModal').style.display = 'none';
    document.getElementById('assignUserForm').reset();
}

async function submitAssignUserForm() {
    const usuario = document.getElementById("usuarioAsignar").value;
    const contrasena = document.getElementById("contrasenaAsignar").value;

    const pacient = new Paciente(
        parseInt(datos_paciente.numeroDocumento),
        datos_paciente.tipoDocumento,
        datos_paciente.lugar_de_expedicion,
        datos_paciente.nombre,
        datos_paciente.primerApellido,
        datos_paciente.segundoApellido,
        datos_paciente.fechaNacimiento,
        datos_paciente.tipoSangre,
        datos_paciente.numeroCelular,
        datos_paciente.correo,
        datos_paciente.direccion,
        datos_paciente.Alergias,
        datos_paciente.nombreEmergencia,
        datos_paciente.apellidoEmergencia,
        datos_paciente.numeroCelularEmergencia,
        usuario,
        contrasena
    );

    url = 'http://localhost:8080/paciente/guardar';
        let respuesta = peticion(url,pacient);
        respuesta.then(function(resultado)
        {
            using = resultado;
            if(resultado === true){
                openAssignUserModal();
                alert('Paciente creado');
                closeAssignUserModal();
                }
        }).catch(function(error){alert('Algo salio mal', error);});
}

function cancelCrearHCForm() {
    closeCrearHCModal();
}

// Función para abrir el modal de crear medico
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
        const nombre = document.getElementById("nombreMedico").value;
        const especializacion = document.getElementById("especialidadMedico").value;
        const usuario = document.getElementById("usuarioMedico").value;
        const contrasena = document.getElementById("contrasenaMedico").value;
        url='http://localhost:8080/medico/guardar';

        const medico = new Medico (
            nombre,
            especializacion,
            usuario,
            contrasena
        );
        console.log(nombre, especializacion, usuario, contrasena);

        peticion(url, medico)
        .then(function(response){
            if(response != false){
                alert('medico creado');
                closeCrearUsuarioModal()
            }else {alert("Hubo un error inesperado")}
        }).catch(function(error){
            console.error("el error es: ", error);
        });
    
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
function openConsultarHCModal() {
    document.getElementById('consultarHCModal').style.display = 'block';
}

function closeConsultarHCModal() {
    document.getElementById('consultarHCModal').style.display = 'none';
    document.getElementById('consultarHCForm').reset();
    document.getElementById('hcActions').style.display = 'none';
}

let citas;
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
                        //console.log(resultado);
                        citas = resultado;
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
   url = 'http://localhost:8080/cita/eliminar';
   for (let i = 0; i < citas.length; i++) {

    peticion(url,citas[i])
    .then(function(response){
        console.log("cita eliminada: ", response);
    }).catch(function(error){
        console.error("el error al eliminar es: ", error);
    })
}
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
            const cita = {
                fk_paciente: {pk_id_paciente:Paciente_cedula},
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
