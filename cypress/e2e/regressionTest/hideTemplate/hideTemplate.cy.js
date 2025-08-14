/// <reference types="cypress" />

import { Given , When , Then} from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy"
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateTemplateActions from "../../../pageObjects/updateTemplate/Actions.cy";
import createTemplateAssertions from "../../../pageObjects/createTemplate/Assertions.cy";
import hideTemplateActions from "../../../pageObjects/hideTemplate/Actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/Assertions.cy";


const sharedactions = new sharedActions();
const updateTemplateAction = new updateTemplateActions();
const createTemplateAssertion = new createTemplateAssertions();
const hideTemplateAction = new hideTemplateActions();
const hideTemplateAssertion = new hideTemplateAssertions();
const datautiles = new dataUtiles();
let boardId , boardUrl , listId , templateId , templateName;
before(()=>{
    cy.loginToTrello()
    datautiles.createBoard("Testing Board").then((response)=>{
        boardId = response.body.id;
        boardUrl = response.body.url;

        datautiles.createNewList("First List" , boardId).then((response)=>{
            listId = response.body.id;

            datautiles.createNewTemplate("template" , listId).then((response)=>{
                templateId = response.body.id;
                templateName= response.body.name;
            })
        })

    })
    cy.wait(2000)
})



Given("The user navigated to the board",()=>{
    sharedactions.openBoard(boardUrl)
})
When("Clicks on template",()=>{
    sharedactions.clickOnTemplateOrCard(templateId)
})
When("Clicks on actions button",()=>{
    sharedactions.clickOnActionsButton()
})
When("clicks on hide from list",()=>{
    hideTemplateAction.clickOnHideFromListButton()
})
Then("show in list button should shown",()=>{
    hideTemplateAssertion.checkIfShowInListButtonIsexist()
})
Then("The template should be hidden from list",()=>{
    hideTemplateAssertion.checkIfTemplateIsHidden(templateId , listId)
})
Then("The template should be appeare in card template dialog", ()=>{
    hideTemplateAssertion.checkIfTemplateExistInCardTemplateDialog(templateName,listId)
})
after(()=>{
    cy.wait(3000)
    datautiles.deleteBoard(boardId)
})