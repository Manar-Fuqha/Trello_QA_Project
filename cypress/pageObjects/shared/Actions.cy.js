class sharedActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }

    clickOnTemplateOrCard(Id){
        cy.get(` [data-card-id=${Id}]`).click();
        return this;
    }
    clickOnActionsButton(){
        cy.findByTestId("card-back-actions-button").click()
        return this ;
    }
}
export default sharedActions;