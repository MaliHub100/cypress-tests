describe('Replace mainBanner data', () => {
  it('should replace PMO mainBanner with public security mainBanner', () => {
    cy.request('GET', 'https://www.gov.il/govil-landing-page-api/he/api/offices/get/ministry_of_public_security')
      .then((response) => {
        const publicSecurityMainBanner = response.body.mainBanner;//save the data

        //request of prime_ministers_office
        cy.intercept('GET', 'https://www.gov.il/govil-landing-page-api/he/api/offices/get/prime_ministers_office', (req) => {
          req.continue((res) => {
            res.body.mainBanner = publicSecurityMainBanner; 
            res.send();
          });
        }).as('pmoContent');
 
        //when open PMO page should be publicSecurityMainBanner
        cy.visit('https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page');

        cy.get('[id="main-banner-container"]') 
          .should('exist')
          .find('img[alt="פנייה מוקדמת לקבלת מידע בעניין אלימות במשפחה"]')// i have to change it to generic code
          .should('exist');
      });
  });
});
