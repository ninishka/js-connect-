//.1

document.getElementById('button').addEventListener('click', function() {
  var button = this;
  button.parentNode.removeChild(button);
});

// document.getElementById('button').addEventListener('click', function() {
//   this.style.display = 'none';
// });

//.2

let imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg');
document.body.appendChild(imgElement);


//.3


function displayText() {
  var inputValue = document.getElementById("textInput").value;
  console.log('inputValue', inputValue)
  console.log('innerHTML', document.getElementById("outputText").innerHTML)
  document.getElementById("outputText").innerHTML = inputValue;
}


//.4

function calculateTotal(productData) {
  let totalAmount = 0;

  // for (let i = 0; i < productData.length; i++) {
  //     totalAmount += productData[i].amount;
  // }
  //same 
  productData.forEach(item => totalAmount += item.amount);

  return totalAmount;
}


const productData = [
  {product_id: 1, amount: 200},
  {product_id: 2, amount: 300},
  {product_id: 3, amount: 500}
];

const totalAmount = calculateTotal(productData);

document.querySelector('p').textContent = totalAmount;