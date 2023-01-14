package edu.example.demospring.persitence;

import javax.persistence.*;

@Entity
@Table(name = "bidding")
public class BiddingHistoric {
    private long id, product_id;
    private String email;
    private int price;

    public BiddingHistoric(){

    }

    public BiddingHistoric(Long id, String email, int price, Long product_id){
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

    public void setProduct_id(long product_id) {this.product_id = product_id;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public int getPrice() {return price;}

    public void setPrice(int price) {this.price = price;}
}
