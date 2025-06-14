import 'cypress-iframe'

describe('Other Automation Areas', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      cy.url().should('include','rahulshetty')
      
      cy.frameLoaded("#courses-iframe")
      cy.iframe().find("a[href*='mentorship']").eq(0).click()
      cy.wait(2000)
      cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length',2)
      
    
    })
  })