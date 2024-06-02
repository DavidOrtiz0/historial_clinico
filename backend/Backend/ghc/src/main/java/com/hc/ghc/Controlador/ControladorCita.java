package com.hc.ghc.Controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;

import com.hc.ghc.modelo.Cita;
import com.hc.ghc.repositorio.RepositorioCita;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
@RequestMapping("/cita")
@CrossOrigin(origins = "*")
public class ControladorCita {

    @Autowired RepositorioCita repositorioCita;

    @PostMapping("/guardar")
    public boolean postMethodName(@RequestBody Cita entity) {
        if(entity.equals(null)){
            return false;
        }else{
            repositorioCita.save(entity);
            return false;
        }
        
    }
    
    
}
