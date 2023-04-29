const toggleButton = document.getElementById("toggle-button");
const hiddenText = document.getElementById("hidden-text");

toggleButton.addEventListener("click", function() {
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    toggleButton.innerText = "Coin";
  } else {
    hiddenText.style.display = "none";
    toggleButton.innerText = "Token";
  }
});

//////////////////////////////////////////////////////////
const dbText = document.getElementById("db-text");
const t_content = document.getElementById("t_content");

const db_text_pos_or_mn = document.getElementById("db-text-pos-or-mn");

const coin_mn_content = document.getElementById("coin_mn_content");
const coin_pos_content = document.getElementById("coin_pos_content");

if (dbText.innerText == "token") {
  console.log("true, token");
  dbText.style.display = "none";
} else {
  dbText.style.display = "none";
  console.log("false, token");
  t_content.style.display = "none";

  if (db_text_pos_or_mn.innerText == "cpos") {
    //db_text_pos.style.display = "none";
    coin_mn_content.style.display = "none";
    console.log(coin_pos_content.innerText);
  } else {
    coin_pos_content.style.display = "none";
    console.log(coin_mn_content.innerText);
  }
}