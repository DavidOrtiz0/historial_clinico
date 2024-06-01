package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "administrador")

public class administrador 
{

    @Id @Column(name = "pk_id_administrador") private Integer pk_id_administrador;
    @Column(name = "nombre") private String nombre;
    @Column(name = "usuario") private String usuario;
    @Column(name = "contrasena") private String contrasena;

    public administrador(){ }

    public administrador(Integer pk_id_administrador, String nombre, String usuario, String contrasena)
    {
        this.pk_id_administrador = pk_id_administrador;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    //Getters
    public Integer getPk_id_administrador(){ return this.pk_id_administrador; }
    public String getNombre(){ return this.nombre; }
    public String getUsuario(){ return this.usuario; }
    public String getContrasena(){ return this.contrasena; }

    //Setters
    public void setPk_id_administrador(Integer pk_id_administrador){ this.pk_id_administrador = pk_id_administrador; }
    public void setNombre(String nombre){ this.nombre = nombre; }
    public void setUsuario(String usuario){ this.usuario = usuario; }
    public void setContrasena(String contrasena){ this.contrasena = contrasena; }
}
