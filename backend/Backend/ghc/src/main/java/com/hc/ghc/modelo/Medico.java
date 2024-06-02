package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medico")
public class Medico {
    @Id @Column(name = "pk_id_medico") private Long pk_id_medico;
    @Column(name = "nombre") private String nombre;
    @Column(name = "usuario") private String usuario;
    @Column(name = "contrasena") private String contrasena;
    @Column(name = "especializacion")private String especializacion;

    public Medico(){ }

    public Medico(Long pk_id_medico, String nombre, String usuario, String contrasena, String especializacion){
        this.pk_id_medico = pk_id_medico;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.especializacion = especializacion;
    }

    //Getters
    public String getUsuario(){ return this.usuario; }
    public String getContrasena(){ return this.contrasena; }
    public String getNombre() { return this.nombre; }
    public Long getPk_id_medico() { return this.pk_id_medico; }

    //Setters
    public void setUsuario(String usuario) { this.usuario = usuario; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setPk_id_programadordecitas(Long pk_id_medico) { this.pk_id_medico = pk_id_medico; }

}
