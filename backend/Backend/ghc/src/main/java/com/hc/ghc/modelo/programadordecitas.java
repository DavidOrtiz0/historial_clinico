package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "programadordecitas")
public class programadordecitas {
    @Id
    @Column(name = "pk_id")
    private Integer pk_id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "contrasena")
    private String contrasena;

    public programadordecitas(){}

    public programadordecitas(Integer pk_id, String nombre, String usuario, String contrasena){
        this.pk_id = pk_id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    public String Getusuario(){ return this.usuario; }
    public String Getcontrasena(){ return this.contrasena; }
}
