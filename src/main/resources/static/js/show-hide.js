const project_Type = document.getElementById("project");
const tokenContent = document.getElementById("token-content");
const projectCategory = document.getElementById("project-category");

project_Type.style.display = "none";
tokenContent.style.display = "none";
projectCategory.style.display = "none";

const txt = project_Type.innerText;


const posParagraph = document.getElementById("my-paragraph-pos");
const mnParagraph = document.getElementById("my-paragraph-mn");

posParagraph.style.display = "none";
mnParagraph.style.display = "none";

const projectCategoryText = projectCategory.innerText;

if (txt.toLowerCase() == "token") {
  tokenContent.style.display = "block";
} else if (txt.toLowerCase() == "coin") {
  if (projectCategoryText.toLowerCase() == "pos") {
    posParagraph.style.display = "block";
  } else if (projectCategoryText.toLowerCase() == "mn") {
    mnParagraph.style.display = "block";
  }
}