// FDA Recall Database 
const fdaRecallAPIBase = 'https://api.fda.gov/food/enforcement.json?limit=10';

// Query Selector Variable Declarations
const dataContainer = document.querySelector('#data-container');
const recallContainer = document.querySelector('#recall-container');
const submitBtn = document.querySelector('#submit-search-btn');
const restoreBtn = document.querySelector('#restore-btn');
const zipInput = document.querySelector('#zipInput')
const dropdownMenu = document.querySelector('#dropdown-menu');
const searchForm = document.querySelector('#search-bar')
// const lis = document.getElementsByTagName('li');
// // const lisArr = Array.from(lis);
// // console.log(lisArr);


// ____Event Listeners
document.addEventListener('DOMContentLoaded', displayAllRecalls);
searchForm.addEventListener('submit', submitHandler);



// ____Function Declarations
function displayAllRecalls(){
fetch(fdaRecallAPIBase)
.then(res=>res.json())
.then(data=>data.results.map(obj=>cardCreator(obj)));
};

function cardCreator(e){
    // console.log(e);
    let li = document.createElement('li');
    li.className = 'card';
    li.style.display = 'block';
    let h2 = document.createElement('h2');
    h2.innerText = `Product: ${e.product_description}`;
    li.append(h2);
    let h3a = document.createElement('h3');
    h3a.innerText = `City: ${e.city}`;
    li.append(h3a);
    let h3b = document.createElement('h3');
    h3b.innerHTML = 'id= stateId';
    h3b.innerText = `State: ${e.state}`;
    li.append(h3b);
    let h4 = document.createElement('h4');
    h4.innerText = `Zipcode: ${e.postal_code}`;
    li.append(h4);
    let p = document.createElement('p');
    p.innerText = `Reason for Recall: ${e.reason_for_recall}`;
    li.append(p);
    recallContainer.appendChild(li);
};

function submitHandler(e){
    e.preventDefault();
    let stateInput = dropdownMenu.value;
    const lis = document.getElementsByTagName('li');
    const lisArr = Array.from(lis);
    allRecalls(lisArr);
    narrowSearch(lisArr, stateInput);
    restoreBtn.addEventListener('click', ()=>{
        allRecalls(lisArr);
    });
};

function narrowSearch(arr, state){
    for (elem of arr){
        let target = elem.childNodes[2].innerText.slice(7);
        if (target !== state){
            elem.style.display = 'none';
        }
    } 
};

function allRecalls(arr){
    for (elem of arr){
        elem.style.display = 'block';
    }
};



// narrowSearch('CA');






// *********TO DO LIST - User deliverables *******
// 1. Create a displayAllRecalls() function that takes each obj and displays it on the DOM through a cardHandler() function 
// DONE!!!

// 2. Trigger displayAllRecalls after DOMContentLoaded event listenser. 
// DONE!!!

// 3. Create a search bar that can help search the state where a recall is issued. (Dropdown bar for all 50???)
// DONE!!!
// 4. When you click on an obj, it displays in a bigger view or a different manner


// *********It would be nice to's... *******
// 1. Dark-mode toggle


 