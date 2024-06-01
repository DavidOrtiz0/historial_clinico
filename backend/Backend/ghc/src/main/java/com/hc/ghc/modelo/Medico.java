package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medico")
public class Medico {
    @Id
    @Column(name = "pk_id")
    private Integer pk_id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "especializacion")
    private String especializacion;

    public Medico(){ }

    public Medico(Integer pk_id, String nombre, String usuario, String contrasena, String especializacion){
        this.pk_id = pk_id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.especializacion = especializacion;
    }

    public String Getusuario(){ return this.usuario; }
    public String Getcontrasena(){ return this.contrasena; }
}
