class HomePage{


getNameBox(){
    return cy.get(':nth-child(1) > .form-control')
}

getTwoWayBindingBox(){

    return  cy.get(':nth-child(4) > .ng-untouched')
}

getEntrepRadioButton(){

    return cy.get('#inlineRadio3')
}

getEntrepLabel(){

return cy.get(':nth-child(7) > :nth-child(4) > .form-check-label')
}

getShopTab(){

    return cy.get(':nth-child(2) > .nav-link')
}

getGender(){

    return cy.get('select')

}

getEmployedRadioButtonLabel(){
    return cy.get(':nth-child(3) > .form-check-label')
}

}
export default HomePage;