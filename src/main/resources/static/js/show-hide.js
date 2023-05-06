const project_Type = document.getElementById("project");
const tokenContent = document.getElementById("token-content");
const projectCategory = document.getElementById("project-category");

project_Type.style.display = "none";
tokenContent.style.display = "none";
projectCategory.style.display = "none";

const txt = project_Type.innerText;
console.log(txt);

const posParagraph = document.getElementById("my-paragraph-pos");
const mnParagraph = document.getElementById("my-paragraph-mn");

posParagraph.style.display = "none";
mnParagraph.style.display = "none";

const projectCategoryText = projectCategory.innerText;
const cId = document.getElementById("cid");
const dgWidth = document.getElementById("dgId");
if (txt.toLowerCase() == "token" || txt.toLowerCase() == "erc20" || txt.toLowerCase() == "bep20" || txt.toLowerCase() == "matic" || txt.toLowerCase() == "sol") {
  tokenContent.style.display = "block";
  cId.style.display = "none";
} else if (txt.toLowerCase() == "coin" || txt.toLowerCase() == "mn" || txt.toLowerCase() == "pos") {
  if (projectCategoryText.toLowerCase() == "pos") {
    posParagraph.style.display = "block";
  } else if (projectCategoryText.toLowerCase() == "mn") {
    mnParagraph.style.display = "block";
  }
}

const amo = document.getElementById("amo");
const sym = document.getElementById("sym");
const con = document.getElementById("con");

const t1 = document.getElementById("txt1");
const t2 = document.getElementById("txt2");

//var tv1 = "";
//var tv2 = "";

//function swap() {
//  tv1 = t1.innerText;
//  tv2 = t2.innerText;
//
//  var temp="";
//  temp = tv1;
//  tv1 = tv2;
//  tv2 = temp;
//
//  t1.innerHTML = tv1;
//  t2.innerHTML = tv2;
//
//  var amount = 0.5;
//  var symbol = t1.innerText;
//  var convert = t2.innerText;
//
//  var fetch_url = `http://localhost:3232/convert/${amount}/${symbol}/${convert}`;
//
//  const myButton = document.getElementById("conv");
//  myButton.addEventListener("click", () => {
//        fetch(fetch_url)
//          .then((response) => {
//            return response.json();
//          })
//          .then((data) => {
//             document.getElementById("test").innerHTML = data;
//          })
//          .catch(function(error) {
//                  console.log(error);
//          });
//  });
//
//}


document.getElementById("convert_action").addEventListener("click", () => {
const amount = amo.value;

//const symbol = sym.value;
//const convert = con.value;
const symbol = sym.innerText;
const convert = con.innerText;

const fetch_url = `http://localhost:3232/convert/${amount}/${symbol}/${convert}`;
    fetch(fetch_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.conv);
        document.getElementById("test").innerHTML = data.conv;
      })
      .catch(function(error) {
        console.log(error);
      });
})


function swap() {
  var v1 = document.getElementById("sym").innerText;
  var v2 = document.getElementById("con").innerText;

  var temp = "";
  temp = v1;
  v1 = v2;
  v2 = temp;

  sym.innerHTML = v1;
  con.innerHTML = v2;
}
