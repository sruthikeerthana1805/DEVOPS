Feature: Test the Spring Boot hello endpoint

  Scenario: Get hello message
    Given url 'http://localhost:8080/hello'
    When method get
    Then status 200
    And match response == 'Hello from Spring Boot'
