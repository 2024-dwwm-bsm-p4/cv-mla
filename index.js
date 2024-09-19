const btnToggle = document.querySelector(".btnToggle");

btnToggle.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  const badges = document.querySelectorAll(".badge");

  cards.forEach((card) => {
    card.classList.toggle("dark");
    card.classList.toggle("light");
  });

  badges.forEach((badge) => {
    badge.classList.toggle("dark");
    badge.classList.toggle("light");
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