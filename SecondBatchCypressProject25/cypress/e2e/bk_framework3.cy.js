import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import CheckOutPage from "./Pages/CheckOutPage";
import PurchasePage from "./Pages/PurchasePage";

describe('Other Automation Areas', () => {
  let testData;
  let data;
  before(function(){
    //runs before all the tests in the block
      // loading fixtures asad
      cy.fixture('example').then(function(data){
  //      this.data = data
    testData = data;
      })
  })

    it('bk_framework3', () => {

      const homepage = new HomePage()
      //cy.visit(Cypress.config('baseUrl'))
      cy.visit(Cypress.env('url'))
      cy.url().should('include','angular')
      homepage.getNameBox().type(testData.name)      
      homepage.getGender().select(testData.gender)  
      
 // Pause for debugging
 //cy.pause()
 //cy.debug()     


// Two way binding text validation
      homepage.getTwoWayBindingBox().should('have.value',testData.name)
// Min len attributes
      homepage.getNameBox().should("have.attr",'minlength',"2")
      homepage.getEntrepRadioButton().should('be.disabled')
      homepage.getEntrepLabel().should('have.css', 'color', 'rgb(108, 117, 125)');
      homepage.getEmployedRadioButtonLabel().should('have.css', 'color', 'rgb(33, 37, 41)');

      homepage.getShopTab().click()
      cy.wait(2000)

      testData.productName.forEach(function(element){
        cy.selectProduct(element)      
      })

      const shoppage = new ShopPage()
      shoppage.getCheckOutButton().click()

      var sumProdct = 0
      cy.get('tr > :nth-child(4) > strong').each(($el, next, $list)=>{

        var productPrice = Number($el.text().split(" ")[1].trim())
        sumProdct += productPrice
        console.log(sumProdct)


      })

      cy.get('h3 > strong').then(function (element) {
       var totalPrice = Number( element.text().split(" ")[1].trim())
       expect(totalPrice).to.equal(sumProdct)
       console.log(totalPrice)
      })

      
      



      const checkoutpage = new CheckOutPage()
      cy.wait(2000)
      checkoutpage.getCheckOutButton().click()



      const purpage = new PurchasePage()
      purpage.getCountryBox().type("india")
      cy.wait(2000)
      purpage.getCountryAutoSugestions().click()
      cy.wait(2000)
      purpage.getAgreementCheckBox().click({force:true})
      purpage.getPurchaseButton().click()
      purpage.getFinalMessage().should('include.text', "Success")

      cy.get('.alert').then(function(element){
        const actualtext = element.text()
        expect(actualtext.includes("Success")).to.be.true
        
      })      
    
    })
  })