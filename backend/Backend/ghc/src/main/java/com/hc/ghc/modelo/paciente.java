package com.hc.ghc.modelo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "paciente")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Paciente {
    @Id @Column(name = "pk_cedula")private Long pk_cedula;
    @Column(name = "tipo_de_cedula")private String tipo_de_cedula;
    @Column(name = "lugar_de_expedicion")private String lugar_de_expedicion;
    @Column(name = "nombre")private String nombre;
    @Column(name = "primer_apellido")private String primer_apellido;
    @Column(name = "segundo_apellido")private String segundo_apellido;
    @Column(name="fecha_de_nacimiento")private Date fecha_de_nacimiento;
    @Column(name = "tipo_de_sangre")private String tipo_de_sangre;
    @Column(name = "telefono")private String telefono;
    @Column(name = "correo")private String correo;
    @Column(name = "direccion")private String direccion;
    @Column(name = "alergias")private String alergias;
    @Column(name = "nombre_ce")private String nombre_ce;
    @Column(name = "apellido_ce")private String apellido_ce;
    @Column(name = "telefono_ce")private String telefono_ce;
    @Column(name = "usuario")private String usuario;
    @Column(name = "contrasena")private String contrasena;

    public Paciente(){}
    public Paciente(Long pk_cedula, String tipo_de_cedula, String lugar_de_expedicion, String nombre, String primer_apellido, String segundo_apellido, Date fecha_de_nacimiento, String tipo_de_sangre, String telefono, String correo, String direccion, String alergias, String nombre_ce, String apellido_ce, String telefono_ce, String usuario, String contrasena)
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

    //Gettes
    public String getUsuario() { return this.usuario; }
    public String getContrasena() { return this.contrasena; }
    public Long getPk_cedula() { return this.pk_cedula; }
    public String getTipo_de_cedula() { return this.tipo_de_cedula; }
    public String getLugarExpedicion() { return this.lugar_de_expedicion; }
    public String getNombre() { return this.nombre; }
    public String getPrimer_apellido() { return this.primer_apellido; }
    public String getSegundo_apellido() { return this.segundo_apellido; }
    public Date getFecha_de_nacimiento() { return this.fecha_de_nacimiento; }
    public String getTipo_de_sangre() { return this.tipo_de_sangre; }
    public String getTelefono() { return this.telefono;}
    public String getCorreo() { return this.correo; }
    public String getDireccion() { return this.direccion; }
    public String getAlergias() { return this.alergias; }
    public String getNombre_ce() { return this.nombre_ce; }
    public String getApellido_ce() { return this.apellido_ce; }
    public String getTelefono_ce() { return this.telefono_ce; }
    // Setters
    public void setPk_cedula(Long pk_cedula) { this.pk_cedula = pk_cedula; }
    public void setLugar_de_expedicion(String lugar_de_expedicion) { this.lugar_de_expedicion = lugar_de_expedicion; }
    public void setTipo_de_cedula(String tipo_de_cedula) { this.tipo_de_cedula = tipo_de_cedula; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setPrimer_apellido(String primer_apellido) { this.primer_apellido = primer_apellido; }
    public void setSegundo_apellido(String segundo_apellido) { this.segundo_apellido = segundo_apellido; }
    public void setFecha_de_nacimiento(Date fecha_de_nacimiento) {this.fecha_de_nacimiento = fecha_de_nacimiento; }
    public void setTipo_de_sangre(String tipo_de_sangre) { this.tipo_de_sangre = tipo_de_sangre; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public void setCorreo(String correo) { this.correo = correo; }
    public void setDireccion(String direccion) { this.direccion = direccion; }
    public void setAlergias(String alergias) { this.alergias = alergias; }
    public void setNombre_ce(String nombre_ce) { this.nombre_ce = nombre_ce; }
    public void setApellido_ce(String apellido_ce) { this.apellido_ce = apellido_ce; }
    public void setTelefono_ce(String telefono_ce) { this.telefono_ce = telefono_ce; }
    
}
