/// <reference types="cypress" />
import {Given , When , Then } from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy"
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateTemplateActions from "../../../pageObjects/updateTemplate/Actions.cy";
import createTemplateAssertions from "../../../pageObjects/createTemplate/Assertions.cy";


const sharedactions = new sharedActions();
const updateTemplateAction = new updateTemplateActions();
const createTemplateAssertion = new createTemplateAssertions();
const datautiles = new dataUtiles();
let boardId , boardUrl , listId , templateId;
const templateName= "new Template";
before(()=>{
    cy.loginToTrello()
    datautiles.createBoard("Testing Board").then((response)=>{
        boardId = response.body.id;
        boardUrl = response.body.url;

        datautiles.createNewList("Test List" , boardId).then((response)=>{
            listId = response.body.id;

            datautiles.createNewTemplate("template" , listId).then((response)=>{
                templateId = response.body.id;
            })
        })
    })
    cy.wait(2000)
})
Given("The user navigated to the board",()=>{
    sharedactions.openBoard(boardUrl)
})
When("clicks on template",()=>{
    sharedactions.clickOnTemplateOrCard(templateId)
})
When("edit template name",()=>{
    updateTemplateAction.editTemplateName(templateName)
})
Then("The template name should be changed",()=>{
    createTemplateAssertion.checkIfListContainTemplateName(templateName , listId)
})
after("delete board", ()=>{
    cy.wait(3000)
    datautiles.deleteBoard(boardId)
})