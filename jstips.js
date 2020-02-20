const link = "https://spreadsheets.google.com/feeds/list/1D9damZNJqKEhjnH-F1Mh14HySlRXpiobXI1e5A26nQw/od6/public/values?alt=json";
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

function showData(singleTipsCateg) {
    const template = document.querySelector("#templ").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = singleTipsCateg.gsx$name.$t;
    clone.querySelector(".description").textContent = singleTipsCateg.gsx$description.$t;
    clone.querySelector(".category").textContent = singleTipsCateg.gsx$category.$t;
    console.log(singleTipsCateg.gsx$category.$t)

    if (singleTipsCateg.gsx$category.$t == "For improvement seekers"){
        clone.querySelector(".category").classList.add("impr");
    }
    if (singleTipsCateg.gsx$category.$t == "For improvisators"){
        clone.querySelector(".category").classList.add("improv");
    }
    if (singleTipsCateg.gsx$category.$t == "For food waste fighters"){
        clone.querySelector(".category").classList.add("fight");
        /*clone.querySelector(".fight").textContent = singleTipsCateg.gsx$category.$t;*/
    }

    document.querySelector("#parent").appendChild(clone);

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