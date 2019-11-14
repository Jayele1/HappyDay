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

test(`Is the Sun Out`, async () =>{
  await googleSearchPage.searchFor(`What is Today's Weather?`);
  await googleResultsPage.weatherResultsContain(`Sunny`)
})

test(`New Frank Ocean Song`, async () =>{
  await googleSearchPage.searchFor(`New Frank Ocean Music`);
  await googleResultsPage.musicResultsContain(`2019`)
})

test(`Something with Food`, async () =>{
})

test(`Something with TV or Art`, async () =>{
})
