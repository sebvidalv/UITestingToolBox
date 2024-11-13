/// <reference types="Cypress" />


// Este codigo es para llevarnos a la pagina de inicio para realizar las pruebas del item III

///xpath
const xpathLogin = '//*[text()=" Signup / Login"]';

const xpathBtnLogin = '//button[@data-qa="login-button"]';

const xpathTxtEmailUser = '//input[@data-qa="login-email"]';

const xpathTxtPasswordUser = '//input[@data-qa="login-password"]';

const xpathLogout = '//*[text()=" Logout"]';

const xpathBtnDeleteAccount = '//*[text()=" Delete Account"]';

const xpathBtnContinue = '//a[@data-qa="continue-button"]';


// Este codigo es para llevarnos a la pagina de inicio para realizar las pruebas del item III

describe('03_Login y eliminación de usuario', () => {
    it('Ingresar pagina inicial y comprobarla', () => {
      /// Visitar pagina solicitada
      cy.visit('https://automationexercise.com/')
      /// Metodo simple para verificar la pagina que se ingresa
      cy.url().should('contain', 'automationexercise.com')
    })

    
    it('Ingresar credenciales', () => {
      /// Visitar pagina solicitada
      cy.visit('https://automationexercise.com/')
      /// Metodo simple para verificar la pagina que se ingresa
      cy.url().should('contain', 'automationexercise.com')
      /// Ingresar a login
      cy.xpath(xpathLogin).should('exist').click()

      /// Validar boton
      cy.xpath(xpathBtnLogin).should('be.visible')

      //Ingresar datos
      cy.xpath(xpathTxtEmailUser).should('exist').type('seb.vidalv@gmail.com')

      cy.xpath(xpathTxtPasswordUser).should('exist').type('123456')

      cy.xpath(xpathBtnLogin).click()

      //Comprobar inicio de sesion
      cy.xpath(xpathLogout).should('exist')

      //Eliminar usuario y comprobarlo
      cy.wait(3000);
      cy.xpath(xpathBtnDeleteAccount).should('be.visible').click()
      cy.wait(3000)
      cy.xpath(xpathBtnContinue).should('be.visible').click()
      
    })
  
  })