// Get references to the input fields
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

//const amo = document.getElementById("amot");

var symbol = "";
var convert = "";

var clickCount = 0;

function swapValues() {
  // Swap the values using a temporary variable
  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;

  symbol = input1.value;
  convert = input2.value;
//  console.log(`check: ${amount} ${symbol} ${convert}`);
};

const swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", function() {
    swapValues();
    clickCount++;
//    console.log(`a,b values: ${a} ${b}`);
    if (clickCount%2 === 0) {
        // Button was clicked twice
        console.log('default position');
//        symbol = a;
//        convert = b;
//        console.log(`a,b values: ${a} ${b}`);
    }
});
//swapButton.onclick = swapValues
//console.log(`check: ${amount} ${symbol} ${convert}`);

symbol = input1.value;
convert = input2.value;
//const amt = amo.value;
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener('click', function() {
//    console.log(`${amt}`);
    const fetch_url = `http://localhost:3232/convert/1/${symbol}/${convert}`;
        fetch(fetch_url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
//            console.log(data.conv);
            document.getElementById("camount").value = data.conv;
          })
          .catch(function(error) {
            console.log(error);
          });
})