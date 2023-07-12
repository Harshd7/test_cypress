describe('Adding a patient & creating tests', () => {
  it('Create a new user profile and necessary tests for that user.', () => {
    cy.visit('https://gor-pathology.web.app/dashboard')
   
// page 1   
    cy.get('[href="/patients"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[style="display: flex; align-items: center;"] > a > .MuiButtonBase-root').click()
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('John Doe')                 //Name
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('example.email@email.com')  //Email Address
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('0123456789')               //Phone Number
    cy.get('.jss82 > .MuiButton-label').click()


//page2    
    cy.get('.jss96 > :nth-child(2) > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear().type('160')  //Patient Height
    cy.get('.jss96 > :nth-child(2) > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type('75')   //Patient Weight
    cy.get('#mui-component-select-gender').click()                                                                   //Patient Gender   
    cy.get('[data-value="female"]').click()    
    cy.get(':nth-child(3) > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').clear().type('30')       //Patient Age   
    cy.get('.MuiBox-root > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear().type('90')             //Patient Blood Sugar   
    cy.get('.MuiBox-root > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type('80')    
    cy.get('.jss82 > .MuiButton-label').click()


/*page3  [ For page 3, the list items for the dropdown menus are not clearly configured, 
    as in it is difficult for the locator to pick them up without further understanding of the codebase, hence its commented out.]

    cy.get('#patient-test').click()       // For selecting the tests
    cy.get('[data-value='1']).click()
    cy.get('[style="width: 100%; margin-top: 18px;"] > .MuiInputBase-root > .MuiSelect-root').click() // For Discount
    cy.get('[data-value="5"]').click()
    cy.get('#patient-tests-labs').click()  // For selecting the lab    
    cy.get('#mui-54757').click()  // For selecting doctors who recommended
    cy.get('[data-value="2"]').click()
    cy.get('#mui-component-select-doctor_commission').click()  // For selecting the doctor commission
    cy.get('[data-value="10"]').click()    
    cy.get('.MuiIconButton-label > .material-icons').click()                  // For adding equipment
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="1VxeqTi5zMueBTuPiNAC"]').click()
    cy.get('.MuiTableCell-alignRight > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('3')
    cy.get('.MuiTableCell-paddingNone > div > :nth-child(1)').click()
    cy.get('.jss82 > .MuiButton-label').click()   */
})
})
