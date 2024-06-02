package com.hc.ghc.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hc.ghc.modelo.Cita;

public interface RepositorioCita extends JpaRepository<Cita, Long>{
    
}
