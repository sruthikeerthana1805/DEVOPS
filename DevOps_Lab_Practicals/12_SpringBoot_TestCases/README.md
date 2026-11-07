# Experiment 12 – Test Cases using Spring Boot Testing

Run all test cases:
```bash
mvn test
```

Run the application:
```bash
mvn spring-boot:run
```

Test endpoints in a browser:
- http://localhost:8080/hello
- http://localhost:8080/add?a=10&b=20

The JUnit tests use Spring Boot's `@WebMvcTest` and `MockMvc` to test the controller without starting a full server.
