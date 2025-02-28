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
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");
    } else {
        sidebar.classList.add("hidden");
    }
});

// Simple toggle functionality
document.querySelectorAll('.folder-item').forEach(item => {
    item.addEventListener('click', function () {
        const chevron = this.querySelector('.fa-chevron-down, .fa-chevron-right');
        const folderIcon = this.querySelector('.fa-folder, .fa-folder-open');

        if (chevron) {
            chevron.classList.toggle('fa-chevron-down');
            chevron.classList.toggle('fa-chevron-right');
        }

        if (folderIcon) {
            folderIcon.classList.toggle('fa-folder');
            folderIcon.classList.toggle('fa-folder-open');
        }
    });
});
