import {Selector as selector, t} from 'testcafe';
import GoogleSearchPage from '../pages/googleSearch';
import GoogleResultsPage from '../pages/googleResults';


const googleSearchPage = new GoogleSearchPage();
const googleResultsPage = new GoogleResultsPage();


fixture `O Happy Day!`
  .page `https://www.youtube.com/watch?v=z-4mtA6Z88k`;


test(`Let it play`, async () => {
  await t.wait(10000000000);
})
