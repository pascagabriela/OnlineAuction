package edu.example.demospring.dao;

import edu.example.demospring.persitence.BiddingHistoric;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class BiddingServiceDAO {
    private final EntityManager em;

    public BiddingServiceDAO(EntityManager em) {
        this.em = em;
    }

    public List<BiddingHistoric> findBiddings() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<BiddingHistoric> cq = cb.createQuery(BiddingHistoric.class);
        Root<BiddingHistoric> from = cq.from(BiddingHistoric.class);
        return em.createQuery(cq).getResultList();
    }
}
