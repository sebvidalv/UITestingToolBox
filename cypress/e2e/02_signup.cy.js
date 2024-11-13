/// <reference types="Cypress" />

/// Para utilizar xpath
require('cypress-xpath');

/// Variables para los xpath

const xpathLogin = '//*[text()=" Signup / Login"]';

const xpathSignupButton = '//button[@data-qa="signup-button"]';

const xpathTxtboxName = '//input[@data-qa="signup-name"]';

const xpathTxtboxEmail = '//input[@data-qa="signup-email"]';

const xpathBtnCreateAccount = '//button[@data-qa="create-account"]';

const xpathCheckBoxMr = '//input[@value="Mr"]';

const xpathTxtboxPassword = '//input[@data-qa="password"]';

const xpathDateDay = '//select[@data-qa="days"]';

const xpathDateMonths = '//select[@data-qa="months"]';

const xpathDateYear = '//select[@data-qa="years"]';

const xpathTxtFirstName = '//input[@data-qa="first_name"]';

const xpathTxtLastName = '//input[@data-qa="last_name"]';

const xpathTxtCompany = '//input[@data-qa="company"]';

const xpathTxtAddress = '//input[@data-qa="address"]';

const xpathTxtCountry = '//select[@data-qa="country"]';

const xpathTxtState = '//input[@data-qa="state"]';

const xpathTxtCity = '//input[@data-qa="city"]';

const xpathTxtZipCode = '//input[@data-qa="zipcode"]';

const xpathTxtPhone = '//input[@data-qa="mobile_number"]';

const xpathTxtCreatedAccount = '//b[text()="Account Created!"]';

const xpathBtnContinue = '//a[@data-qa="continue-button"]';




describe('02_Completar form y registrar usuario', () => {
it('Ingresar a Login', () => {
    cy.visit('https://automationexercise.com/')
    ///Validación de objeto para ingresar a login o registrarse
    cy.xpath(xpathLogin).should('be.visible').click

  })

  it('Ingresar campos Name e Email y llenar form', () => {
    /// pagina de login
    cy.visit('https://automationexercise.com/login')
    /// Validar que sea la pagina correcta
    cy.url().should('contain', 'automationexercise.com/login');
    /// Validar el boton de signup 
    cy.xpath(xpathSignupButton).should('exist')
    /// ingresar nombre
    cy.xpath(xpathTxtboxName).click()
    cy.xpath(xpathTxtboxName).should('be.visible').type('Sebastian')
    /// ingresar email
    cy.xpath(xpathTxtboxEmail).click()
    cy.xpath(xpathTxtboxEmail).should('be.visible').type('seb.vidalv@gmail.com')
    /// click en el boton para registrar
    cy.xpath(xpathSignupButton).click()

    /// Validar que sea la pagina correcta
    cy.url().should('contain', 'automationexercise.com/signup')
    /// Validar boton crear cuenta
    cy.xpath(xpathBtnCreateAccount).should('be.visible')
    /// Presionar Checkbox
    cy.xpath(xpathCheckBoxMr).click
    /// Validar campo contraseña y llenarlo
    cy.xpath(xpathTxtboxPassword).should('exist').type('123456').should('have.value', '123456')
    /// ingresar fecha de nacimiento
    cy.xpath(xpathDateDay).type('30')
    cy.xpath(xpathDateMonths).type('September')
    cy.xpath(xpathDateYear).type('1994')
    /// validar campos
    cy.xpath(xpathTxtFirstName).should('exist')
    /// ingresar campos restantes
    cy.xpath(xpathTxtFirstName).should('exist').type('QA')
    cy.xpath(xpathTxtLastName).should('exist').type('Testing')
    cy.xpath(xpathTxtCompany).should('exist').type('ToolBox')
    cy.xpath(xpathTxtAddress).should('exist').type('Toolbox1234')
    cy.xpath(xpathTxtCountry).should('exist').type('New Zealand')
    cy.xpath(xpathTxtState).should('exist').type('Example')
    cy.xpath(xpathTxtCity).should('exist').type('Auckland')
    cy.xpath(xpathTxtZipCode).should('exist').type('0600')
    cy.xpath(xpathTxtPhone).should('exist').type('+652004456')
    cy.xpath(xpathBtnCreateAccount).should('exist').click()

    //Validar creacion de cuenta
    cy.xpath(xpathTxtCreatedAccount).should('exist')
    cy.xpath(xpathBtnContinue).should('be.visible').click()
    cy.wait(3000)

  })

})
