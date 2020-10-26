const productsContainer = document.querySelector("#products");
const remainig = document.querySelector('#remaining span')

const renderError = () => {
    const error = document.createElement('div')
    error.innerText = 'Not enough money left for that!'
    error.classList.add('error')
    document.querySelector('#cart').appendChild(error)
    setTimeout(() => {
        error.remove()
    }, 3000)
}
const updateBalanceHandler = () => {
    const sum = products.reduce((acc, product) => {
        return acc + (product.total || 0)
    }, 0)
    return 50 - sum;
}
const createProduct = (product, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="${product.img}" />
        <h3>${product.name}</h3>
        <p>£${product.price}</p>
        <select></select>
    `
    const selectItem = div.querySelector('select')
    // const total = 50;
    for (let i = 0; i <= product.max_quantity; i++) {
        const option = document.createElement('option')
        option.innerText = i
        option.value = i;
        selectItem.appendChild(option)
    }
    // const productIndex = products.findIndex((globalProduct) => {
    //     return product.id == globalProduct.id
    // })

    let previousSelectValue = 0;
    selectItem.addEventListener('change', (event) => {
        let quantity = parseInt(event.target.value);
        //    console.log(product.price * quantity)
        products[index].total = product.price * quantity;
        const newBalance = updateBalanceHandler();
        console.log(newBalance)
        if (newBalance >= 0) {
            remainig.innerHTML = parseInt(newBalance * 100) / 100;
            previousSelectValue = quantity;
        } else {
            renderError();
            selectItem.value = previousSelectValue
        }


        // const newProduct = {
        //     product_name: product.name,
        //     product_qty: quantity,
        //     product_price: product.price,
        // };

        // newProduct.forEach(() =>{
        //     const newTotal = 

        // })

    })
    return div;
}

products.forEach((product, index) => {
    const productElement = createProduct(product, index)
    productsContainer.appendChild(productElement)
})


