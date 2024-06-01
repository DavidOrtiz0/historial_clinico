package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "administrador")

public class administrador {
    @Id
    @Column(name = "pk_id_administrador")
    private Integer pk_id_administrador;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "contrasena")
    private String contrasena;

    public administrador(){ }

    public administrador(Integer pk_id_administrador, String nombre, String usuario, String contrasena)
    {
        this.pk_id_administrador = pk_id_administrador;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    public Integer Getpk_id(){ return this.pk_id_administrador; }

    public void Setpk_id(Integer pk_id_administrador){ this.pk_id_administrador = pk_id_administrador; }

    public String Getnombre(){ return this.nombre; }

    public void Setnombre(String nombre){ this.nombre = nombre; }

    public String Getusuario(){ return this.usuario; }

    public void Setusuario(String usuario){ this.usuario = usuario; }

    public String Getcontrasena(){ return this.contrasena; }

    public void Setcontrasena(String contrasena){ this.contrasena = contrasena; }
}
