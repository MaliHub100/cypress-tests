class servicePage{
      getSearchInput() {
        return cy.get('input[placeholder="חפשו שירות או מידע"]');
      }
      getErrorMsg(){
        return cy.get('span[ng-hide="totalResults"]');
      }

}
export default servicePage;