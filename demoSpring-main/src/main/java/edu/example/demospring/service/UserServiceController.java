package edu.example.demospring.service;

import edu.example.demospring.dao.UserServiceDAO;
import edu.example.demospring.model.LoginDTO;
import edu.example.demospring.model.UserDTO;
import edu.example.demospring.persitence.User;
import edu.example.demospring.repository.UserRepository;
import edu.example.demospring.security.JwtTokenUtil;
import edu.example.demospring.security.MyUserDetails;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/home")
public class UserServiceController {
    private static final Map<Long, UserDTO> usersMap = new HashMap<>();

    private final PasswordEncoder passwordEncoder;

    final UserRepository userRepository;

    final UserServiceDAO userServiceDAO;

    JwtTokenUtil token;


    public UserServiceController(UserRepository userRepository, UserServiceDAO userServiceDAO, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userServiceDAO = userServiceDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @RequestMapping(value = "/users")
    public ResponseEntity<Object> getUsers() {
        return new ResponseEntity<>(userRepository.findAll().stream().map(o -> new UserDTO(o.getId(), o.getFirst_name(), o.getLast_name(), o.getEmail(), o.getPhone(), o.getPassword())).collect(Collectors.toList()), HttpStatus.OK);
    }

    @RequestMapping(value = "/user_create", method = RequestMethod.POST)
    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO) {
        usersMap.put(userDTO.getId(), userDTO);
        User user = new User();
        user.setFirst_name(userDTO.getFirst_name());
        user.setLast_name(userDTO.getLast_name());
        user.setEmail(userDTO.getEmail());
        user.setPhone(userDTO.getPhone());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);
        return new ResponseEntity<>("User created", HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getUser(@PathVariable("id") Long id) {
        return new ResponseEntity<>(userRepository.findById(id).map(p -> new UserDTO(p.getId(), p.getFirst_name(), p.getLast_name(), p.getEmail(), p.getPhone(), p.getPassword())).orElse(null), HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> updateUser(@PathVariable("id") Long id, @RequestBody UserDTO userDTO) {
        userRepository.findById(id).ifPresent(p -> {
            p.setFirst_name(userDTO.getFirst_name());
            p.setPhone(userDTO.getPhone());
            userRepository.save(p);
        });
        usersMap.remove(id);
        usersMap.put(id, userDTO);
        return new ResponseEntity<>("User updated", HttpStatus.OK);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteUser(@PathVariable("id") Long id) {
        UserDTO remove = usersMap.remove(id);
        userRepository.deleteById(id);
        return new ResponseEntity<>(Optional.ofNullable(remove).map(p -> "User deleted").orElse("User not found"), HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String loginUser(@RequestBody LoginDTO loginDTO) {
        if (userRepository.findByEmail(loginDTO.email) == null) {
            return "This user doesn't exist!";
        }
        if (!passwordEncoder.matches(loginDTO.password, userRepository.findByEmail(loginDTO.email).getPassword())) {
            return "Wrong password! Please try again!";
        }
        token = new JwtTokenUtil();
        MyUserDetails userDetails = new MyUserDetails(userRepository.findByEmail(loginDTO.email));
        return token.generateToken(userDetails);
    }
}
