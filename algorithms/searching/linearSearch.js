// Linear search examples
// Time complexity -> O(1) best case; O(n) worst case

function itemExists(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return true;
  }
  return false;
}

const witcherCharacters = ["Geralt", "Ciri", "Yennefer", "Triss", "Vesemir"];

console.log(itemExists(witcherCharacters, "Geralt"));
console.log(itemExists(witcherCharacters, "Naruto"));

function getProductName(array, id) {
  for (let i = 0; i < array.length; i++) {
    const product = array[i];
    if (id === product.id) return product.name;
  }
  return "Invalid product id provided";
}

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Iphone" },
  { id: 3, name: "Gaming monitor" },
];

console.log(getProductName(products, 3));
console.log(getProductName(products, 4));
