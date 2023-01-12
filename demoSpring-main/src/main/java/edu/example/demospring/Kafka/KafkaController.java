package edu.example.demospring.Kafka;
import edu.example.demospring.model.ProductDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
public class KafkaController {

    private static final String TOPIC_NAME = "BiddingEXPIRED";
    private static final Logger log = Logger.getLogger(KafkaController.class.getCanonicalName());

    private KafkaTemplate<String, ProductDTO> kafkaTemplate;

    public KafkaController(KafkaTemplate<String, ProductDTO> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @RequestMapping(value = "/send_kafkaMessage", method = RequestMethod.POST)
    public ResponseEntity<Object> sendProduct(@RequestBody ProductDTO productDTO) {
        log.info("sending product to kafka");
        kafkaTemplate.send(TOPIC_NAME, productDTO);
        return new ResponseEntity<>("Message sent", HttpStatus.OK);
    }

    @KafkaListener(
            topics = TOPIC_NAME,
            groupId = "my-bid",
            containerFactory = "kafkaListenerContainerFactory")
    public void consume(ProductDTO productDTO) {
        log.info("Received:" + productDTO.getProduct_name());
    }

}