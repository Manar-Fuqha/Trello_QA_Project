class updateTemplateActions{


    editTemplateName(newTemplateName){
         cy.get(".KKqlcVPR434ayU textarea").clear().type(newTemplateName +"{enter}")
         return this;
    }
}
export default updateTemplateActions;