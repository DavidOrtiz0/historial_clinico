package com.hc.ghc.Controlador;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.repositorio.RepositorioProgramadorDeCitas;

import com.hc.ghc.modelo.Programadordecitas;

@RestController
@RequestMapping("/programadordecitas")
@CrossOrigin(origins = "*")

public class ControladorProgramadorDeCitas{

    @Autowired RepositorioProgramadorDeCitas repositorioprogramadordecitas;

    @PostMapping("/sesion")
    public boolean obtener(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;

        List<Programadordecitas> programadorcitas = repositorioprogramadordecitas.findAll();

        for(Programadordecitas programador: programadorcitas){
            if (programador.getUsuario().equals(usuario)  && programador.getContrasena().equals(contrasena) ){
                respuesta = true;
            }
        }
        
        return respuesta;
    }

}
