class moveTemplateAssertions{

    checkIfTheTemplateAppeareInDestinationList(destinationListId , templateId){
        cy.get(`[data-list-id='${destinationListId}']`)
            .find(`[data-card-id='${templateId}']`)
            .should("exist")
        return this;
    }
    checkIfTheTemplateRemovedFromOldList(oldListId , templateId){
        cy.get(`[data-list-id='${oldListId}']`)
            .find(`[data-card-id='${templateId}']`)
            .should("not.exist")
        return this;
    }
}
export default moveTemplateAssertions;