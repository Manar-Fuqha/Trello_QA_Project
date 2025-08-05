
class createTemplateAssertions{

    checkIfTemplateNameIsVisible(templateName){
        cy.get(".KKqlcVPR434ayU").contains('textarea' , templateName).should('be.visible')
        return this;
    }
    checkIfcardBackContainTemplateName(templateName){
        cy.get(".KKqlcVPR434ayU").should("contain" , templateName)
        return this;
    }

    checkIfListContainTemplateName(templateName , listId){ 
        cy.findByTestId("CloseIcon").click()
        cy.get(`[data-list-id=${listId}]`).should("contain" , templateName).and("contain" , "This card is a template.")
        return this;
    }
    checkIfTemplateBannerIfExist(){
        cy.findByTestId("template-card-back-banner").should("contain", "This is a Template card.")
        return this;
    }
    checkIfTemplateBannerIfVisible(){
        cy.findByTestId("template-card-back-banner").contains("This is a Template card.").should("be.visible")
        return this;
    }
}
export default createTemplateAssertions;