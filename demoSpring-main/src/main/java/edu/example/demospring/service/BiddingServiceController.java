package edu.example.demospring.service;

import edu.example.demospring.dao.BiddingServiceDAO;
import edu.example.demospring.model.BiddingHistoricDTO;
import edu.example.demospring.model.ProductDTO;
import edu.example.demospring.persitence.BiddingHistoric;
import edu.example.demospring.repository.BiddingRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class BiddingServiceController {
    private static Map<Long, BiddingHistoricDTO> biddingsMap = new HashMap<>();

    final BiddingRepository biddingRepository;
    final BiddingServiceDAO biddingServiceDAO;


    public BiddingServiceController(BiddingRepository biddingRepository, BiddingServiceDAO biddingServiceDAO) {
        this.biddingRepository = biddingRepository;
        this.biddingServiceDAO = biddingServiceDAO;
        ;
    }

    @GetMapping(value = "/home/biddings")
    public ResponseEntity<Object> getProducts() {
        return new ResponseEntity<>(biddingRepository.findAll().stream().map(o -> new BiddingHistoricDTO(o.getId(),
                o.getEmail(), o.getPrice(), o.getProduct_id())).collect(Collectors.toList()), HttpStatus.OK);
    }

    @PostMapping(value = "/home/bidding_create")
    public ResponseEntity<Object> createProduct(@RequestBody BiddingHistoricDTO biddingHistoricDTO) {
        biddingsMap.put(biddingHistoricDTO.getId(), biddingHistoricDTO);
        BiddingHistoric biddingHistoric = new BiddingHistoric();
        biddingHistoric.setEmail(biddingHistoricDTO.getEmail());
        biddingHistoric.setPrice(biddingHistoricDTO.getPrice());
        biddingHistoric.setProduct_id(biddingHistoricDTO.getProduct_id());
        biddingRepository.save(biddingHistoric);
        return new ResponseEntity<>("Bidding historic updated", HttpStatus.OK);
    }
}
