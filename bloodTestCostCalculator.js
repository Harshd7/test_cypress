// The dropdown form for 'patient-test' here does not clearly list the options, 
//  hence automating it will require a further understanding of the codebase.

describe('Adding a patient & creating tests', () => {
    it('Create a new user profile and necessary tests for that user.', () => {
      cy.visit('https://gor-pathology.web.app/')
  
      cy.get('#patient-test').type('Beans')  // For selecting test
  
      cy.get('.MuiSelect-root').click()    // For applying discount
      cy.get('[data-value="5"]').click()
  
    })    
  })  
