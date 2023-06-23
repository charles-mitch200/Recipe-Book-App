const API_KEY = "0d4a9995535e44b78d00f1be5595c5e9";
const recipeListElem = document.getElementById("recipe-list-js");

// function to display recipes on the page
function displayRecipes(recipes) {
  recipeListElem.innerHTML = ``;
  recipes.forEach((recipe) => {
    const recipeItemElem = document.createElement("li");
    recipeItemElem.classList.add("recipe-item");
    recipeImageElem = document.createElement("img");
    recipeImageElem.src = recipe.image;
    recipeImageElem.alt = "recipe image";
    recipeTitleElem = document.createElement("h2");
    recipeTitleElem.innerText = recipe.title;
    recipeIngredientsElem = document.createElement("p");
    recipeIngredientsElem.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    recipeLinkElem = document.createElement("a");
    recipeLinkElem.href = recipe.sourceUrl;
    recipeLinkElem.innerText = "View Recipe";

    recipeItemElem.appendChild(recipeImageElem);
    recipeItemElem.appendChild(recipeTitleElem);
    recipeItemElem.appendChild(recipeIngredientsElem);
    recipeItemElem.appendChild(recipeLinkElem);
    recipeListElem.appendChild(recipeItemElem);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
