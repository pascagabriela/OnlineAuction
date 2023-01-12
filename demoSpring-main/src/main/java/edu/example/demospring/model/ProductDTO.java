package edu.example.demospring.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.Date;

public class ProductDTO {
    private long id,starting;
    private String product_name, price, description, image;

    private int type;

    public ProductDTO() {
    }

    public ProductDTO(Long id, String product_name, String price, String description, String image, int type, long starting) {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = type;
        this.starting = starting;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public String getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public String getImage() {
        return image;
    }

    public int getType() {return type;}

    public long getStarting() {return starting;}
}
