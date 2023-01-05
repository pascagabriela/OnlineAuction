package edu.example.demospring.repository;

import edu.example.demospring.persitence.Image;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ImageRepository extends CrudRepository<Image, Long> {

    List<Image> findAll();

    Optional<Image> findById(Long id);
}
