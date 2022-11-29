export class Home{
    constructor(){
        this.botonShop="#onlineshoplink";
    }

    clickOnlikneShop(){
        cy.get(this.botonShop).click();
    }
}