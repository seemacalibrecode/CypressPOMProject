class SignInPage {
    visit() {
      cy.visit('/signin');
    }
  
    getEmail() {
      return cy.get('#email');
    }
  
    getPassword() {
      return cy.get(`[data-testid=SignInPassword]`);
    }
  
    fillEmail(value) {
      const field = cy.get(`#email`);
      field.clear();
      field.type(value);
  
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(`[data-testid=SignInPassword]`);
      field.clear();
      field.type(value);
  
      return this;
    }
  
    submit() {
      const button = cy.get(`[data-test=SignInSubmitButton]`);
      button.click();
    }
  }
  
  export default new SignInPage();
  