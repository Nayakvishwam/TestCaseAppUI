const button = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Hide dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add("hidden");
    }
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});
