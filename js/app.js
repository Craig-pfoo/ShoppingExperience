let cart = [];
const sideBarContainer = document.querySelector('#sideBarContainer');
function clearStorageAndCart() {
    let cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if (currentStorage) {
        let cart = currentStorage;
    }
}