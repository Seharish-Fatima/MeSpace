const toggleButton = document.getElementById("themeToggle");
const tooltip = document.querySelector(".tooltip-text");
const body = document.body;

let isDarkMode = body.classList.contains("dark-mode");

function updateToggleVisuals() {
  if (isDarkMode) {
    toggleButton.textContent = "☀️";
    tooltip.textContent = "Let the light in, sunshine ☀️ ";
  } else {
    toggleButton.textContent = "🌙";
    tooltip.textContent = "Time to dim the drama 🌙 ";
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

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      shapes: ["star", "diamond"],
      colors: ["#ff8fab", "#b76679", "#f4dada", "#ffffff"],
    });

    const link = card.closest("a");
    if (link) {
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    }
  });
});

const text = "Luxury-coded chaos, wrapped in ambition.";
let index = 0;
const speed = 80; // typing speed in ms

function typeWriterEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, speed);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeWriterEffect, 600); // suspense, darling.
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

const images = [
  "assets/af1.jpeg",
  "assets/af2.jpeg",
  "assets/af3.jpeg",
  "assets/af4.jpeg",
];

const imgEl = document.getElementById("affirmation-img");
let currentIndex = 0;

document.getElementById("affirmation-wrapper").addEventListener("click", () => {
  imgEl.style.opacity = 0;

  setTimeout(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === currentIndex);

    currentIndex = newIndex;
    imgEl.src = images[currentIndex];
    imgEl.style.opacity = 1;
  }, 300);
});
