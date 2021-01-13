/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Homepage from '../../support/pageObjects/HomePage';
import FreeCarCheckPage from '../../support/pageObjects/FreeCarCheckPage';

Given('I have list of car registration numbers', () =>{
    cy.getCarRegNumbers().each(function($e1, index, $list){
        cy.log($e1)
    })
    })

And('I am on car tax check homepage', () =>{
    const homepage = new Homepage();
    cy.visit(Cypress.config().baseUrl)
    .url()
    .should('contain', 'cartax');
})

Then('I enter registration number and validated vehicle details with expected', () =>{
    const homepage = new Homepage();
    const freeCarCheckPage =  new FreeCarCheckPage();

    cy.getCarRegNumbers().each(function($e1, index, $list){
    homepage.getRegistrationNumber().type($e1);
    homepage.getFreeCarCheckButton()
    .click()
    .url()
    .should('contain', 'free-car-check/');

    freeCarCheckPage.getCarDetails('Registration').should('have.text', $e1);
    freeCarCheckPage.getCarDetails('Make').should('have.text', 'Hon');
    freeCarCheckPage.getCarDetails('Model').should('have.text', 'Hon');
    freeCarCheckPage.getCarDetails('Color').should('have.text', 'Hon');
    freeCarCheckPage.getCarDetails('Year').should('have.text', 'Hon');

    cy.visit(Cypress.config().baseUrl)
    .url()
    .should('contain', 'cartax');
    })
    
    
})
