const link = "https://spreadsheets.google.com/feeds/list/1b8lIZPv5iZJX1LIgl9cxJ43cRnQ_ZgZbaOjARC0J5ts/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
    .then(res => res.json())
    .then (handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log("singleRowData - console");
    const template = document.querySelector("#cakerecipe").content;
    const clone = template.cloneNode(true);
    const category = singleRowData.gsx$category.$t

    console.log(category)
    if (category == "cake"){
        clone.querySelector("h3").textContent = singleRowData.gsx$name.$t;
        document.querySelector("#cakes").appendChild(clone);
    }
    /*if (category == "dessert"){
        clone.querySelector("h3").textContent = singleRowData.gsx$name.$t;
        document.querySelector("#desserts").appendChild(copy);
    }
    if (category == "cookies"){
        clone.querySelector("h3").textContent = singleRowData.gsx$name.$t;
        document.querySelector("#cookies").appendChild(clone);
    }*/
}




// click on the button = scroll to the top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
