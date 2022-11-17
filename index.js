// const beerAPIBase = 'https://api.punkapi.com/v2/beers';
// const tvShowAPIBase = 'http://api.tvmaze.com/search/shows?q=golden%20girls';
// const uniAPIBase = 'http://universities.hipolabs.com/search?country=United+Kingdom';
//---------------- 3 Attributes can be name, webpage, and country

// FDA Recall Database 
const fdaRecallAPIBase = 'https://api.fda.gov/food/enforcement.json?limit=10';
// There are plenty of attributes here to display;
// ---City/State of recall
// ---Product being recalled
// ---Reason for being recalled
// ---Distribution pattern
const dataContainer = document.querySelector('#data-container');
const recallContainer = document.querySelector('#recall-container');


fetch(fdaRecallAPIBase)
.then(res=>res.json())
.then(data=>apiHandler(data.results));

function apiHandler(e){
    for (obj of e){
        (console.log(obj));
    }
};

// function cardCreator(e){
//     document.
// }



// *********TO DO LIST - User deliverables *******
// 1. Create a displayAllRecalls() function that takes each obj and displays it on the DOM through a cardHandler() function

// 2. Trigger displayAllRecalls after DOMContentLoaded event listenser. 
// 3. Create a search bar that can help search the state where a recall is issued. (Dropdown bar for all 50???)
// 4. When you click on an obj, it displays in a bigger view or a different manner somehow


// *********It would be nice to's... *******
// 1. Dark-mode toggle


 