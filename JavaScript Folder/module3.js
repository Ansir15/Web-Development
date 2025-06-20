export function displayproducts(products, calculateprice) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div"); // ✅ fixed
    div.innerHTML = `
      <h3> product name: ${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Quantity: ${product.quentity}</p>
      <p>Total Price: $${calculateprice(product.price, product.quentity).toFixed(2)}</p>
      <hr>
    `;
    container.appendChild(div);
  });
}
