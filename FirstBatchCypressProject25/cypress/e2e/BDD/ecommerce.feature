Feature: End to End Ecommerce Validation

    application regressions

    Scenario: Ecommerce Products Delivery
    Given Landing to Home Page of Ecommerce application
    When I add items to cart
    And Validate the total prices
    Then select the country, submit and verify Thankyou