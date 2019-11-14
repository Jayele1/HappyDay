import {Selector as selector, t} from 'testcafe';
import GoogleSearchPage from '../pages/googleSearch';
import GoogleResultsPage from '../pages/googleResults';


const googleSearchPage = new GoogleSearchPage();
const googleResultsPage = new GoogleResultsPage();


fixture `Is Today Going to be a good day?`
  .page `https://www.google.com`;


test(`Is Today Friday`, async () => {
  await t.resizeWindow(300,300)
})
