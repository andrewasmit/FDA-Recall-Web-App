// const beerAPIBase = 'https://api.punkapi.com/v2/beers';
// const tvShowAPIBase = 'http://api.tvmaze.com/search/shows?q=golden%20girls';
const fdaRecallAPIBase = 'https://api.fda.gov/food/enforcement.json?limit=10';
// There are plenty of attributes here to 

const uniAPIBase = 'http://universities.hipolabs.com/search?country=United+Kingdom';
// 3 Attributes can be name, webpage, and country



fetch(fdaRecallAPIBase)
.then(res=>res.json())
.then(data=>apiHandler(data.results));

function apiHandler(e){
    for (obj of e){
        (console.log(obj));
    }
};