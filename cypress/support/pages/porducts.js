
export class Products{
    constructor(){
        this.botonCerrar='#closeModal';
        this.botonCarrito= '#goShoppingCart';
    }
    agregarCarrito(product){
        return cy.get(`[value^='${product}']`);      

    }
    cerrarPrompt(){
        cy.get(this.botonCerrar).click();
    }
    irCarrito(){
        cy.get(this.botonCarrito).click();
    }
}