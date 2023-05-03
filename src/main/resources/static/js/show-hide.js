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

var tv1 = "";
var tv2 = "";

function swap() {
  tv1 = t1.innerText;
  tv2 = t2.innerText;

  var temp="";
  temp = tv1;
  tv1 = tv2;
  tv2 = temp;

  t1.innerHTML = tv1;
  t2.innerHTML = tv2;
  //console.log(t1.innerText);
}

const amount = 0.5;
const a1 = document.getElementById("t1");
const ab = document.getElementById("test");
ab.innerHTML = t1.innerText;
console.log("hello: " + tv1);
const f_url = `http://localhost:3232/convert/${amount}/${symbol}/${convert}`;

function convert() {
  fetch(f_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

    })
    .catch(function(error) {
            console.log(error);
    });
}