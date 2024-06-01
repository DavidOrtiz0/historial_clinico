package com.hc.ghc.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hc.ghc.modelo.paciente;

public interface RepositorioPaciente extends JpaRepository<paciente, Integer>{
}
