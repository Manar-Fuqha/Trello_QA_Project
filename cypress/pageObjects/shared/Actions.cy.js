class sharedActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }

    clickOnTemplateOrCard(Id){
        cy.get(` [data-card-id=${Id}]`).click();
        cy.wait(2000)
        return this;
    }
    clickOnActionsButton(){
        cy.findByTestId("card-back-actions-button").click()
        cy.wait(1500)
        return this ;
    }
}
export default sharedActions;