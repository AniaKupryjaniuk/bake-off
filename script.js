// url for the google spreadsheets api
const link = "https://spreadsheets.google.com/feeds/list/1b8lIZPv5iZJX1LIgl9cxJ43cRnQ_ZgZbaOjARC0J5ts/od6/public/values?alt=json";
let category = "";


// when all the html loads, the function getData will run
window.addEventListener("DOMContentLoaded", getData);


// this function sends a request for the data with and then parses the response from json into javascript object
// after its done it will run the function handleData
function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

// takes data from api as a parameter and runs a function for each of them
function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    //    console.log(myData[0].gsx$ingredients.$t)
    let ingredients = myData[0].gsx$ingredients.$t.split("\n");
    category = document.querySelector(".category").id;
    console.log(category)
    myData.forEach(showData);
}

function showData(singleRecipe) {

    // finds a template by id and returns its html content
    const template = document.querySelector("#templ").content;

    // makes the copy of the html template so that we can work with it in javascript
    const clone = template.cloneNode(true);


    if (singleRecipe.gsx$category.$t === category) {

        //adds link to readMore "button" which targets particular recipe
        clone.querySelector(".readMore").href = `/popup.html?link=${singleRecipe.id.$t}?alt=json`;

        // finds an h3 inside the "virtual" copy of the template and inserts a name of the recipe into it
        clone.querySelector("h3").textContent = singleRecipe.gsx$name.$t;

        // finds an image src > inserts an image url
        clone.querySelector(".image").src = `images/${category}/` + singleRecipe.gsx$picture.$t;
        const type = singleRecipe.gsx$type.$t;

        //vegan/glutenFree icons are hidden at the beginning, finds out if it is vegan/glutenFree, if yes, it adds class .show (display: block /in css)
        if (type === "vegan") {
            clone.querySelector(".vegan").classList.add("show");
        }
        if (type === "gluten-free") {
            clone.querySelector(".glutenFree").classList.add("show");
        }

        // append our "virtual" copy of the html into real html
        document.querySelector("#parent").appendChild(clone);
    }

}
