package com.hc.ghc.Controlador;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.Medico;
import com.hc.ghc.repositorio.RepositorioMedico;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/medico")
@CrossOrigin(origins = "*")

public class ControladorMedico {

     @Autowired RepositorioMedico repositorio_medico;

    @PostMapping("/sesion")
    public boolean obtener(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;

        List<Medico> medicos = repositorio_medico.findAll();

        for(Medico medico: medicos){
            if (medico.getUsuario().equals(usuario)  && medico.getContrasena().equals(contrasena) ){
                System.out.println(medico.getContrasena());
                respuesta = true;
            }
        }
        
        return respuesta;
    }

    @GetMapping("/obtener")
    public List<Medico> getMethodName() {
        List<Medico> medicos = repositorio_medico.findAll();
        return medicos; 
    }
    
    
}
