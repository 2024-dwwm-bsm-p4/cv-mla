const btnToggle = document.querySelector(".btnToggle");

btnToggle.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  const badges = document.querySelectorAll(".badge");
  const sections = document.querySelectorAll(".section");

  cards.forEach((card) => {
    card.classList.toggle("dark");
    card.classList.toggle("light");
  });

  badges.forEach((badge) => {
    badge.classList.toggle("dark");
    badge.classList.toggle("light");
  });

  sections.forEach((section) => {
    section.classList.toggle("dark");
  });

  if (btnToggle.innerHTML === "Go dark") {
    btnToggle.innerHTML = "Go light";
  } else {
    btnToggle.innerHTML = "Go dark";
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   AOS.init();
// });