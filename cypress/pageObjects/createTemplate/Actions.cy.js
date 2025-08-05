class createTemplateActions {

    clickOnCreateTemplateIcon(listId){
        cy.get(`[data-list-id='${listId}']`).find("[data-testid='card-template-list-button']").click()
        return this;
    }

    clickOnCreateNewTemplateButtonInDialog(){
        cy.findByTestId("create-new-template-card-button").click()
        return this;
    }

    typesTemplateTiltle(tepmalteTitle){
        cy.findByTestId("create-template-card-composer").clear().type(tepmalteTitle)
        return this;
    }

    clickOnAddCardTemplateButton(){
        cy.findByTestId("new-template-card-submit-button").click()
        return this;
    }
}
 export default createTemplateActions;