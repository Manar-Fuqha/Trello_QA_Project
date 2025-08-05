import {APIKey , APIToken} from "../support/constants.cy"
class dataUtiles{

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard(boardId){
        return cy.request('DELETE',`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }

    createNewList(listName , boardId){
        return cy.request("POST" ,
            `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${APIKey}&token=${APIToken}`
        )
    }

    createCard(cardName, listId){
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
            {
                "name":cardName
        })
    }

    createNewTemplate(templateName, listId){
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
            {
                "name":templateName,
                "isTemplate":true
        })
    }

}
export default dataUtiles;