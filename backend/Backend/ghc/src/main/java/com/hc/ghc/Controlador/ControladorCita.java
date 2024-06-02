package com.hc.ghc.Controlador;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

    @PostMapping("/obtener")
    @ResponseBody
    public List<Cita> postMethodName(@RequestBody Map<String, Long> dato) {
        Long cedula = dato.get("pk_cedula");
        System.out.println("La cedula es: " + cedula);
        List<Cita> citas = repositorioCita.CitasPaciente(cedula);
        if (!citas.isEmpty()) { System.out.println("las citas son: " + citas); return citas; } else { return null;}
    }
    
    
    
}
