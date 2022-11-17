// const beerAPIBase = 'https://api.punkapi.com/v2/beers';
// const tvShowAPIBase = 'http://api.tvmaze.com/search/shows?q=golden%20girls';
// const uniAPIBase = 'http://universities.hipolabs.com/search?country=United+Kingdom';
//---------------- 3 Attributes can be name, webpage, and country

// FDA Recall Database 
const fdaRecallAPIBase = 'https://api.fda.gov/food/enforcement.json?limit=10';
// Query Selector Variable Declarations
const dataContainer = document.querySelector('#data-container');
const recallContainer = document.querySelector('#recall-container');
const submitBtn = document.querySelector('#submit-search-btn');



document.addEventListener('DOMContentLoaded', displayAllRecalls);

function displayAllRecalls(){
fetch(fdaRecallAPIBase)
.then(res=>res.json())
// .then(data=>apiHandler(data.results));
.then(data=>data.results.map(obj=>cardCreator(obj)));
};

// function apiHandler(e){
//     e.map(obj=>cardCreator(obj))
// };

function cardCreator(e){
    let li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `
    <h2>Product: ${e.product_description}</h2>
    <h3>Location: ${e.city}, ${e.state}</h3>
    <p>Reason for Recall: ${e.reason_for_recall}</p>
    `
    recallContainer.appendChild(li);
}



// *********TO DO LIST - User deliverables *******
// 1. Create a displayAllRecalls() function that takes each obj and displays it on the DOM through a cardHandler() function

// 2. Trigger displayAllRecalls after DOMContentLoaded event listenser. 
// 3. Create a search bar that can help search the state where a recall is issued. (Dropdown bar for all 50???)
// 4. When you click on an obj, it displays in a bigger view or a different manner somehow


// *********It would be nice to's... *******
// 1. Dark-mode toggle


 