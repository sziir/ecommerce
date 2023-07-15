window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

//cart hint in hover
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item));

//alerting add product in cart
document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('أضيف المنتج إلى عربة الشراء');
    });
});

// changing sizes buttons
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active');
        });
        item.parentNode.parentNode.classList.add('active');
    });
});

// changing colors buttons
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active');
        });
        item.parentNode.parentNode.classList.add('active');
    });
});

//calc total price in product item
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const Price = parent.getAttribute('data-product-price');
        const newPrice = Price * newQuantity;
        parent.querySelector('.total-price-for-product').innerHTML = newPrice + '$';

        //calc total price in all cart item
        calcToTalPrice()
    });
});

// delete btn
document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove();

        //calc total price in all cart item after delete btn
        calcToTalPrice()
    });
});
function calcToTalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value;
        const totalPriceForProduct = pricePerUnite * quantity;
        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    });
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct;
}





//copyright' years
document.getElementById('year').innerHTML = new Date().getFullYear();
