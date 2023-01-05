package edu.example.demospring.dao;

import edu.example.demospring.persitence.Image;
import edu.example.demospring.persitence.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class ImageServiceDAO {

    private final EntityManager em;

    public ImageServiceDAO(EntityManager em) {
        this.em = em;
    }

    public List<Image> findImages() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Image> cq = cb.createQuery(Image.class);
        Root<User> from = cq.from(User.class);
        return em.createQuery(cq).getResultList();
    }
}
