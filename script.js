const link = "https://spreadsheets.google.com/feeds/list/1b8lIZPv5iZJX1LIgl9cxJ43cRnQ_ZgZbaOjARC0J5ts/od6/public/values?alt=json";
let category = "";



window.addEventListener("DOMContentLoaded", getData);



function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    category = document.querySelector(".category").id;
    console.log(category)
    myData.forEach(showData);
}

function showData(singleRecipe) {

    const template = document.querySelector("#templ").content;
    const clone = template.cloneNode(true);


    if (singleRecipe.gsx$category.$t === category) {
        clone.querySelector(".readMore").href = `/popup.html?link=${singleRecipe.id.$t}?alt=json`;
        clone.querySelector("h3").textContent = singleRecipe.gsx$name.$t;
        clone.querySelector(".image").src = `images/${category}/` + singleRecipe.gsx$picture.$t;
        clone.querySelector(".type").textContent = singleRecipe.gsx$type.$t;
        document.querySelector("#parent").appendChild(clone);
    }

}
