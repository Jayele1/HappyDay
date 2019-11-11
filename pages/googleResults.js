import {Selector as selector, t} from 'testcafe';

export default class GoogleResultsPage {
  constructor(){
    this.resultsBox = selector(`div[id="rso"]`);
    this.searchButton = selector(`input[value="Google Search"]`);
  }

  async resultsContain(value){
    await t.expect(this.resultsBox.child(0).innerText).contains(value);
  }
}
