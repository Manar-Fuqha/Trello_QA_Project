/// <reference types="cypress" />

import { Given , When , Then} from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy";

import createCardActions from "../../../pageObjects/createCard/Actions.cy";

const datautiles = new dataUtiles();
let boardId , boardUrl;
const cardAction = new createCardActions();
before(()=>{
    datautiles.createBoard("Manar").then((resp)=>{
        boardUrl =resp.body.url;
        boardId =resp.body.id;
    })

    cy.loginToTrello();
})

Given("The user navigated to board",()=>{
    cardAction.openBoard(boardUrl)
})

after(()=>{
    datautiles.deleteBoard(boardId)
})