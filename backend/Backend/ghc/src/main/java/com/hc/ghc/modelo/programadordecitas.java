package com.hc.ghc.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "programadordecitas")
public class programadordecitas 
{

    @Id @Column(name = "pk_id_programadordecitas") private Integer pk_id_programadordecitas;
    @Column(name = "nombre") private String nombre;
    @Column(name = "usuario") private String usuario;
    @Column(name = "contrasena") private String contrasena;

    public programadordecitas(){}

    public programadordecitas(Integer pk_id, String nombre, String usuario, String contrasena){
        this.pk_id_programadordecitas = pk_id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    //Getters
    public String getUsuario(){ return this.usuario; }
    public String getContrasena(){ return this.contrasena; }
    public Integer getPk_id_programadordecitas() { return this.pk_id_programadordecitas; }
    public String getNombre() { return this.nombre; }

    //Setters
    public void setUsuario(String nombre) {  this.nombre = nombre; }
    public void setContrasena(String contrasena) { this.contrasena = contrasena; }
    public void setPk_id_programadordecitas(Integer pk_id_programadordecitas) { this.pk_id_programadordecitas = pk_id_programadordecitas; }
    public void setNombre(String nombre) { this.nombre = nombre; }

}
