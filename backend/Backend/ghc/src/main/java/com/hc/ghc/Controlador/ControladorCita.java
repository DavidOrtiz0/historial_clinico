package com.hc.ghc.Controlador;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.Cita;
import com.hc.ghc.modelo.Medico;
import com.hc.ghc.modelo.Paciente;
import com.hc.ghc.modelo.Programadordecitas;
import com.hc.ghc.repositorio.RepositorioAdministrador;
import com.hc.ghc.repositorio.RepositorioCita;
import com.hc.ghc.repositorio.RepositorioMedico;
import com.hc.ghc.repositorio.RepositorioPaciente;
import com.hc.ghc.repositorio.RepositorioProgramadorDeCitas;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/cita")
@CrossOrigin(origins = "*")
public class ControladorCita {

    @Autowired RepositorioCita repositorioCita;
    @Autowired RepositorioMedico repositorioMedico;
    @Autowired RepositorioPaciente repositorioPaciente;
    @Autowired RepositorioProgramadorDeCitas repositorioProgramadorDeCitas;


    @PostMapping("/guardar")
    public ResponseEntity<Boolean> Guardar(@RequestBody Map<String, Object> entity) {
        try
        {
        Map<String, Object> pacienteMap = (Map<String, Object>) entity.get("fk_paciente");
        Map<String, Object> medicoMap = (Map<String, Object>) entity.get("fk_medico");
        Map<String, Object> programadorCitasMap = (Map<String, Object>) entity.get("fk_programadorCitas");
    
        Long pacienteId = Long.valueOf(pacienteMap.get("pk_id_paciente").toString());
        Long medicoId = Long.valueOf(medicoMap.get("pk_id_medico").toString());
        Long programadorCitasId = Long.valueOf(programadorCitasMap.get("pk_id_programadorCitas").toString());

        Paciente paciente = repositorioPaciente.findById(pacienteId).orElseThrow();
        Medico medico = repositorioMedico.findById(medicoId).orElseThrow();
        Programadordecitas programadorCitas = repositorioProgramadorDeCitas.findById(programadorCitasId).orElseThrow();
    
        LocalDate fecha = LocalDate.parse(entity.get("fecha").toString());
        LocalTime hora = LocalTime.parse(entity.get("hora").toString());
        String tipo_de_cita = entity.get("tipo_de_cita").toString();

        Cita cita = new Cita(paciente, programadorCitas, medico, fecha, hora, tipo_de_cita);

        repositorioCita.save(cita);
        return ResponseEntity.ok(true);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(false);
        }
        
    }

    @PostMapping("/obtener")
    public List<Cita> postMethodName(@RequestBody Map<String, Long> dato) {
        Long cedula = dato.get("pk_cedula");
        System.out.println("La cedula es: " + cedula);
        List<Cita> citas = repositorioCita.CitasPaciente(cedula);
        if (!citas.isEmpty()) { System.out.println("las citas son: " + citas); return citas; } else { return null;}
    }
    
    
    
}
