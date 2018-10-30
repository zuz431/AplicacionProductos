class Product {
    constructor(name,price,year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UserInt {
    addProduct(PRODUCT) {
        const PRODUCTLIST = document.getElementById('product-list');
        const ELEMENT = document.createElement('div');
        ELEMENT.innerHTML = `
            <div class="card text-center mb-4">
                <div class card-body>
                    <strong>Product Name</strong>: ${PRODUCT.name}
                    <strong>Product Price</strong>: ${PRODUCT.price}
                    <strong>Product Year</strong>: ${PRODUCT.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>

            </div>
        `;
        PRODUCTLIST.appendChild(ELEMENT);
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct() {

    }
    showMessage() {

    }
}



//DOM Events

document.getElementById('product-form').addEventListener('submit',function(e){
    const NAME = document.getElementById('name').value;
    const PRICE = document.getElementById('price').value;
    const YEAR = document.getElementById('year').value;

    const PRODUCT = new Product(NAME,PRICE,YEAR);

    const UI =  new UserInt();
    UI.addProduct(PRODUCT);
    UI.resetForm();

    e.preventDefault();
});


document.getElementById('');

