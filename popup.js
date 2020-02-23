console.log(window.location)

//ziska parametre z linku
const url = new URL(window.location);
const link = url.searchParams.get("link");
console.log(link)

let category = "";

window.addEventListener("DOMContentLoaded", getRecipe);



function getRecipe() {
    fetch(link)
        .then(res => res.json())
        .then(showRecipe);
}

function showRecipe(data) {
    console.log(data)
    const recipe = data.entry;
    console.log(recipe);
    const template = document.querySelector("#templ").content;
    const clone = template.cloneNode(true);
    const dots = clone.querySelectorAll(".dot");
    const skills = recipe.gsx$skils.$t;
    console.log(skills)
    const skillsArray = new Array(skills);

    //ide kym je i mensie ako skills, pri kazdom pripocitavame k i
    for(let i=0; i<skills; i++){
        dots[i].classList.add("active");
    }
    clone.querySelector(".image").src = `images/${recipe.gsx$category.$t}/` + recipe.gsx$picture.$t;
    clone.querySelector("h2").textContent = recipe.title.$t;
    clone.querySelector(".quote").textContent = recipe.gsx$quote.$t;
    clone.querySelector(".ingr").textContent = recipe.gsx$ingredients.$t;
    clone.querySelector(".instr").textContent = recipe.gsx$instructions.$t;
    document.querySelector("#parent").appendChild(clone);
}

