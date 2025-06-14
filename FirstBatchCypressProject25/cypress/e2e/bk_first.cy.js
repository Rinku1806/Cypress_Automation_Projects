describe('Cart Automation', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise')
    cy.get('.search-keyword').type("ca")

    // to get the number of products appeared after search
    cy.wait(2000)
    console.log("Bkumar@s") // this is not a cypress command so can be asychronous - can be executed out of turn anytime
    cy.get('.products').as('productLocator')
    cy.get('.product:visible').should('have.length',4)
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){

      console.log("Bkumar@cypress") // here we are manually making it asychronous by fulfilling the promise

    })

    cy.get('@productLocator').find('.product').each(($el, indexedDB,$list) => {

      const textVeg =  $el.find('h4.product-name').text()
      if (textVeg.includes('Cashews')){
      $el.find('button').click()    
      }
    })

    cy.get('.cart-icon > img').click()
    cy.get('.cart-preview > .action-block > button').click()
    cy.get('#root > div > div > div > div > button').click()

// for assertion gash
    cy.get('.brand').should('have.text','GREENKART')

    // for printing in consolde
    cy.get('.brand').then(function (logoelement){
      cy.log(logoelement.text())
    })




    
  })
})