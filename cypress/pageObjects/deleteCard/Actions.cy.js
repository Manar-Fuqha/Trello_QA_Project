class deleteCardActions{

    clickOnActionsButtonOnDialog(){
        cy.findByTestId("card-back-actions-button").click()
        return this;
    }
    clickOnArchiveButton(){
        cy.findByTestId("card-back-archive-button").click()
        return this;
    }
    clickOnDeleteButton(){
        cy.findByTestId("card-back-delete-card-button").click()
        return this;
    }
    clickOnConfirmDeletionButton(){
        cy.findByTestId("popover-confirm-button").click()
        return this;
    }
}
export default deleteCardActions;