package com.hc.ghc.Controlador;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.paciente;
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
    public boolean iniciarSesion(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;

        List<paciente> pacientes = repositoriopaciente.findAll();
        for(paciente pacient: pacientes){
            if (pacient.getUsuario().equals(usuario)  && pacient.getContrasena().equals(contrasena) ){
                System.out.println(pacient.getContrasena());
                respuesta = true;
            }
        }

        return respuesta;
    }

    @PostMapping("/guardar")
    public boolean guardarPaciente(@RequestBody paciente entity) {
        boolean datosCompletos = 
        (
            entity.getPk_cedula() != null &&
            entity.getTipo_de_cedula() != null &&
            entity.getLugarExpedicion() != null &&
            entity.getNombre() != null &&
            entity.getPrimer_apellido() != null &&
            entity.getSegundo_apellido() != null &&
            entity.getFecha_de_nacimiento() != null &&
            entity.getTipo_de_sangre() != null &&
            entity.getTelefono() != null &&
            entity.getCorreo() != null &&
            entity.getDireccion() != null &&
            entity.getAlergias() != null &&
            entity.getNombre_ce() != null &&
            entity.getApellido_ce() != null &&
            entity.getTelefono_ce() != null &&
            entity.getUsuario() != null &&
            entity.getContrasena() != null
        );

    if (datosCompletos) {
        repositoriopaciente.save(entity);
        return true;
    } else {
        System.out.println("Datos incompletos.");
        return false;
    }
    }
    
    @PostMapping("/consultar")
    public paciente obtenerPaciente(@RequestBody Map<String, Integer> param) {
        Integer cedula = (Integer) param.get("pk_cedula");
        System.out.println(cedula);
        paciente Paciente = repositoriopaciente.getReferenceById(cedula);
        if (Paciente != null) {
            return Paciente;
        } else {
            return null;
        }
    }
    
    
}
