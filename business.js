// Commit 1: Create a business
console.log("Welcome to Tech Store!");

// Commit 2: Add an owner
const owner = "Alex";
console.log(`Owner: ${owner}`);

// Commit 3: Add a function
function welcomeBusiness(name) {
  return `Welcome to ${name}!`;
}

console.log(welcomeBusiness("Tech Store"));

// Commit 4: Add products
const products = ["Laptop", "Mouse", "Keyboard"];

products.forEach((product) => {
  console.log(product);
});

// Commit 5: Count products
function countProducts(products) {
  return products.length;
}

console.log(`Total products: ${countProducts(products)}`);

// Commit 6: Add product details
const productList = [
  { name: "Laptop", price: 45000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 }
];

console.log(productList);

// Commit 7: Filter expensive products
function getExpensiveProducts(products) {
  return products.filter((product) => product.price >= 1000);
}

console.log("Expensive products:", getExpensiveProducts(productList));

// Commit 8: Format products
function formatProduct(product) {
  return `${product.name} costs ₱${product.price}.`;
}

productList.forEach((product) => {
  console.log(formatProduct(product));
});

// Commit 9: Search for a product
function findProduct(products, name) {
  return products.find(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );
}

console.log("Search result:", findProduct(productList, "Laptop"));

// Commit 10: Add business summary
function showSummary(products) {
  console.log("=== Business Summary ===");
  console.log(`Business: Tech Store`);
  console.log(`Owner: ${owner}`);
  console.log(`Total products: ${products.length}`);

  products.forEach((product) => {
    console.log(`- ${formatProduct(product)}`);
  });
}

showSummary(productList);