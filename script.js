// THIS IS A JS COMMENT (like a note to yourself)
// The comments in this program are used to identify different sections
// Pick one of the sections to focus on in your discussion post
// Press RUN to start the script!

// 1. VARIABLES (basic data types)
let potionName = "Elixir of Invisibility";
let potionPrice = 50;                
let inStock = true;

// 2. VARIABLES (complex data types - look these up!)
// Array:
let ingredients = ["Dragon Scale", "Phoenix Feather", "Mandrake Root"];
// Object:
let potionDetails = {                 
  color: "Blue",
  potency: "Low",
  effect: "Grants invisibility for 3 hours"
};

// 3. CALLING FUNCTIONS
console.log("🧪 Potion Available:" + potionName);
console.log("💰 Price:" + potionPrice + " gold coins");
console.log("🧂 Ingredients:", ingredients.join(", "));
console.log("✨ Details:", potionDetails);

// 4. ARITHMETIC OPERATORS
let totalGold = 100;
let potionsBought = 0;
console.log("💸 Gold before purchase:", totalGold);

totalGold -= potionPrice; 
potionsBought++;

console.log("🎉 You bought:", potionName);
console.log("💰 Gold left:", totalGold);
console.log("🧮 Total potions bought:", potionsBought);

// 5. STRING CONCATENATION
let welcomeMessage = "Welcome, brave wizard! " +
                     "Today's special is the " + potionName + ".";
console.log("📜 Message:" + welcomeMessage);

// 6. INCREMENT/DECREMENT EXAMPLES
let potionStock = 5;
console.log("📦 Potion stock before sale:", potionStock);

potionStock--;
console.log("📦 Potion stock after sale:", potionStock);

// 7. DEFINING A FUNCTION
function calculateDiscount(price, percentage) {
  let discount = price * (percentage / 100);
  return price - discount;
}

let discountedPrice = calculateDiscount(potionPrice, 20);
console.log("💎 Discounted Price for " + potionName + "$" + discountedPrice);

