import {Selector as selector, t} from 'testcafe';

export default class GoogleSearchPage {
  constructor(){
    this.searchBox = selector(`input[title="Search"]`);
    this.searchButton = selector(`input[value="Google Search"]`);
  }

  async searchFor(value){
    await t.typeText(this.searchBox, value);
    await t.click(this.searchButton);
  }
}
