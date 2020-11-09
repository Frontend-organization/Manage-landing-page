window.onload = () => {
  const hamburguer = document.querySelector(".navigation__button");
  const navigation = document.querySelector(".navigation__background");
  const hamburguerClose = document.querySelector(
    ".navigation__hamburger-close"
  );
  const hamburguerOpen = document.querySelector(".navigation__hamburger");

  function showList() {
    navigation.classList.toggle("active");
    hamburguerClose.classList.toggle("active");
    hamburguerOpen.classList.toggle("hidde");
  }
  hamburguer.addEventListener("click", showList);
};
