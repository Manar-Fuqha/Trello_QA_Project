class moveTemplateActions{

    clickOnEditTemplateIcon(templateId){
        cy.get(`[data-card-id="${templateId}"]`)
  .find("[data-testid='quick-card-editor-button']")
  .click({ force: true });
        return this;
    }

    clickOnMoveButtonFromDialog(){
        cy.findByTestId("card-back-move-card-button").click()
        return this;
    }

    clickOnListSelectOptions(){
        cy.wait(2000)
        cy.findByTestId(
        "move-card-popover-select-list-destination-select--input-container"
        ).click();
        return this;
    }
    selectNewList(secondListName){
        cy.wait(1500)
        cy.findByTestId("move-card-popover-select-list-destination-select--listbox")
        .contains(secondListName)
        .click();
        return this;
    }

    clickOnButton(){
        cy.findByTestId("move-card-popover-move-button").click();
        return this;
    }
}
export default moveTemplateActions;