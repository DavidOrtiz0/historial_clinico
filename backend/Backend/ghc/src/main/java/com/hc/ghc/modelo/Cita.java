package com.hc.ghc.modelo;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cita")
public class Cita {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name="pk_id_cita") private Long pk_id_cita;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY) @JoinColumn(name="fk_paciente") private Paciente fk_paciente;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY) @JoinColumn(name="fk_programadorCitas") private Programadordecitas fk_programadorCitas;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY) @JoinColumn(name="fk_medico") private Medico fk_medico;
    @Column(name="fecha") private LocalDate fecha;
    @Column(name="hora") private LocalTime hora;
    @Column(name="tipo_de_cita") private String tipo_de_cita;

    public Cita(){ }

    public Cita(Paciente fk_paciente, Programadordecitas programadorCitas, Medico fk_medico, LocalDate fecha, LocalTime hora, String tipo_de_cita)
    {
        this.fk_paciente = fk_paciente;
        this.fk_programadorCitas = programadorCitas;
        this.fk_medico = fk_medico;
        this.fecha = fecha;
        this.hora = hora;
        this.tipo_de_cita = tipo_de_cita;
    }

    //Getters
    public Long getPk_id_cita() { return this.pk_id_cita; }
    public Paciente getFk_paciente() { return this.fk_paciente; }
    public Programadordecitas getProgramadorCitas() { return this.fk_programadorCitas; }
    public Medico getFk_medico() { return this.fk_medico; }
    public LocalDate getFecha() { return this.fecha; }
    public LocalTime getHora() { return this.hora; }
    public String getTipo_de_cita() { return this.tipo_de_cita; }

    //Setters
    public void setPk_id_cita(Long pk_id_cita) { this.pk_id_cita = pk_id_cita; }
    public void setFk_paciente(Paciente fk_paciente) { this.fk_paciente = fk_paciente; }
    public void setFk_programadorCitas(Programadordecitas fk_programadorCitas) { this.fk_programadorCitas = fk_programadorCitas;}
    public void setFk_medico(Medico fk_medico) { this.fk_medico = fk_medico; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha;}
    public void setHora(LocalTime hora) { this.hora = hora; }
    public void setTipo_de_cita(String tipo_de_cita) { this.tipo_de_cita = tipo_de_cita; }

}
