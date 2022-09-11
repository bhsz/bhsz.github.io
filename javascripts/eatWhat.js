const restaurants = [
    {
        "name": "Kiat Lee",
        "address": "Taman Pelangi",
        "category": "Breakfast, Lunch, Dinner",
        "food_type": "Chinese",
        "tags": "MY FAVOURITE"
    },
    {
        "name": "外婆板面",
        "address": "Taman Cantek",
        "category": "Breakfast, Lunch",
        "food_type": "Pan mee",
        "tags": "Oldie but goodie"
    },
    {
        "name": "Foh Chuan",
        "address": "Bundusan",
        "category": "Breakfast, Lunch",
        "food_type": "Vegetarian-friendly",
        "tags": "咸菜 noodles"
    },
    {
        "name": "The Hive",
        "address": "Wisma Langat",
        "category": "Lunch",
        "food_type": "Fusion",
        "tags": "Homies"
    },
    {
        "name": "City Vegetarian",
        "address": "Lintas Platinum",
        "category": "Lunch, Dinner",
        "food_type": "Chinese",
        "tags": "Vegetarian"
    },
    {
        "name": "Living Seed Vegetarian",
        "address": "Suria Sabah",
        "category": "Lunch, Dinner",
        "food_type": "Chinese",
        "tags": "Vegetarian"
    },
    {
        "name": "Pound",
        "address": "Jesselton Mall",
        "category": "Lunch, Dinner",
        "food_type": "Western",
        "tags": "Decent food, great view"
    },
    {
        "name": "Gusto",
        "address": "Waterfront",
        "category": "Dinner",
        "food_type": "Italian",
        "tags": "Go-to place for Dee and fam"
    },
    {
        "name": "Yen Ai",
        "address": "Lintas / Bornion",
        "category": "Snack, Supper",
        "food_type": "Herbal Tea",
        "tags": "Yumcha"
    },
    {
        "name": "El Centro",
        "address": "Austral Lane",
        "category": "Lunch, Dinner, Drinks",
        "food_type": "Western",
        "tags": "Good food, good vibes"
    },
    {
        "name": "New Mui Vui",
        "address": "Hiltop",
        "category": "Dinner, Supper",
        "food_type": "Chinese, Dumplings",
        "tags": "Date spot with Jacky"
    },
    {
        "name": "Omma's Oven",
        "address": "Lintas",
        "category": "Breakfast, Lunch, Snack",
        "food_type": "Bakery",
        "tags": "Focaccia is love, Focaccia is life"
    },
    {
        "name": "Fook Yuen",
        "address": "Damai",
        "category": "Breakfast, Lunch, Snack",
        "food_type": "Bread, noodles",
        "tags": "S-tier drinks, bread and 杂饭"
    },
    {
        "name": "Ampersand",
        "address": "Bandaran",
        "category": "Cafe",
        "food_type": "Coffee, Cake",
        "tags": "Good vibes with fast WiFi"
    },
    {
        "name": "Lumiere Coffee",
        "address": "Wisma Manikar",
        "category": "Cafe",
        "food_type": "Coffee, Cake, Light eats",
        "tags": "Decent coffee, doesn't get too busy"
    },
    {
        "name": "Brown Fox",
        "address": "Sutera Avenue",
        "category": "Cafe",
        "food_type": "Coffee, Cake, Ligh eats",
        "tags": "Fastest cafe WiFi in KK so far"
    },
    {
        "name": "Jason Pan Mee",
        "address": "Lido Plaza / I-Plaza",
        "category": "Breakfast, Lunch",
        "food_type": "Pan mee",
        "tags": "Please stop me from over-eating"
    },
    {
        "name": "Sinsuran Sang Nyuk Mee",
        "address": "Lintas",
        "category": "Breakfast, Lunch",
        "food_type": "Noodles",
        "tags": "It never goes wrong, but never go too often"
    },
    {
        "name": "Winner Hotel",
        "address": "Sinsuran",
        "category": "Lunch, Dinner",
        "food_type": "Chinese",
        "tags": "This one's a winner"
    },
    {
        "name": "Seng Heng",
        "address": "Sinsuran",
        "category": "Breakfast, Lunch",
        "food_type": "Noodles",
        "tags": "Emma's happy place"
    },
    {
        "name": "Tuaran Mee Restaurant",
        "address": "Inanam",
        "category": "Breakfast, Lunch",
        "food_type": "Noodles",
        "tags": "Don't get drunk on Li Hing"
    },
    {
        "name": "Sandakan Kopitiam",
        "address": "88 Marketplace",
        "category": "Breakfast, Lunch",
        "food_type": "Noodles",
        "tags": "Egg noodles go boing boing"
    },
    {
        "name": "Supertanker",
        "address": "Bundusan",
        "category": "Lunch, Dinner",
        "food_type": "Chinese",
        "tags": "OG Chinese dinner venue"
    },
    {
        "name": "How Kee",
        "address": "Beverly Hills",
        "category": "Breakfast, Lunch",
        "food_type": "Noodles",
        "tags": "Fish soup yum"
    },
    {
        "name": "Bornion Bread",
        "address": "Bornion",
        "category": "Breakfast",
        "food_type": "Bread",
        "tags": "Dee's favourite"
    }
]

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