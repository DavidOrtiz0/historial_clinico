package com.hc.ghc.Controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.Paciente;
import com.hc.ghc.repositorio.RepositorioPaciente;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/paciente")
@CrossOrigin(origins = "*")
public class ControladorPaciente {
    
    @Autowired RepositorioPaciente repositoriopaciente;

    @PostMapping("/sesion")
    public ResponseEntity<Map<String, Object>> iniciarSesion(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;
        Paciente pacienteEncontrado = null;
        List<Paciente> pacientes = repositoriopaciente.findAll();

        for(Paciente paciente: pacientes)
        {
            if (paciente.getUsuario().equals(usuario)  && paciente.getContrasena().equals(contrasena) )
                respuesta = true;
                pacienteEncontrado = paciente;
                pacienteEncontrado.setUsuario(null);
                pacienteEncontrado.setContrasena(null);
            
        }

        Map<String, Object> resultado = new HashMap<>();
        resultado.put("confirmacion", respuesta);
        resultado.put("actor", pacienteEncontrado);
        return ResponseEntity.ok(resultado);
    }

    @PostMapping("/guardar")
    public boolean guardarPaciente(@RequestBody Paciente entity) {
        boolean datosCompletos = (entity != null);

        if (datosCompletos) {
            repositoriopaciente.save(entity);
            return true;
        } else {
            System.out.println("Datos incompletos.");
            return false;
        }
    }
    
    @PostMapping("/obtener")
    public Paciente obtenerPaciente(@RequestBody Map<String, Integer> param) {
        Long cedula = (long) param.get("pk_cedula");
        Paciente Paciente = repositoriopaciente.getReferenceById(cedula);
        if (Paciente != null) {
            return Paciente;
        } else {
            return null;
        }
    }
    
    @PostMapping("/consultar")
    public boolean verificarPaciente(@RequestBody Map<String, Integer> param) {
        Long cedula = (long) param.get("pk_cedula");
        Paciente Paciente = repositoriopaciente.getReferenceById(cedula);
        if (Paciente != null) {
            return true;
        } else {
            return false;
        }
    }
    
}
