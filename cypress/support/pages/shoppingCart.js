export class ShoppingCart{     

    retornarProducto(producto){
        return cy.get(`[name^='${producto}']`) 
    }
    retornarPrecio(producto){
        return cy.get(`[name^='${producto}']`).siblings('#productPrice ');   
    }   
    clickTotal(){
        cy.get('#root > div > div.css-ha1fhc > div.css-n1d5pa > button').click();      
    }

    retornarTotal(){
       return cy.get('#price > b');        
    }
    clickCheckOut(){
        cy.get('.css-641vkz > .chakra-button').click();
       
    }
  
}