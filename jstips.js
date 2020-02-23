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
    console.log(singleTipsCateg)

    if (singleTipsCateg.gsx$category.$t == "For improvement seekers"){
        document.querySelector(".tips").classList.add("impr");
        document.querySelector("#improvements").appendChild(clone);
    }
    else if (singleTipsCateg.gsx$category.$t == "For improvisators"){
        document.querySelector(".tips2").classList.add("improv");
        document.querySelector("#improvisation").appendChild(clone);
    }
    else if (singleTipsCateg.gsx$category.$t == "For food waste fighters"){
        document.querySelector(".tips3").classList.add("fight");
        document.querySelector("#foodWaste").appendChild(clone);
        /*clone.querySelector(".fight").textContent = singleTipsCateg.gsx$category.$t;*/
    }


}

