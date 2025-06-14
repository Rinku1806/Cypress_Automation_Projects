class PurchasePage{


getCountryBox(){
    return cy.get('#country')

}

getPurchaseButton(){

    return cy.get('form.ng-untouched > .btn')
}

getCountryAutoSugestions(){

    return cy.get('.suggestions > ul > li > a')
}

getAgreementCheckBox(){

    return cy.get('.checkbox')
}

getFinalMessage(){    
    
    return cy.get('.alert')
    
}

}

export default PurchasePage;