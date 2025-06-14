describe('Other Automation Areas', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      cy.url().should('include','rahulshetty')

      cy.get('#opentab').then(function(el){
        const newlink = el.prop('href')
        cy.log(newlink)
        cy.visit(newlink)
        cy.origin(newlink, ()=>{
          cy.get("#header-part > div.header-logo-support.pt-30.pb-30 > div > div > div.col-lg-8.col-md-8 > div > div.button.float-left > a").click()
        })
        
      }
    
    )
      
    
    })
  })