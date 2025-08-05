class deleteCardAssertions{

    checkIfCardIsRemoved(listId){
        cy.get(`[data-list-id='${listId}']  ol` ).should('be.empty')
        return this;
    }
}
export default deleteCardAssertions;