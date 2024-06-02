package com.hc.ghc.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hc.ghc.modelo.Paciente;

public interface RepositorioPaciente extends JpaRepository<Paciente, Integer>{
}
