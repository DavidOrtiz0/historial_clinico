package com.hc.ghc.modelo;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cita")
public class Cita {
    
    @Id @Column(name="pk_id_cita") private Long pk_id_cita;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn private Paciente paciente;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn private Programadordecitas programadordecitas;
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn private Medico medico;
    @Column(name="fecha") private Date fecha;
    @Column(name="hora") private Time hora;
    @Column(name="tipo_de_cita") private String tipo_de_cita;

    public Cita(){}

    public Cita(Long pk_id_cita, Paciente paciente, Programadordecitas programadordecitas, Medico medico, Date fecha, Time hora, String tipo_de_cita)
    {
        this.pk_id_cita = pk_id_cita;
        this.paciente = paciente;
        this.programadordecitas = programadordecitas;
        this.medico = medico;
        this.fecha = fecha;
        this.hora = hora;
        this.tipo_de_cita = tipo_de_cita;
    }

    //Getters
    public Long getPk_id_cita() { return this.pk_id_cita; }
    public Paciente getPaciente() { return this.paciente; }
    public Programadordecitas getProgramadordecitas() { return this.programadordecitas; }
    public Medico getMedico() { return this.medico; }
    public Date getFecha() { return this.fecha; }
    public Time getHora() { return this.hora; }
    public String getTipo_de_cita() { return this.tipo_de_cita; }

    //Setters
    public void setPk_id_cita(Long pk_id_cita) { this.pk_id_cita = pk_id_cita; }
    public void set(Paciente paciente) { this.paciente = paciente; }
    public void set(Programadordecitas programadordecitas) { this.programadordecitas = programadordecitas;}
    public void set(Medico medico) { this.medico = medico; }
    public void set(Date fecha) { this.fecha = fecha;}
    public void set(Time hora) { this.hora = hora; }
    public void set(String tipo_de_cita) { this.tipo_de_cita = tipo_de_cita; }

}
