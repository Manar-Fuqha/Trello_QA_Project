/// <reference types="cypress" />

import { Given , When , Then} from "cypress-cucumber-preprocessor/steps"
import dataUtiles from "../../../support/datautiles.cy"
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/Actions.cy";
import moveTemplateAssertions from "../../../pageObjects/moveTemplate/Assertions.cy";

const sharedactions = new sharedActions();
const moveTemplateAction = new moveTemplateActions();
const moveTemplateAssertion = new moveTemplateAssertions();
const datautiles = new dataUtiles();
let boardId , boardUrl , firstListId ,secondListId, templateId , templateName , secondListName;
before(()=>{
    cy.loginToTrello()
    datautiles.createBoard("Testing Board").then((response)=>{
        boardId = response.body.id;
        boardUrl = response.body.url;

        datautiles.createNewList("First List" , boardId).then((response)=>{
            firstListId = response.body.id;

            datautiles.createNewTemplate("template" , firstListId).then((response)=>{
                templateId = response.body.id;
                templateName= response.body.name;
            })
        })

        datautiles.createNewList("Second List" , boardId).then((response)=>{
            secondListId = response.body.id;
            secondListName = response.body.name;
        })

    })
    cy.wait(2000)
})

Given("The user navigated to the board", ()=>{
    sharedactions.openBoard(boardUrl)
})
When("Clicks on template" , ()=>{
    sharedactions.clickOnTemplateOrCard(templateId);
})
When("Clicks on Action button" , ()=>{
    sharedactions.clickOnActionsButton()
})
When("Clicks on Move Option" , ()=>{
    moveTemplateAction.clickOnMoveButtonFromDialog()

})
When("Clicks on List select options" , ()=>{
    moveTemplateAction.clickOnListSelectOptions()
})
When("Select the New List" , ()=>{
    moveTemplateAction.selectNewList(secondListName)

})
When("Clicks on Move button" , ()=>{
    moveTemplateAction.clickOnMoveButton()
})
Then("The template should shown in new List" , ()=>{
    moveTemplateAssertion.checkIfTheTemplateAppeareInDestinationList(secondListId , templateId)
})
Then("the template should removed from old list" , ()=>{
    moveTemplateAssertion.checkIfTheTemplateRemovedFromOldList(firstListId , templateId)
})
after(()=>{
    cy.wait(3000)
    datautiles.deleteBoard(boardId)
})