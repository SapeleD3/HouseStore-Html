//variables

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-item');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

let cart = [];

//getting products
class Products{
    async getProducts () {
        try {
            let result = await fetch('products.json')
            let data = await result.json()
            let product = data.items;
            let productArr = product.map(item => {
                const {title, price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url  
                return {title,price,id,image}})
            return productArr
        } catch ( error) {
            console.log(error)
        }
    }
}

//display products
class UI {
    displayProducts(products){
        let result = '';

        products.forEach(product => {
            result += `
                <article class="product">
                    <div class="img-container">
                        <img src=${product.image} alt="product" class="product-img">
                        <button class="bag-btn" data-id=${product.id}>
                            <i class="fas fa-shopping-cart"></i>
                            add to bag
                        </button>
                    </div>
                    <h3>${product.title}</h3>
                    <h4>$${product.price}</h4>
                </article>
            `
        });
        productsDOM.innerHTML = result;
    }
}

//local storage
class storage {

}

document.addEventListener("DOMContentLoaded", ()=> {
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts().then(data => ui.displayProducts(data))
    
})