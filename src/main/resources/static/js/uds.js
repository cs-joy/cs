const Ticker1 = document.getElementById("ticker1");
const Ticker2 = document.getElementById("ticker2");

const Name1 = document.getElementById("name1");
const Name2 = document.getElementById("name2");

const Logo1 = document.getElementById("logo1");
const Logo2 = document.getElementById("logo2");

const Amount = document.getElementById("amount");
const Result = document.getElementById("result");

function swapping() {
  var v1 = document.getElementById("ticker1").innerText;
  var v2 = document.getElementById("ticker2").innerText;

  var ab1 = document.getElementById("name1").innerText;
  var ab2 = document.getElementById("name2").innerText;

  var l1 = document.getElementById("logo1");
  var l2 = document.getElementById("logo2");

  var am = document.getElementById("amount").value;
  var re = document.getElementById("result").value;

  // ticker swap
  var temp = v1;
  v1 = v2;
  v2 = temp;

  // project name swap
  var nemp = ab1;
  ab1 = ab2;
  ab2 = nemp;

  // project logo swap
  var logomp = l1.src;
  l1.src = l2.src;
  l2.src = logomp;

  // amount swap
  var amp = am;
  am = re;
  re = amp;

  Ticker1.innerHTML = v1;
  Ticker2.innerHTML = v2;

  Name1.innerHTML = ab1;
  Name2.innerHTML = ab2;

  Logo1.src = l1.src;
  Logo2.src = l2.src;

  Amount.value = am;
  Result.value = re;
}

const convert_amount = document.getElementById("amount");

document.getElementById("converting").addEventListener("click", () => {
const amount = convert_amount.value;

//const symbol = sym.value;
//const convert = con.value;
const symbol = Ticker1.innerText;
const convert = Ticker2.innerText;
console.log(`${amount} - ${symbol} - ${convert}`);
const fetch_url = `http://localhost:3232/convert/${amount}/${symbol}/${convert}`;
    fetch(fetch_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.conv);
        document.getElementById("result").value = data.conv;
      })
      .catch(function(error) {
        console.log(error);
      });
})