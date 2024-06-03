CREATE DATABASE historial_clinico;
use historial_clinico;

-- Tabla Programador de Citas
CREATE TABLE programadordecitas (
    pk_id_programadordecitas BIGINT(10) PRIMARY KEY,
    nombre VARCHAR(10),
    usuario VARCHAR(10),
    contrasena VARCHAR(10)
);

-- Tabla Paciente
CREATE TABLE paciente (
    pk_cedula BIGINT(10) PRIMARY KEY,
    tipo_de_cedula VARCHAR(2),
    lugar_de_expedicion VARCHAR(10),
    nombre VARCHAR(10),
    primer_apellido VARCHAR(10),
    segundo_apellido VARCHAR(10),
    fecha_de_nacimiento DATE,
    tipo_de_sangre VARCHAR(4),
    telefono VARCHAR(10),
    correo VARCHAR(20),
    direccion VARCHAR(20),
    alergias VARCHAR(50),
	nombre_ce VARCHAR(10),
	apellido_ce VARCHAR(10),
	telefono_ce VARCHAR(10),
    usuario VARCHAR(10),
    contrasena VARCHAR(10)
);

-- Tabla Médico
CREATE TABLE medico (
    pk_id_medico BIGINT(10) PRIMARY KEY,
    nombre VARCHAR(10),
    usuario VARCHAR(10),
    contrasena VARCHAR(10),
    especializacion VARCHAR(12)
);

-- Tabla Administrador
CREATE TABLE administrador (
    pk_id_administrador BIGINT(10) PRIMARY KEY,
    nombre VARCHAR(10),
    usuario VARCHAR(10),
    contrasena VARCHAR(10)
);

-- Tabla Medicamento
CREATE TABLE medicamento (
    pk_registroinvima BIGINT(10) PRIMARY KEY,
    nombre VARCHAR(10),
    dosis VARCHAR(10),
    cantidad INT(3)
);

-- Tabla Examen
CREATE TABLE examen (
    pk_id_examen BIGINT(10) PRIMARY KEY,
    nombre VARCHAR(10),
    tipo VARCHAR(10)
);

-- Tabla Cita
CREATE TABLE cita (
    pk_id_cita BIGINT(10) PRIMARY KEY  AUTO_INCREMENT,
    fk_paciente BIGINT(10),
    fk_programadorCitas BIGINT(10),
    fk_medico BIGINT(10),
    fecha DATE,
    hora TIME,
    tipo_de_cita VARCHAR(10),
    FOREIGN KEY (fk_paciente) REFERENCES Paciente(pk_cedula),
    FOREIGN KEY (fk_programadorCitas) REFERENCES programadordecitas(pk_id_programadordecitas),
    FOREIGN KEY (fk_medico) REFERENCES medico(pk_id_medico)
);

-- Tabla Médico_Examen
CREATE TABLE medico_examen (
    pk_id_medico_examen BIGINT(10) PRIMARY KEY,
    fk_medico INT(10),
    fk_examen INT(10),
    FOREIGN KEY (fk_medico) REFERENCES medico(pk_id),
    FOREIGN KEY (fk_examen) REFERENCES examen(pk_id)
);

-- Tabla Médico_Medicamento
CREATE TABLE medico_medicamento (
    pk_id_medico_medicamento BIGINT(10) PRIMARY KEY,
    fk_medico INT(10),
    fk_medicamento INT(10),
    FOREIGN KEY (fk_medico) REFERENCES medico(pk_id),
    FOREIGN KEY (fk_medicamento) REFERENCES medicamento(pk_registroinvima)
);

INSERT INTO administrador(pk_id_administrador, nombre, usuario, contrasena)
VALUES(1, 'david', 'david','123');

SELECT * FROM administrador;

INSERT INTO medico(pk_id_medico,nombre,usuario,contrasena, especializacion)
VALUES(1, 'lesly', 'lesly', '000','general');

SELECT * FROM medico;

INSERT INTO paciente (pk_cedula, tipo_de_cedula, lugar_de_expedicion, nombre, primer_apellido, segundo_apellido, fecha_de_nacimiento, tipo_de_sangre, telefono, correo, direccion, alergias, nombre_ce, apellido_ce, telefono_ce, usuario, contrasena)
VALUES (1234567890, 'CC', 'Bogotá', 'Juan', 'Pérez', 'Gómez', '1990-01-01', 'A+', "3120003432", 'juan@example.com', 'Calle 123', 'Ninguna', 'María', 'Gómez', "3110002312", 'juanperez', 'c123');

SELECT * FROM paciente;
delete from paciente where pk_cedula = 111;

INSERT INTO programadordecitas (pk_id_programadordecitas,nombre,usuario,contrasena)
VALUES (1,'Ana','ana_user','ana_pass');

SELECT * FROM programadordecitas;

INSERT INTO Cita(pk_id_cita, fk_paciente, fk_programadorCitas, fk_medico, fecha, hora, tipo_de_cita)
VALUES(2, 123, 1, 1, '2024-11-15', '10:30:00', 'citaProgramada');
SELECT * FROM Cita;

update cita set fk_paciente = 123 where pk_id_cita = 1;