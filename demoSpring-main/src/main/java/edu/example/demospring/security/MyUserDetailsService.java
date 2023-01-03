package edu.example.demospring.security;

import edu.example.demospring.model.UserDTO;
import edu.example.demospring.persitence.User;
import edu.example.demospring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user ==null)
            throw new UsernameNotFoundException("User not found");
        var userDetails=new MyUserDetails(user);
        return  userDetails;
    }
}