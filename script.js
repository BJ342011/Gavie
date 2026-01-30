featured items
const featured = [
  { type: "Game", name: "Cyber Adventure", img: "images/game1.jpg" },
  { type: "Movie", name: "Action Hero", img: "images/movie1.jpg" },
  { type: "Game", name: "Pixel Quest", img: "images/game2.jpg" },
  { type: "Movie", name: "Space Saga", img: "images/movie2.jpg" }
];

// Select button and hero elements
const button = document.getElementById("show-featured");
const hero = document.querySelector(".hero");
const heroTitle = hero.querySelector("h1");

// Add click event
button.addEventListener("click", () => {
  // Pick a random featured item
  const random = featured[Math.floor(Math.random() * featured.length)];

  // Change hero background
  hero.style.backgroundImage = `url(${random.img})`;

  // Change hero title
  heroTitle.textContent = `Featured ${random.type}: ${random.name}`;
});// Comment section
const commentButton = document.getElementById("add-comment");
const commentList = document.getElementById("comment-list");

commentButton.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if(name === "" || comment === "") {
    alert("Please enter both name and comment.");
    return;
  }

  // Create comment card
  const commentCard = document.createElement("div");
  commentCard.className = "comment-card";
  commentCard.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

  // Add to comment list
  commentList.prepend(commentCard);

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
});// Star rating system
const allRatings = document.querySelectorAll(".rating");

allRatings.forEach(rating => {
  const stars = rating.querySelectorAll(".star");

  stars.forEach(star => {
    // Hover effect
    star.addEventListener("mouseover", () => {
      highlightStars(stars, star.dataset.value);
    });
    star.addEventListener("mouseout", () => {
      highlightStars(stars, rating.dataset.rating);
    });

    // Click to set rating
    star.addEventListener("click", () => {
      rating.dataset.rating = star.dataset.value;
      highlightStars(stars, rating.dataset.rating);
    });
  });
});

function highlightStars(stars, rating) {
  stars.forEach(star => {
    if(star.dataset.value <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
  }
