describe('Check all appointment services', () => {
    const baseUrl = 'https://govisit.gov.il/he/authorities/authority/262';

    it('clicks appointment button on services that have it and checks URL', () => {
        cy.visit(baseUrl);

        cy.contains('h2', 'בחירת שירות לזימון תור').should('be.visible');

        //save all services that have appointment btn
        cy.get('div.service.p-4.my-16px.d-flex.justify-content-between').then($all => {
            const servicesWithButton = $all.filter((i, el) => Cypress.$(el).find('gov-visit-ws-new-appointment-button').length > 0);

            cy.wrap(servicesWithButton).each($service => {
                const labelText = Cypress.$($service).find('label').text().trim();
                //because the back button is disabled, we have to reload the origin page every time.
                cy.visit(baseUrl);
                cy.contains('h2', 'בחירת שירות לזימון תור').should('be.visible');

                cy.get('div.service.p-4.my-16px.d-flex.justify-content-between')
                    .contains('label', labelText)
                    .parent()
                    .find('gov-visit-ws-new-appointment-button')
                    .should('be.visible')
                    .click();

                cy.get('gov-visit-ws-header').should('be.visible');
                cy.url({ timeout: 30000 }).should('include', 'appointment');
            });
        });
    });
});
