class hideTemplateActions{

    clickOnHideFromListButton(){
        cy.findByTestId("card-back-archive-button").click()
        return this;
    }
}
export default hideTemplateActions;