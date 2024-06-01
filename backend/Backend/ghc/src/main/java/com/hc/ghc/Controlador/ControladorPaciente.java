package com.hc.ghc.Controlador;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.paciente;
import com.hc.ghc.repositorio.RepositorioPaciente;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/paciente")
@CrossOrigin(origins = "*")
public class ControladorPaciente {
    
    @Autowired RepositorioPaciente repositoriopaciente;

    @PostMapping("/sesion")
    public boolean obtener(@RequestBody Map<String, Object> sesion) {
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
    public boolean guardar(@ModelAttribute paciente entity) {
        System.out.println(entity.getUsuario());
        repositoriopaciente.save(entity);
        return true;

        /*boolean datosCompletos = 
        (
            entity.getPk_cedula() != null &&
            entity.getTipo_de_cedula() != null &&
            entity.getLugarExpedicion() != null &&
            entity.getNombre() != null &&
            entity.getPrimerApellido() != null &&
            entity.getSegundoApellido() != null &&
            entity.getFechaNacimiento() != null &&
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
        
    } else {
        System.out.println("Datos incompletos.");
        return false;
    }*/
    }
    
    
}
