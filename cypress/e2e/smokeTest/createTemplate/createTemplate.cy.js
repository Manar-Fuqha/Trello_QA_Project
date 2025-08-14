/// <reference types="cypress" />
import {Given , When , Then } from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy"
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateActions from "../../../pageObjects/createTemplate/Actions.cy";
import createTemplateAssertions from "../../../pageObjects/createTemplate/Assertions.cy";

const sharedactions = new sharedActions();
const createTemplateAction = new createTemplateActions();
const createTemplateAssertion = new createTemplateAssertions();
const datautiles = new dataUtiles();
let boardId , boardUrl ,listId;
const templateName ="my template";
before(()=>{
    cy.loginToTrello()
    datautiles.createBoard("My Testing Board").then((response)=>{
        boardId = response.body.id;
        boardUrl = response.body.url;

        datautiles.createNewList("Testing List" , boardId).then((response)=>{
            listId = response.body.id;
        })
    })
   cy.wait(2000 )
})
Given("The user navigated to the board", ()=>{
    sharedactions.openBoard(boardUrl)
})
When("Clicks on template card icon", ()=>{
    createTemplateAction.clickOnCreateTemplateIcon(listId);
})
When("Clicks on create new template button", ()=>{
    createTemplateAction.clickOnCreateNewTemplateButtonInDialog()
})
When("Types a template title", ()=>{
    createTemplateAction.typesTemplateTiltle(templateName)
})
When("Clicks on Add button", ()=>{
    createTemplateAction.clickOnAddCardTemplateButton()
})
Then("The template dialog shoulb be visible and contain template name", ()=>{
    createTemplateAssertion.checkIfcardBackContainTemplateName(templateName).checkIfTemplateNameIsVisible(templateName)
})
Then("the list should contain the template name", ()=>{
    createTemplateAssertion.checkIfListContainTemplateName(templateName , listId)
})
Then("the 'This is a Template card.' should be visible", ()=>{
    createTemplateAssertion.checkIfTemplateBannerIfExist().checkIfTemplateBannerIfVisible()
})
after(()=>{
    cy.wait(3000)
    datautiles.deleteBoard(boardId)
})