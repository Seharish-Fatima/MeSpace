const toggleButton = document.getElementById("themeToggle");
const tooltip = document.querySelector(".tooltip-text");
const body = document.body;

let isDarkMode = body.classList.contains("dark-mode");

function updateToggleVisuals() {
  if (isDarkMode) {
    toggleButton.textContent = "☀️";
    tooltip.textContent = "Let the light in, sunshine ☀️";
  } else {
    toggleButton.textContent = "🌙";
    tooltip.textContent = "Time to dim the drama 🌙";
  }
}

toggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode");
  updateToggleVisuals();

  toggleButton.classList.add("toggle-animate");
  setTimeout(() => {
    toggleButton.classList.remove("toggle-animate");
  }, 300);
});

updateToggleVisuals();

// Modal logic ✨
const modals = [
  { cardId: "card1", modalId: "modal1", closeId: "closeModal1" },
  { cardId: "card2", modalId: "modal2", closeId: "closeModal2" },
  { cardId: "card3", modalId: "modal3", closeId: "closeModal3" },
  { cardId: "card4", modalId: "modal4", closeId: "closeModal4" },
  { cardId: "card5", modalId: "modal5", closeId: "closeModal5" },
];

modals.forEach(({ cardId, modalId, closeId }) => {
  const card = document.getElementById(cardId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeId);

  card.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.classList.add("modal-open"); // <-- freeze scroll properly!
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // <-- unfreeze scroll
  });

  // Close modal if clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});

// Sparkle cursor magic ✨
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";

  const emojis = ["✧", "♡", "★"];
  sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  sparkle.style.left = `${e.pageX + (Math.random() * 20 - 10)}px`;
  sparkle.style.top = `${e.pageY + (Math.random() * 20 - 10)}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

const starContainer = document.querySelector(".floating-stars");

function createStar() {
  const star = document.createElement("span");
  star.classList.add("star");
  star.textContent = ["✧", "♡"][Math.floor(Math.random() * 2)];

  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.fontSize = `${1.5 + Math.random() * 1.5}rem`;
  star.style.animationDuration = `${8 + Math.random() * 6}s`;
  star.style.opacity = `${0.5 + Math.random() * 0.5}`;

  // Optional: light color variation for twinkle vibe
  const colors = ["yellow", "pink"];
  star.style.color = colors[Math.floor(Math.random() * colors.length)];

  starContainer.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 20000);
}

setInterval(createStar, 1000);
