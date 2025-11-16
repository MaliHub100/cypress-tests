class searchHeader {
    getSearchInput() {
        return cy.contains('div', 'חפשו שירות או מידע');
    }
    getSearchButton(){
        return cy.get('button[title="חפשו שירות או מידע"]');
    }
    getServicesPopup(){
        return cy.get('div[class="advanced-search_overlay_Out_Of_Popup__qjx3J advanced-search_show__I-fWg"]');
    }
    searchFor(text) {
    this.getSearchInput().type(text);
    this.getSearchButton().click();
    }
    clickSearchInput(){
       this.getSearchInput().click();
    }
}
export default searchHeader;