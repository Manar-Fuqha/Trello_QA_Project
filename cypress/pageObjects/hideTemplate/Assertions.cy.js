 class hideTemplateAssertions{

    checkIfShowInListButtonIsexist(){
        cy.findByTestId("card-back-unarchive-card-button").should("be.visible").and("contain" ,"Show in list")
        return this;
    }
    checkIfTemplateIsHidden(templateId , listId){
        cy.findByTestId("CloseIcon").click()
        cy.get(`[data-list-id="${listId}"]`).find(`[data-card-id="${templateId}"]`).should("not.exist")
        return this;
    }
    checkIfTemplateExistInCardTemplateDialog(templateName , listId){
        cy.get(`[data-list-id="${listId}"]`).find("[data-testid='card-template-list-button']").click()
        cy.findByTestId("card-template-link-component").should("contain", templateName).and("be.visible")
        return this;
    }
    
 }
 export default hideTemplateAssertions;