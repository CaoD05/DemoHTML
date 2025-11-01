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
      img: "https://upload.wikimedia.org/wikipedia/vi/5/53/Bleach_cover_01.jpg"
    },
    {
      title: "One Piece",
      category: "Adventure / Comedy",
      img: "https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg"
    },
    {
      title: "Attack on Titan",
      category: "Action / Dark Fantasy",
      img: "https://upload.wikimedia.org/wikipedia/vi/8/8d/%C4%90%E1%BA%A1i_chi%E1%BA%BFn_Titan_manga_t%E1%BA%ADp_1_ti%E1%BA%BFng_Vi%E1%BB%87t.png"
    },
    {
      title: "Demon Slayer",
      category: "Action / Historical",
      img: "https://upload.wikimedia.org/wikipedia/vi/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg"
    },
    {
      title: "My Hero Academia",
      category: "Superhero / Action",
      img: "https://upload.wikimedia.org/wikipedia/vi/5/5a/Boku_no_Hero_Academia_Volume_1.png"
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
