// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log('Calculating subtotal, yey!');

  let priceVar = price.innerHTML;
  let quantityVar= quantity.valueAsNumber; // nao e innerhtml pq aqui ha 1 valor
  console.log(quantityVar*priceVar);
  let subValue = priceVar*quantityVar;
//  debugger;
  let subTotal= product.querySelector(".subtotal span");
  subTotal.innerHTML = `${subValue}`;
  return subValue;

}


function calculateAll() {


 // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  let cartProducts = document.getElementsByClassName("product");
  console.log(cartProducts);
  let cartProductsArray = [...cartProducts];

  let finalValue = document.getElementsByClassName("total-value span");

  cartProductsArray.forEach((item) => {
    updateSubtotal(item);
  
  });

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
