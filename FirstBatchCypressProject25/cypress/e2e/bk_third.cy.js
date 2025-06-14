describe('Other Automation Areas', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      cy.url().should('include','rahulshetty')
      cy.get('#alertbtn').click()
      cy.get('#confirmbtn').click()

      // window.alert is the event which get triggered 
      // docs.cypress.io

      cy.on('window:alert',(str)=>{
        expect(str).to.equal("Hello , share this practice page and share your knowledge")
      })

// Child tab handling invoke function in docs
      //cy.get('#opentab').click()
      cy.get('#opentab').invoke('removeAttr','target').click() 
      cy.wait(5000)      
      
   // navigate previous or next page
   // cy.baseUrl = 'https://www.qaclickacademy.com'

    cy.origin('https://www.qaclickacademy.com', () => {
      
      cy.url().should('include','qaclickacademy')
      cy.go('back')
      //cy.wait(2000)
      //cy.url().should('include','shettyacademy')
     // cy.wait(2000)
      
      // to get the current url     
    })
    
    cy.origin('https://rahulshettyacademy.com/', () => {      
      cy.url().should('include','shettyacademy')
    })


    
    })
  })