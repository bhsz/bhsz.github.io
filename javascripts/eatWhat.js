import restaurants from "./restaurants.json" assert {type: 'json'};

alert(JSON.stringify(restaurants));

const button = document.getElementById("next");
const logo = document.getElementById("logo");
const suggestion = document.getElementById("suggestion");
    
// Easier to mark a restaurant as seen than to delete from array
let seen = 0;
const getRestaurant = () => {
    if (seen === restaurants.length) return false;

    let index = -1;
    while (index < 0 || restaurants[index].seen) {
        index = Math.floor(Math.random() * restaurants.length);
    }
    seen++;
    restaurants[index].seen = true;
    
    return restaurants[index];
}
const cb = () => {
    const restaurant = getRestaurant();

    if (!restaurant) {
        suggestion.innerHTML = "<p>😔 I have ran out of suggestions</p>";
        return;
    }

    suggestion.innerHTML = `
        <p id="restaurant-name" class="semi-bold-black">${restaurant.name}</p>
        <div id="restaurant-metadata">
            <p>🏠 ${restaurant.address}</p>
            <p>⏰ ${restaurant.category}</p>
            <p>🍲 ${restaurant.food_type}</p>
            <p>💬 ${restaurant.tags}</p>
        </div>
    `

    logo.style.display = "none";
    suggestion.style.display = "block";
}
const enableButtons = () => {
    button.innerText = "Next!"
    button.style.backgroundColor = "#372549";
    button.disabled = false;
    button.addEventListener("click", cb)
}
enableButtons();