import {findtest} from "../../support/commands"
class createBoardActions{
    
    clickOnCreateButtonInNavBar(){      
        cy.wait(2000)
        cy.findByTestId("header-create-menu-button").click()
        return this;
}
    selectCreateBoardOption(){
        cy.wait(2000)
        cy.findByTestId("header-create-board-button").click()
        return this;
    }

    typeBoardNameInTitleField(boardName){
        cy.findByTestId("create-board-title-input" ).type(boardName)
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId("create-board-submit-button").click()
        return this;
    }

    

}
export default createBoardActions;