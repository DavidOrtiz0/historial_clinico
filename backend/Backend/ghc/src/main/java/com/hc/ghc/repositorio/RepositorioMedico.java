package com.hc.ghc.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hc.ghc.modelo.Medico;

public interface RepositorioMedico extends JpaRepository< Medico, Long>{
    
}
