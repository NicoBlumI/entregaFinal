export class CheckOut{
    constructor(){
        this.nombre='#FirstName';
        this.apellido= '#lastName';
        this.cardNumber='#cardNumber';
        this.purchase='.css-13zsa';
    };

    escribirNombre(nombre){
        cy.get(this.nombre).type(nombre);
    };
    escribirApellido(apellido){
        cy.get(this.apellido).type(apellido);        
    };
    escribirNumero(numero){
        cy.get(this.cardNumber).type(numero);
    };
    clickPurchase(){

        cy.get(this.purchase).click();
        };


    
 


};