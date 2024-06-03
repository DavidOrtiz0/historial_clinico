package com.hc.ghc.Controlador;

import org.springframework.web.bind.annotation.RestController;

import com.hc.ghc.modelo.Administrador;
import com.hc.ghc.repositorio.RepositorioAdministrador;
import java.util.Map;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Map<String, Object>> obtener(@RequestBody Map<String, Object> sesion) {
        String usuario = (String) sesion.get("usuario");
        String contrasena = (String) sesion.get("contrasena");
        boolean respuesta = false;
        Administrador administradorEncontrado = null;
        List<Administrador> administradores = repositorio_admin.findAll();

        for(Administrador adm: administradores){
            if (adm.getUsuario().equals(usuario)  && adm.getContrasena().equals(contrasena) ){
                administradorEncontrado = adm;
                administradorEncontrado.setUsuario(null);
                administradorEncontrado.setContrasena(null);
                respuesta = true;
            }
        }

        Map<String, Object> resultado = new HashMap<>();
        resultado.put("confirmacion", respuesta);
        resultado.put("actor", administradorEncontrado);
        return ResponseEntity.ok(resultado);
    }
    
}
