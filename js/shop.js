const cardContainer = document.querySelector("#cardContainer");
function addProducts() {
    products.forEach(individualCard => {
       let  productCard = `
       <div class="card" id="cardNumber${individualCard.id}">
            <h2>${individualCard.name}</h2>
            <p>Price: $${individualCard.price}</p>
            <img src="${individualCard.image}" alt=${individualCard.description}>
       </div>
       <div class="cardText">
            <h4>${individualCard.name}</h4>
            <p>${individualCard.description}</p>
            <p>${individualCard.price}</p>
            <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
       </div>
   `;  
   cardContainer.innerHTML += productCard;
    } );
}
addProducts();



