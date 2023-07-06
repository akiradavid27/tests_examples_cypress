/// <reference types="cypress"/>

import { Login_page } from "../../page-objects/Login_page"

describe("Verifies successful login authentication", function(){
    const loginPage = new Login_page()
    beforeEach(()=>{
        cy.visit("http://the-internet.herokuapp.com/")
    })
    it("verifies successful login info input", function(){
        loginPage.navigate()
        loginPage.addUsername('tomsmith', 'tomsmith')
        loginPage.addPassword('SuperSecretPassword!')
        loginPage.verifySuccessfulLogin()
    })

})

