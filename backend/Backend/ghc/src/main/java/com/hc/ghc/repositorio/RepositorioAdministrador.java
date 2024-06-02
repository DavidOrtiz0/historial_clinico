package com.hc.ghc.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hc.ghc.modelo.Administrador;

public interface RepositorioAdministrador extends JpaRepository< Administrador, Integer>{
    
}
