package com.hc.ghc.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hc.ghc.modelo.Cita;

public interface RepositorioCita extends JpaRepository<Cita, Long>{
    
    @Query(value = "SELECT * FROM Cita WHERE fk_paciente = :cedula", nativeQuery = true ) public List<Cita> CitasPaciente(@Param("cedula")Long cedula);
    
}
