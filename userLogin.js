describe('User Login', () => {
  it('Logs user in', () => {
    cy.visit('https://gor-pathology.web.app/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test@kennect.io')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Qwerty@1234')
    cy.get('.jss9 > .MuiButton-contained > .MuiButton-label').click()
    cy.url().should('include', '/dashboard')
  })
})
