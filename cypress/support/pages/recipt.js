export class Recipt{

espera(nombre,apellido){
    cy.get('#name',{timeout:30000} ).should('have.text',`${nombre} ${apellido} has succesfully purchased the following items`);
   
}

verificarProducto(nombreProducto){

    cy.xpath(`//*[@id="${nombreProducto}"]`).should('have.text',`${nombreProducto}`);   
    
    
}
verificarTarjeta(numeroTarjeta){
   
    cy.xpath(`//*[@id="creditCard"]`).should('have.text',`${numeroTarjeta}`);

}
 verificarCostoTotal(total){

    cy.xpath(`//*[@id="totalPrice"]`).should('have.text',`You have spent $${total}`);
 }


}

