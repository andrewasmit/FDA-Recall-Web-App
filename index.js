// ______FDA Recall Database______
const fdaRecallAPIBase = 'https://api.fda.gov/food/enforcement.json?limit=10';

// ______Query Selector Variable Declarations______
const dataContainer = document.querySelector('#data-container');
const recallContainer = document.querySelector('#recall-container');
const restoreBtn = document.querySelector('#restore-btn');
const dropdownMenu = document.querySelector('#dropdown-menu');
const searchForm = document.querySelector('#search-bar')



// ____Event Listeners______
document.addEventListener('DOMContentLoaded', displayAllRecalls);
dropdownMenu.addEventListener('change', submitHandler);
// Another event listener inside the scope of the submitHandler function 


// ____Function Declarations______
// Render the data from the API
function displayAllRecalls(){
fetch(fdaRecallAPIBase)
.then(res=>res.json())
.then(data=>data.results.map(obj=>cardCreator(obj)));
createOptions(states);
};

// Organize the data from the API and render it onto the DOM
function cardCreator(e){
    // console.log(e);
    let li = document.createElement('li');
    li.className = 'card';
    li.style.display = 'inline-grid';
    let h2 = document.createElement('h2');
    h2.innerText = `Product: ${e.product_description}`;
    li.append(h2);
    let h3a = document.createElement('h3');
    h3a.innerText = `City: ${e.city}`;
    li.append(h3a);
    let h3b = document.createElement('h3');
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

// Handle the information from the search feature and send that state target to narrowSearch funtion
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

// Use the target info to isolate cards initalially rendered from the API and only display the cards that match that target state
function narrowSearch(arr, state){
    let counter = 0;
    arr.forEach(elem=>{
        let target = elem.childNodes[2].innerText.slice(7);
        if (target !== state){
            elem.style.display = 'none';
            return counter++;
        } 
    })
    if (counter === arr.length){
        let update = `There are currently no recalls in the state of ${state}.`;
        setTimeout(function(){window.alert(update);}, 100);
    }
};

// A simple function to display all recalls. Intended to be a reset from anytime narrowSearch is used
function allRecalls(arr){
    for (elem of arr){
        elem.style.display = 'inline-grid';
    }
};

 const states = {
 "AL":"Alabama",
 "AK":"Alaska",
 "AZ":"Arizona",
 "AR":"Arkansas",
 "CA":"California",
 "CO":"Colorado",
 "CT":"Connecticut",
 "DE":"Delaware",
 "DC":"District Of Columbia",
 "FL":"Florida",
 "GA":"Georgia",
 "HI":"Hawaii",
 "ID":"Idaho",
 "IL":"Illinois",
 "IN":"Indiana",
 "IA":"Iowa",
 "KS":"Kansas",
 "KY":"Kentucky",
 "LA":"Louisiana",
 "ME":"Maine",
"MD": "Maryland",
"MA":"Massachusetts",
"MI":"Michigan",
"MN":"Minnesota",
"MS":"Mississippi",
"MO":"Missouri",
"MT":"Montana",
"NE":"Nebraska",
"NV":"Nevada",
"NH":"New Hampshire",
"NJ":"New Jersey",
"NM":"New Mexico",
"NY":"New York",
"NC":"North Carolina",
"ND":"North Dakota",
"OH":"Ohio",
"OK":"Oklahoma",
"OR":"Oregon",
"PA":"Pennsylvania",
"RI":"Rhode Island",
"SC":"South Carolina",
"SD":"South Dakota",
"TN":"Tennessee",
"TX":"Texas",
"UT":"Utah",
"VT":"Vermont",
"VA":"Virginia",
"WA":"Washington",
"WV":"West Virginia",
"WI":"Wisconsin"
};


function createOptions(obj){
    for (elem in obj){
        let abrv = `${elem}`;
        let longName = `${obj[elem]}`;
        let option = document.createElement('option');
        option.value = abrv;
        option.innerText = longName;
        dropdownMenu.appendChild(option);
    }
};

