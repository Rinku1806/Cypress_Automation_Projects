describe('Automation Practice spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    cy.wait(2000)
    //cy.window().should('have.property', '$');
    cy.get('#checkBoxOption1').should('not.be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    // check on check box from the list
    cy.get("input[type='checkbox']").check(['option2','option3'])
    // selecton of drop down frm static drop down
    cy.get('select').select("option2").should("have.value","option2")
    // selection of drop down from dynamic 
    cy.get('#autocomplete').type("ind")
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if($el.text() == "India")
      {
        $el.click()
      }
  })

  // Verify visible or hidden things on the page
  cy.get('#displayed-text').should("be.visible")
  cy.get('#hide-textbox').click()
  cy.get('#displayed-text').should("not.be.visible")
  cy.get('#show-textbox').click()

  // Selecting radio button
  cy.get('[for="radio2"] > .radioButton').check().should('be.checked')

  
    
  })
})