const products = [
    { name: "Red Shirt", category: "Clothing", price: 20 },
    { name: "Blue Shoes", category: "Footwear", price: 50 },
];

function filterByCategory(category) {
    return products.filter(product => product.category === category);
}

function searchProducts(query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterByCategory("Clothing")); // filter by clothing 
console.log(searchProducts("shirt")); // search for 'shirt'

// u can add as much as u need

// <?php>

// <?>