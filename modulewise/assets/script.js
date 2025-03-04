const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const dropdownOption = document.getElementById("dropdownOption");
const dropdownMenu = document.getElementById("dropdownMenu");
const body = document.getElementsByTagName("body");
console.log(body[0].addEventListener("click", (event) => {
    let id = event.target.id;
    if (id != "dropdownOption" && id != "dropdownMenu") {
        dropdownMenu.classList.add("hidden");
    }
}));
dropdownOption.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
})

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});