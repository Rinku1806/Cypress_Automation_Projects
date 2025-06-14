describe('Other Automation Areas', () => {
    it('passes', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      cy.url().should('include','rahulshetty')

      cy.get("#product > tbody > tr td:nth-child(2)").each(($el,index,$list)=>{
        const text = $el.text()
        if (text.includes("Python"))

          cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

            const priceText = price.text()
            expect(priceText).to.equal('25')


          })
      })
     
      // Mouse Hover and show and click

      cy.get("div.mouse-hover-content").invoke('show')
      cy.contains('Top').click()
      cy.url().should("include",'top')

      // Force true to show the hidden elements without showing them on gui
      
      cy.contains('Top').click({force:true})
      cy.url().should("include",'top')

      
    
    })
  })