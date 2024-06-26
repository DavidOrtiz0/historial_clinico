package com.hc.ghc.Controlador;

import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.administrador;
import com.hc.ghc.repositorio.RepositorioAdministrador;
import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/administrador")
@CrossOrigin(origins = "*")

public class ControladorAdministrador {

    @Autowired RepositorioAdministrador repositorio_admin;

    @PostMapping("/sesion")
    public boolean obtener(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;

        List<administrador> administradores = repositorio_admin.findAll();

        for(administrador adm: administradores){
            if (adm.Getusuario().equals(usuario)  && adm.Getcontrasena().equals(contrasena) ){
                respuesta = true;
            }
        }

        return respuesta;
    }
    
}
