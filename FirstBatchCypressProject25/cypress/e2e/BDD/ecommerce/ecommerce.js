import {Given, When , Then} from "cypress-cucumber-preprocessor/steps";   
   
   Given ('Landing to Home Page of Ecommerce application', function(){
    cy.visit(Cypress.config('baseUrl'))

   })
    When ('I add items to cart', function(){

        
    })
    And ('Validate the total prices')
    Then ('select the country, submit and verify Thankyou')