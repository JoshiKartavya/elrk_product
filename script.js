// document.addEventListener("DOMContentLoaded", function () {
//     const productsData = [
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Fancy Mules",
//         price: "$45.00 USD",
//         keywords: ["shoes", "party wear"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Fancy Mules",
//         price: "$45.00 USD",
//         keywords: ["shoes", "party wear"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Denim Jacket",
//         price: "$65.00 USD",
//         keywords: ["denim", "new arrivals"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Denim Jacket",
//         price: "$65.00 USD",
//         keywords: ["denim", "new arrivals"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Denim Jacket",
//         price: "$65.00 USD",
//         keywords: ["denim", "new arrivals"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Denim Jacket",
//         price: "$65.00 USD",
//         keywords: ["denim", "new arrivals"],
//       },
//       {
//         imageUrl: "https://assets-global.website-files.com/645a69e6ff9a558805774bf2/645d4046e126a5bcffaaa65c_image%20866-p-500.jpg",
//         name: "Denim Jacket",
//         price: "$65.00 USD",
//         keywords: ["denim", "new arrivals"],
//       },
//       // Add more product objects as needed
//     ];
  
//     const productsContainer = document.getElementById("#similar_pro");
  
//     // Function to create product elements based on data
//     function renderProducts(data) {
//       productsContainer.innerHTML = ""; // Clear existing products
  
//       data.forEach((product) => {
//         const productElement = document.createElement("div");
//         productElement.className = "product";
  
//         const imageElement = document.createElement("img");
//         imageElement.src = product.imageUrl;
//         imageElement.alt = product.name;
//         productElement.appendChild(imageElement);
  
//         const nameElement = document.createElement("p");
//         nameElement.className = "product-name";
//         nameElement.textContent = product.name;
//         productElement.appendChild(nameElement);
  
//         const priceElement = document.createElement("p");
//         priceElement.className = "product-price";
//         priceElement.textContent = product.price;
//         productElement.appendChild(priceElement);
  
//         productsContainer.appendChild(productElement);
//       });
//     }
  
//     // Initial render of products
//     renderProducts(productsData);
// });