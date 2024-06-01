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

import com.hc.ghc.modelo.programadordecitas;

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

        List<programadordecitas> programadorcitas = repositorioprogramadordecitas.findAll();

        for(programadordecitas programador: programadorcitas){
            if (programador.Getusuario().equals(usuario)  && programador.Getcontrasena().equals(contrasena) ){
                System.out.println(programador.Getcontrasena());
                respuesta = true;
            }
        }
        
        return respuesta;
    }

}
