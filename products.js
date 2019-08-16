//getting products
class products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
}
