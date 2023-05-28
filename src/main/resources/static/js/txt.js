
const clause = document.getElementById("txt_clause");
const p = clause.innerText;
console.log(p);
txt_clause.innerHTML = p;


var sentence = "I love to code in JavaScript.";
console.log(sentence.length);

for (let i=0; i<=sentence.length; i++) {
//  console.log(sentence[i]);
  if (i == 9) {
    sentence[i] = "HI";
    console.log(sentence[i]);

  }
}
let ab = "<br />";
let result = sentence.concat(ab);
let sec = "good day";
let last = result.concat(sec);
console.log(last);

const cl = document.getElementById("_clause");
cl.innerHTML = last;


//////////////////////////
function divideText(text) {
  const middleIndex = Math.floor(text.length / 2);
  const firstPart = text.substring(0, middleIndex);
  const secondPart = text.substring(middleIndex);

  return [firstPart, secondPart];
}

const longText = "This is a long text that needs to be divided...";
const [part1, part2] = divideText(longText);

console.log(part1);
console.log(part2);
