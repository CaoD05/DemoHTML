document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user_name");
  document.getElementById("user").textContent = user || "Guest";

  const books = [
    {
      title: "Naruto",
      category: "Action / Adventure",
      img: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
    },
    {
      title: "Bleach",
      category: "Supernatural / Shonen",
      img: "https://upload.wikimedia.org/wikipedia/en/7/72/Bleach_cover_01.jpg"
    },
    {
      title: "One Piece",
      category: "Adventure / Comedy",
      img: "https://upload.wikimedia.org/wikipedia/en/2/2c/OnePiece01Cover.jpg"
    },
    {
      title: "Attack on Titan",
      category: "Action / Dark Fantasy",
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Attack_on_Titan_volume_1_cover.jpg"
    },
    {
      title: "Demon Slayer",
      category: "Action / Historical",
      img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Kimetsu_no_Yaiba_Volume_1.jpg"
    },
    {
      title: "My Hero Academia",
      category: "Superhero / Action",
      img: "https://upload.wikimedia.org/wikipedia/en/0/03/My_Hero_Academia_Volume_1.png"
    }
  ];

  const grid = document.getElementById("bookGrid");
  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <div class="book-title">${book.title}</div>
      <div class="book-category">${book.category}</div>
      <button>Borrow</button>
    `;
    card.querySelector("button").onclick = () => alert(`You borrowed: ${book.title}`);
    grid.appendChild(card);
  });
});

function logout() {
  alert("You have logged out.");
}
