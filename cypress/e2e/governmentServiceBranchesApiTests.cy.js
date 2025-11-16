describe('government-service-branches API Test', () => {
 it('should fetch users', () => {

  cy.intercept('GET', '**/govilHF/api/GetServices?culture=he').as('getServices');
  cy.intercept('GET', '**/he/BureausWebApi/bureaus/GetAggregationUnits').as('getAggregationUnits');
  cy.intercept('GET', '**/he/BureausWebApi/bureaus/GetAggregationCities').as('getAggregationCities');
  
  cy.visit('https://www.gov.il/he/government-service-branches');
  
  cy.wait('@getServices').its('response.statusCode').should('eq', 200);
  cy.wait('@getAggregationUnits').its('response.statusCode').should('eq', 200);
  cy.wait('@getAggregationCities').its('response.statusCode').should('eq', 200);
 });
});