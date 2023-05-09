// Get references to the input fields
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const a = "";
const b = "";
function swapValues() {
  // Swap the values using a temporary variable
  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;

  a = input1.value;
  b = input2.value;

  console.log(`Swapped values: ${input1.value}, ${input2.value}`);
}

const swapButton = document.getElementById("swapButton");
//swapButton.addEventListener("click", swapValues);
swapButton.onclick = swapValues

console.log(`a,b values: ${a} ${b}`);