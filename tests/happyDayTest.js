import GoogleSearchPage from '../pages/googleSearch';
import GoogleResultsPage from '../pages/googleResults';


const googleSearchPage = new GoogleSearchPage();
const googleResultsPage = new GoogleResultsPage();


fixture `Is Today Going to be a good day?`
  .page `https://www.google.com`;

test(`Is Today Friday?`, async () => {
  await googleSearchPage.searchFor(`What is Today's date?`);
  await googleResultsPage.resultsContain(`Friday`)
})

test(`Is the Sun Out?`, async () =>{
  await googleSearchPage.searchFor(`What is Today's Weather?`);
  await googleResultsPage.weatherResultsContain(`Sunny`)
})

test(`New Frank Ocean Song?`, async () =>{
  await googleSearchPage.searchFor(`New Frank Ocean Music?`);
  await googleResultsPage.musicResultsContain(`2019`)
})

test(`Is Donald Trump Still President?`, async () =>{
  await googleSearchPage.searchFor(`Current President`);
  await googleResultsPage.presidentResultsContain(`Donald Trump`);
})

test(`What fruit is in season now NYC?`, async () =>{
  await googleSearchPage.searchFor(`What fruit is in season now NYC?`);
  await googleResultsPage.resultsContain(`Blueberries`)
})

test(`Its ok, you'll just have to make your own Happy Day!`, async() => {
  //Don't give up and keep trying!
})
