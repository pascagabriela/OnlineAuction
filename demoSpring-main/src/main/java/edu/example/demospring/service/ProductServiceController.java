package edu.example.demospring.service;

import edu.example.demospring.dao.ProductServiceDAO;
import edu.example.demospring.model.ProductDTO;
import edu.example.demospring.persitence.Image;
import edu.example.demospring.persitence.Product;
import edu.example.demospring.repository.ImageRepository;
import edu.example.demospring.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class ProductServiceController {
    private static Map<Long, ProductDTO> productsMap = new HashMap<>();

    final ProductRepository productRepository;

    final ImageRepository imageRepository;

    final ProductServiceDAO productServiceDAO;


    public ProductServiceController(ProductRepository productRepository, ImageRepository imageRepository, ProductServiceDAO productServiceDAO) {
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
        this.productServiceDAO = productServiceDAO;
    }

    @RequestMapping(value = "/home/products")
    public ResponseEntity<Object> getProducts() {
        return new ResponseEntity<>(productRepository.findAll().stream().map(o -> new ProductDTO(o.getId(), o.getProduct_name(), o.getPrice(), o.getDescription(), o.getImage(), o.getType())).collect(Collectors.toList()), HttpStatus.OK);
    }

    @RequestMapping(value = "/authenticated/product_create", method = RequestMethod.POST)
    public ResponseEntity<Object> createProduct(@RequestBody ProductDTO productDTO) {
        productsMap.put(productDTO.getId(), productDTO);
        Product product = new Product();
        product.setProduct_name(productDTO.getProduct_name());
        product.setPrice(productDTO.getPrice());
        product.setDescription(productDTO.getDescription());
        product.setImage(productDTO.getImage());
        product.setType(productDTO.getType());
        productRepository.save(product);
        System.out.println(productDTO.getImage());
        return new ResponseEntity<>("Product created", HttpStatus.OK);
    }

    @RequestMapping(value = "/home/products/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getProduct(@PathVariable("id") Long id) {
        return new ResponseEntity<>(productRepository.findById(id).map(p -> new ProductDTO(p.getId(), p.getProduct_name(), p.getPrice(), p.getDescription(), p.getImage(), p.getType())).orElse(null), HttpStatus.OK);
    }

    @RequestMapping(value = "/authenticated/products/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateProduct(@PathVariable("id") Long id, @RequestBody ProductDTO productDTO) {
        productRepository.findById(id).ifPresent(p -> {
            p.setPrice(productDTO.getPrice());
            productRepository.save(p);
        });
        productsMap.remove(id);
        productsMap.put(id, productDTO);
        return new ResponseEntity<>("Product updated", HttpStatus.OK);
    }

    @RequestMapping(value = "/home/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteProduct(@PathVariable("id") Long id) {
        ProductDTO remove = productsMap.remove(id);
        productRepository.deleteById(id);
        return new ResponseEntity<>(Optional.ofNullable(remove).map(p -> "Product deleted").orElse("Product not found"), HttpStatus.OK);
    }

    @PostMapping("/images")
    public void saveImage(@RequestParam("/authenticated/file") MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String fileType = file.getContentType();
        byte[] fileData = file.getBytes();

        Image image = new Image();
        image.setName(fileName);
        image.setType(fileType);
        image.setData(fileData);

        imageRepository.save(image);
    }
}
