class createCardActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }

}
export default createCardActions;