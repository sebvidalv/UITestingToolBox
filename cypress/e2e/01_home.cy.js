/// <reference types="Cypress" />

/// Para utilizar xpath
require('cypress-xpath');

/// Variables para los xpath

const xpathLogin = '//*[text()=" Signup / Login"]';



// Este codigo es para llevarnos a la pagina de inicio para realizar las pruebas del item III

describe('01_Ingreso a la pagina Web', () => {
  it('Assert Url', () => {
    /// Visitar pagina solicitada
    cy.visit('https://automationexercise.com/')
    /// Metodo simple para verificar la pagina que se ingresa
    cy.url().should('contain', 'automationexercise.com')




  })

  it('Ingresar a Login', () => {
    cy.visit('https://automationexercise.com/')
    ///Validación de objeto para ingresar a login o registrarse
    cy.xpath(xpathLogin).should('be.visible')
    /// Click al boton de login o registrarse
    cy.xpath(xpathLogin).click()
    ///
    cy.wait(3000)
    
  })
})
