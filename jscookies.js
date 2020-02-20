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

function showData(singleRecipe) {
    const template = document.querySelector("#templ").content;
    const clone = template.cloneNode(true);
    const category = singleRecipe.gsx$category.$t
    clone.querySelector("h3").textContent = singleRecipe.gsx$name.$t;

    if (category === "cookies"){
        clone.querySelector(".image").src = "images/cookies/" + singleRecipe.gsx$picture.$t;
        clone.querySelector(".type").textContent = singleRecipe.gsx$type.$t;
        document.querySelector("#parent").appendChild(clone);
    }


}

//back to top button

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
// click on the button = scroll to the top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}







