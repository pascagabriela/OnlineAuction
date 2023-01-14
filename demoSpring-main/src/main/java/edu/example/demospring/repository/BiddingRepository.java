package edu.example.demospring.repository;

import edu.example.demospring.persitence.BiddingHistoric;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
public interface BiddingRepository extends CrudRepository<BiddingHistoric, Long> {

    List<BiddingHistoric> findAll();

    Optional<BiddingHistoric> findById(Long id);
}
