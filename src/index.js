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
        calcToTalPrice();
    });
});

// delete btn
document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove();

        //calc total price in all cart item after delete btn
        calcToTalPrice();
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
const citiesByCountry = {
    sa: ['الرياض', 'جدة'],
    eg: ['القاهرة', 'الإسكندرية'],
    jo: ['عمان', 'الزرقاء'],
    sy: ['دمشق', 'حلب', 'حماه'],
};

// update cities with the countries
document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value;
        const cities = citiesByCountry[country];
        document.querySelectorAll('#paymentcities option').forEach(option => option.remove());

        const firstOption = document.createElement('option');
        const optionText = document.createTextNode('اختر المدينة');
        firstOption.appendChild(optionText);
        firstOption.setAttribute('value', '');
        firstOption.setAttribute('disable', 'true');
        firstOption.setAttribute('selected', 'true');

        const city_options = document.getElementById('paymentcities');
        city_options.appendChild(firstOption);

        cities.forEach(city => {
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(city);
            newOption.appendChild(optionText);
            newOption.setAttribute('value', city);
            city_options.appendChild(newOption);
        });

    });
});
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentMethod = item.value;

        const creditCardInput = document.querySelectorAll('#credit-card-info');

        if (paymentMethod === 'on-delivery') {
            creditCardInput.forEach(input => {
                input.style.display = 'none';
            });
        } else {
            creditCardInput.forEach(input => {
                input.style.display = 'flex';
            });
        }
    });
});




//copyright' years
document.getElementById('year').innerHTML = new Date().getFullYear();
