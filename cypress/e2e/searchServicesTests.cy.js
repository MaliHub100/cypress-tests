import searchHeader from "../support/pageObjects/searchHeader";
import servicePage from "../support/pageObjects/servicePage";
describe('Search Service Tests', () => {
  const header = new searchHeader();
  const service = new servicePage();

  beforeEach(() => {
    cy.visit('https://www.gov.il');
    });
  it('check search input and search button visable', ()=>{
    header.getSearchInput().should('be.visible');
  })  
  it('check click search input popup shoul open', ()=>{
    header.clickSearchInput();
    header.getServicesPopup().should('exist');
  })  
  it('search text and move to results page', () => {
    const searchText = 'ביטוח לאומי';
    header.searchFor(searchText);
    cy.url().should('include', encodeURIComponent(searchText));
    service.getSearchInput().should('have.value', searchText);
  });
  it('search text and move to no results page', () => {
    const searchText = '!';
    header.searchFor(searchText);
    cy.url().should('include', encodeURIComponent(searchText));
    service.getSearchInput().should('have.value', searchText);
    service.getErrorMsg().eq(1).should('have.text',"לא נמצאו");
  });
}
);
