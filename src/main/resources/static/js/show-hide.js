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