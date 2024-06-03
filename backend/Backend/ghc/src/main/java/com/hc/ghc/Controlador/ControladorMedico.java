package com.hc.ghc.Controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Map<String, Object>> obtener(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;
        Medico medicoEncontrado = null;
        List<Medico> medicos = repositorio_medico.findAll();

        for(Medico medico: medicos){
            if (medico.getUsuario().equals(usuario)  && medico.getContrasena().equals(contrasena) ){
                medicoEncontrado = medico;
                medicoEncontrado.setUsuario(null);
                medicoEncontrado.setContrasena(null);
                respuesta = true;
            }
        }
        Map<String, Object> resultado = new HashMap<>();
        resultado.put("confirmacion", respuesta);
        resultado.put("actor", medicoEncontrado);
        return ResponseEntity.ok(resultado);
    }

    @GetMapping("/obtener")
    public List<Medico> getMethodName() {
        List<Medico> medicos = repositorio_medico.findAll();
        return medicos; 
    }
    
    @PostMapping("/guardar")
    public boolean Guardar(@RequestBody Medico medico) {
        boolean datosCompletos = (medico != null);
        if (datosCompletos) {
            repositorio_medico.save(medico);
            return true;
        } else {
            System.out.println("Datos incompletos.");
            return false;
        }
    }
    
    
}
