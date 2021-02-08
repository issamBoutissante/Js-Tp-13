var pays = document.getElementById("pays");
document.getElementById("etrangere").addEventListener("click", showOrHide);
document.getElementById("maroc").addEventListener("click", showOrHide);
var isEtrangere = false;
function showOrHide(e) {
  if (e.target.value == "etrangere") {
    pays.classList.add("show");
    pays.classList.remove("hide");
    isEtrangere = true;
    return;
  }
  var isEtrangere = false;
  pays.classList.add("hide");
  pays.classList.remove("show");
}

document.getElementById("afficher").onclick = () => {
  var message = document.getElementById("nom").value + " ";
  message += document.getElementById("prenom").value + ".";
  message += "Age " + document.getElementById("age").value;
  message +=
    document.querySelector('input[name="sexe"]:checked').value == "femme"
      ? "Elle"
      : "Il";
  message += isEtrangere
    ? " etranger d'origin Ses interets : " +
      document.getElementById("pays").value
    : " est marrocain Ses interets : ";
  var interets = document.querySelectorAll(".interet");
  for (var i = 0; i < interets.length; i++) {
    if (interets[i].checked) {
      message += interets[i].value + " ";
    }
  }
  document.getElementById("message").textContent = message;
};
