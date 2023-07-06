export class Login_page{
    navigate(){
        cy.contains("Form Authentication").click()
        cy.url()
            .should("include", "/login")
    }
    addUsername(usernameinput, usernametrue){
        cy.get('input[type="text"]', {timeout:6000})
            .type(usernameinput)
            .should("have.value", usernametrue)
    }
    addPassword(password){
        cy.get('input[type="password"]')
            .type(password)
        cy.get('[type="submit"]').click({force: true})
    }
    // Password: SuperSecretPassword!
    verifySuccessfulLogin(){
        cy.url()
            .should("include", '/secure')
    }
}