Feature: Test JavaScript Express API

  Scenario: Test hello endpoint
    Given url 'http://localhost:3000/hello'
    When method get
    Then status 200
    And match response.message == 'Hello from JavaScript'

  Scenario: Add two numbers
    Given url 'http://localhost:3000/add'
    And request { a: 10, b: 20 }
    When method post
    Then status 200
    And match response.result == 30
