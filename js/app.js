let cart = [];
const sideBarContainer = document.querySelector('#sideBarContainer');
function clearStorageAndCart() {
    let cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if (currentStorage) {
        let cart = currentStorage;
    }else {
        false;
    }
}

function removeFromCart() {
    let removeLink = document.getElementsByClassName('removeLink');
    for (let i = 0; i < removeLink.length; i++) {
        removeLink[i].addEventListener('click', (event) => {
            clearStorageAndCart();
            let selectedProduct = cart.find((cartItem) => cartItem.id == event.target.id);
            let itemIndex;
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == selectedProduct.id) {
                itemIndex = cart.indexOf(cart[j]);
                    }
                }
                
        });
    }
}