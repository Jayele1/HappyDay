import GoogleSearchPage from '../pages/googleSearch';
import GoogleResultsPage from '../pages/googleResults';


const googleSearchPage = new GoogleSearchPage();
const googleResultsPage = new GoogleResultsPage();


fixture `Is Today Going to be a good day?`
  .page `https://www.google.com`;

test(`Is Today Friday`, async () => {
  await googleSearchPage.searchFor(`What is Today's date?`);
  await googleResultsPage.resultsContain(`Monday`)
})
test(`Is the Weather above 70 Degrees`, async () =>{
  await googleSearchPage.searchFor(`What is Today's Weather?`);
  await googleResultsPage.resultsContain(`70`)
})
test(`Is the MTA delayed today`, async () =>{
})
test(`Did Frank Ocean release a new Song`, async () =>{
})
test(`Did Frank Ocean release a new Song`, async () =>{
})
