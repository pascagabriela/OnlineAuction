package edu.example.demospring.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class BiddingHistoricDTO {

    private long id, product_id;
    private String email;
    private int price;

    public BiddingHistoricDTO(){

    }

    public BiddingHistoricDTO(Long id, String email, int price, Long product_id){
        this.id = id;
        this.price = price;
        this.email = email;
        this.product_id = product_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProduct_id() {return product_id;}

    public String getEmail() {return email;}

    public int getPrice() {return price;}
}
