const hamburguer = document.querySelector(".navigation__button");
const navigation = document.querySelector(".navigation__background");

function showList() {
  navigation.classList.toggle("active");
}

hamburguer.addEventListener("click", showList);
