/// <reference types="cypress" />

import { Given , When , Then} from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/Assertions.cy";

const sharedAction = new sharedActions();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
const datautiles = new dataUtiles();
let boardId , boardUrl , listId , cardId;
before(()=>{
    cy.loginToTrello()
    datautiles.createBoard("My Testing Board").then((response)=>{
        boardId = response.body.id;
        boardUrl = response.body.url;
   
   

    console.log(boardId)
    datautiles.createNewList("tesing list" , boardId).then((response)=>{
        listId=response.body.id;
    
  
    datautiles.createCard("My card" , listId).then((response)=>{
        cardId= response.body.id;
    })
    })
     })
})

Given("The user navigated to the board", ()=>{
    sharedAction.openBoard(boardUrl)
})
When("Clicks on card name", ()=>{
    sharedAction.clickOnTemplateOrCard(cardId)
})
When("Clicks on Archive card", ()=>{
    deleteCardAction.clickOnActionsButtonOnDialog().clickOnArchiveButton()
})
When("Clicks on delete card", ()=>{
    deleteCardAction.clickOnDeleteButton()
})
When("Clicks on Confirm deletion button", ()=>{
    deleteCardAction.clickOnConfirmDeletionButton()
})
Then("The card should be removed", ()=>{
    deleteCardAssertion.checkIfCardIsRemoved(listId)
})
after(()=>{
    datautiles.deleteBoard(boardId);
})