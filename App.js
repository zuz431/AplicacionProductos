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
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(ELEMENT) {
        if(ELEMENT.name==='delete') {
            ELEMENT.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succesfully', 'info');
        }
    }
    showMessage(message, cssClass) {
        const DIV = document.createElement('div');
        DIV.className = `alert alert-${cssClass} mt-4`;
        DIV.appendChild(document.createTextNode(message));
        //Showing in DOM
        const CONTAINER = document.querySelector('.container');
        const APP = document.querySelector('#App');
        CONTAINER.insertBefore(DIV,APP);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}



//DOM Events

document.getElementById('product-form').addEventListener('submit',function(e){
    const NAME = document.getElementById('name').value;
    const PRICE = document.getElementById('price').value;
    const YEAR = document.getElementById('year').value;

    const PRODUCT = new Product(NAME,PRICE,YEAR);

    const UI =  new UserInt();
    if(NAME === '' || PRICE === '' || YEAR === '') {
        return UI.showMessage('Complete Fields Please', 'danger')
    }
    UI.addProduct(PRODUCT);
    UI.resetForm();
    UI.showMessage('Product Added Succesfully','success');
    
    

    e.preventDefault();
});


document.getElementById('product-list').addEventListener('click', function(e){
    const UI = new UserInt();
    UI.deleteProduct(e.target);
});

