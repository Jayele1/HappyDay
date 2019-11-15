import {Selector as selector, t} from 'testcafe';

export default class GoogleResultsPage {
  constructor(){
    this.resultsBox = selector(`div[id="rso"]`);
    this.weatherResultsBox = selector(`div[id="wob_wc"]`);
    this.musicResultsBox = selector(`div[id="kx"]`);
    this.searchButton = selector(`input[value="Google Search"]`);
    this.presidentResultsBox = selector(`div[id="tsuid26"]`);
  }

  async resultsContain(value){
    await t.expect(this.resultsBox.child(0).innerText).contains(value);
  }

  async weatherResultsContain(value){
    await t.expect(this.weatherResultsBox.innerText).contains(value);
  }

  async musicResultsContain(value){
    await t.expect(this.musicResultsBox.innerText).contains(value);
  }

  async presidentResultsContain(value){
    await t.expect(this.resultsBox.child(0).innerText).notContains(value);
  }
}
