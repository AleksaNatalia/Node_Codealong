import { shuffle, take } from "lodash-es";
import getRandomFruitsName from "random-fruits-name";

// How do we avoid duplicates
function getFiveRandomFruits() {
  const fruits = [];

  for (let i = 0; i < 5; i++) {
    const name = getRandomFruitsName();
    fruits.push(name);
  }
  return fruits;
}
// How do we avoid duplicades???
const name = getRandomFruitsName();

console.log(name);
const url = "https://www.fruityvice.com/api/fruit/all";
const response = await fetch(url);
const data = response.json();

console.log(data);

const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffleAndRender() {
  /* How can we shuffle??? Maybe there is some awesome
  functionality in NPM somewhere? :D:D:D */

  const ingredients = getFiveRandomFruits();

  // const shuffledIngredients = shuffle(ingredients);
  // const fiveIngredients = take(shuffledIngredients, 10);
  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ul.append(li);
  });
}

button.addEventListener("click", () => {
  ul.textContent = null;
  shuffleAndRender();
});

console.log("yippie Smooth ieee");
