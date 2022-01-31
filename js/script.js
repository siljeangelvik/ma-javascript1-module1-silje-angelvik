// noinspection JSValidateTypes
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// QUESTION 1
console.log("QUESTION 1");
const cat = {
    complain: "Meow!",
    whatDoesTheCatSay: function () {
        return this.complain;
    }
};
console.log(cat.whatDoesTheCatSay());

// QUESTION 2
console.log("QUESTION 2");
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
console.log(heading);

// QUESTION 3
console.log("QUESTION 3");
heading.style.fontSize = "2em";
console.log(heading.style);

// QUESTION 4
console.log("QUESTION 4");
heading.classList.add("subheading");
console.log(heading.classList);

// QUESTION 5
console.log("QUESTION 5");
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraphs) => {
    paragraphs.style.color = "red";
});
console.log(paragraphs);

// QUESTION 6
console.log("QUESTION 6");
let resultsContainer = document.getElementsByClassName("results")[0];

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

console.log(resultsContainer);

// QUESTION 7
console.log("QUESTION 7");

function myFunctionWithTheCats(list) {
    list.forEach(cat => console.log(cat.name))
}

myFunctionWithTheCats(cats);

// QUESTION 8
console.log("QUESTION 8");

function createCats(cats) {
    cats.forEach((cat) => {
        let cats = document.createElement("div");
        cats.innerHTML = `<h5> ${cat.name}</h5>`;
        cats.innerHTML = `<p> ${cat.age}</p>`;

        if (onload) {
            cats.innerHTML = `<p>${cat.age}: Unknown</p>`;
        }
        return cats.innerHTML;
    })
}

createCats(cats);
document.getElementsByClassName("cat-container")[0].innerHTML = createCats;
console.log(cats);